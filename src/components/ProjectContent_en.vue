<script setup lang="ts">
import { pb } from '@/backend'
import { ProjectIdEn } from '@/backend';
import { ref, onMounted, onUnmounted } from 'vue';
import CarrouselVue from './Carrousel.vue';
import Arrow from '@/components/icons/arrow.vue'
const props = defineProps<{
    id: string,
}>();
const ProjectInfo = await ProjectIdEn(props.id);
console.log(ProjectInfo)

const mainImg = ProjectInfo.main_image
const urlMainImg = mainImg && pb.getFileUrl(ProjectInfo, mainImg)

const allImg = ProjectInfo.gallery;
console.log(allImg);
const urlAllImg = allImg.map((oneImage: string) => {
    return pb.getFileUrl(ProjectInfo, oneImage);
});
console.log(urlAllImg);

// Display either an image or a video
const isImage = (url: string): boolean => {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const extension = url.substring(url.lastIndexOf('.')).toLowerCase();
    return imageExtensions.includes(extension);
};
const isVideo = (url: string): boolean => {
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov'];
    const extension = url.substring(url.lastIndexOf('.')).toLowerCase();
    return videoExtensions.includes(extension);
};
</script>
    
<template>
    <div class="lg:project-grid [&_p]:pb-2 [&_h3]:pb-2 [&_h6]:py-2 -mt-16 gap-10 flex-col flex">

        <section class="mt-10 col-span-full">
            <h1 class="mb-0 font-bold font-itc">{{ ProjectInfo.title }}</h1>
            <div class="w-0 h-[1px] anim-slide-in rounded-full mb-1 bg-lightwhite"></div>
            <h2 class="my-6 text-xl font-thin font-itc"> {{ ProjectInfo.category.join(" | ") }}</h2>
            <img :src="urlMainImg" class="w-full h-auto pb-10 mx-auto rounded-simple" />
            <div class="intro-outro" v-html="ProjectInfo.intro"></div>
        </section>

        <section class="flex flex-col justify-between lg:flex-row col-span-full">
            <div class="mb-10 grid grid-cols-[1fr,_1fr] grid-rows-6 gap-4 h-fit [&_img]:rounded-simple">
                <img :src="urlAllImg[6]" class="object-cover object-left h-full row-span-3 border border-lightwhite"
                    alt="Image 1">
                <img :src="urlAllImg[1]" class="object-cover object-left h-full row-span-4 border border-lightwhite"
                    alt="Image 2">
                <img :src="urlAllImg[2]" class="object-cover object-left h-full row-span-3 border border-lightwhite"
                    alt="Image 3">
                <img :src="urlAllImg[5]" class="object-cover object-left h-full row-span-2 border border-lightwhite"
                    alt="Image 4">
            </div>
            <div class="flex flex-col gap-10">
                <div v-html="ProjectInfo.text_1"></div>
                <div v-html="ProjectInfo.text_2"></div>
                <ul class="flex flex-col" v-if="ProjectInfo.text_li" v-html="ProjectInfo.text_li"></ul>
            </div>
        </section>

        <section class="flex flex-col justify-between gap-10 lg:flex-row col-span-full">
            <div>
                <img v-if="isImage(urlAllImg[2])" :src="urlAllImg[2]" class="max-h-[500px] lg:max-w-[50%] mx-auto" />
                <video v-else-if="isVideo(urlAllImg[2])" :src="urlAllImg[2]" controls autoplay muted></video>
            </div>
            <div v-if="ProjectInfo.text_3" v-html="ProjectInfo.text_3"></div>
            <div v-if="ProjectInfo.text_4" v-html="ProjectInfo.text_4"></div>
            <div>
                <img v-if="isImage(urlAllImg[0])" :src="urlAllImg[0]" class="max-h-[500px] lg:max-w-[50%] mx-auto" />
                <video v-else-if="isVideo(urlAllImg[0])" :src="urlAllImg[0]" controls autoplay muted></video>
            </div>
            <div v-if="ProjectInfo.text_5" v-html="ProjectInfo.text_5"></div>
        </section>

        <section class="flex lg:flex-row flex-col justify-between gap-10 max-w-[100%] col-span-full">
           <CarrouselVue/>
        </section>

        <section class="flex lg:flex-row flex-col justify-between gap-10 max-w-[100%] col-span-full">
            <Arrow/>
            <p class="intro-outro" v-html="ProjectInfo.outro"></p>
            <ul class="software-grid">
                <li>
                    <!-- {{ ProjectInfo.softwares_icons[1] }} -->
                    {{ ProjectInfo.softwares[1] }}
                </li>
                <li>{{ ProjectInfo.softwares[2] }}</li>
                <li v-if="ProjectInfo.softwares[3]">{{ ProjectInfo.softwares[3] }}</li>
                <li v-if="ProjectInfo.softwares[4]">{{ ProjectInfo.softwares[4] }}</li>
                <li v-if="ProjectInfo.softwares[5]">{{ ProjectInfo.softwares[5] }}</li>
                <li v-if="ProjectInfo.softwares[6]">{{ ProjectInfo.softwares[6] }}</li>
            </ul>
        </section>

    </div>
</template>