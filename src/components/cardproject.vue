<script setup lang="ts">
import { pb } from '@/backend'
import { ProjectId } from '@/backend';
import { ref, onMounted, onUnmounted } from 'vue';
const props = defineProps<{
    id: string,
}>();
const ProjectInfo = await ProjectId(props.id);
const CategoryTab = ref(ProjectInfo.category);

const img0 = props.image
const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '100x200' })
</script>
    
<template>
    <div class="flex flex-col items-center bg-white rounded-xl shadow-1 gap-4 md:max-w-[250px] max-w-[150px] py-4">
        <div class="relative flex flex-col items-start justify-start px-2 bg-white rounded-xl md:px-4">
            <img :src="urlImg0" :alt="ProjectInfo.alt_img" class="object-cover rounded-xl" />
        </div>
        <div class="relative flex items-center self-stretch justify-between px-3 md:px-6">
            <div>
                <p class="mb-0 text-sm lg:text-base">{{ ProjectInfo.title }}</p>
                <p class="mb-0 text-sm lg:text-base text-darkgrey">
                    {{ CategoryTab.join(", ") }}
                </p>
            </div>
        </div>
    </div>
</template>