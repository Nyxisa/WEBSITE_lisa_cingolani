<script setup lang="ts">
import { pb } from '@/backend'
import { ProjectId } from '@/backend';
import { ref, onMounted, onUnmounted } from 'vue';
const props = defineProps<{
    id: string,
}>();
const ProjectInfo = await ProjectId(props.id);
const CategoryTab = ref(ProjectInfo.category);

const img0 = ProjectInfo.image
const urlImg0 = img0 && pb.getFileUrl(ProjectInfo, img0, { thumb: '100x200' })
</script>
    
<template>
    <div class="flex flex-col items-center bg-white rounded-xl shadow-1 gap-4 max-w-[250px] pb-4">
            <img :src="urlImg0" class="object-cover rounded-b-none rounded-xl" />
            <div class="flex items-center gap-4 w-[100%]">
                <!-- <h6 class="mb-0">{{ CategoryTab.join(" | ") }}</h6> -->
                <h6 class="mb-0">Webdesign</h6>
                <div class="flex-1 border-b border-black"></div>
            </div>
            <h5 class="mb-0">{{ ProjectInfo.title }}</h5>
        <p>Lorem ipsum dolor sit amet consectetur. Varius lectus dictum rhoncus
            egestas. Imperdiet rhoncus in tellus cras condimentum posuere.</p>
    </div>
</template>