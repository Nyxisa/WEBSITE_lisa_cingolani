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
            <img :src="urlMainImg" class="w-full h-auto mx-auto mb-10 rounded-simple" />
            <div class="intro-outro" v-html="ProjectInfo.intro"></div>
        </section>

        <section class="flex flex-col justify-between xl:flex-row col-span-full">
            <div class="flex flex-wrap justify-center w-full gap-4 md:flex-nowrap">
                <div class="w-full sm:w-1/2 mb-1 md:mb-0 lg:w-1/3 [&_img]:w-full [&_img]:rounded-simple [&_img]:shadow-1">
                    <img v-if="urlAllImg[6]" :src="urlAllImg[6]" alt="Image 1">
                    <img v-if="urlAllImg[5]" :src="urlAllImg[5]" alt="Image 2" class="mt-8">
                    <img v-if="urlAllImg[4]" :src="urlAllImg[4]" alt="Image 3" class="mt-8">
                </div>
                <div class="w-full sm:w-1/2 lg:w-1/3 [&_img]:w-full [&_img]:rounded-simple [&_img]:shadow-1">
                    <img v-if="urlAllImg[3]" :src="urlAllImg[3]" alt="Image 4">
                    <img v-if="urlAllImg[2]" :src="urlAllImg[2]" alt="Image 5" class="mt-8">
                    <img v-if="urlAllImg[1]" :src="urlAllImg[6]" alt="Image 6" class="mt-8">
                </div>
            </div>


            <div class="flex flex-col gap-10">
                <div v-if="ProjectInfo.text_1" v-html="ProjectInfo.text_1"></div>
                <div v-if="ProjectInfo.text_2" v-html="ProjectInfo.text_2"></div>
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
            <CarrouselVue :id="props.id" />
        </section>

        <section class="flex lg:flex-row flex-col justify-between gap-10 max-w-[100%] col-span-full">
            <div class="flex gap-1">
                <Arrow class="h-fit min-w-[1rem] self-start" />
                <p class="py-4 md:py-2 intro-outro" v-html="ProjectInfo.outro"></p>
                <Arrow class="md:hidden transform scale-x-[-1] scale-y-[-1] h-fit self-end min-w-[1rem]" />
            </div>
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