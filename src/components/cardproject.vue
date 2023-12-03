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
    <div class="flex flex-col items-center self-stretch gap-4 pb-4 bg-white rounded-default shadow-1">
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


    <div
        class="bg-white text-lightblack rounded-[30px] flex flex-col items-start justify-between self-stretch  h-[508px] overflow-hidden shadow-1">
        <div class="bg-lightgrey self-stretch  h-[200px]"></div>
        <div class="pt-5 pr-[30px] pb-5 pl-[30px] flex flex-col gap-[30px] items-start justify-start self-stretch ">
            <div class="flex flex-col gap-2.5 items-start justify-start self-stretch ">
                <div class="pt-5 pb-5 flex flex-row gap-2.5 items-center justify-center self-stretch ">
                    <h4> Branding </h4>
                    <div class="border-solid border-black border-t border-r-[0] border-b-[0] border-l-[0] flex-1 h-0">
                    </div>
                </div>
                <h5>Logo Design</h5>
                <p>
                    Fictional retro-futuristic car brand. Lorem ipsum dolor sit amet
                    consectetur. Varius lectus dictum rhoncus egestas. Imperdiet rhoncus
                    in tellus cras condimentum posuere.
                </p>
            </div>
            <div
                class="bg-orange text-lightwhite rounded-[50px] pt-[18px] pr-8 pb-[18px] pl-8 flex flex-row gap-2.5 items-center justify-center self-stretch ">
                Read More
            </div>
        </div>
    </div>
</template>