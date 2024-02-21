<script setup lang="ts">
import { pb } from '@/backend'
import { ProjectId } from '@/backend';
import CarrouselVue from './Carrousel.vue';
import Arrow from '@/components/icons/arrow.vue'
const props = defineProps<{
    id: string,
    main_image: string,
}>();
const ProjectInfo = await ProjectId(props.id);
console.log(ProjectInfo)

const mainImg = ProjectInfo.main_image
const urlMainImg = mainImg && pb.getFileUrl(ProjectInfo, mainImg)

const allIcons = ProjectInfo.softwares_icons;
console.log(allIcons);
const urlAllIcons = allIcons.map((oneIcon: string) => {
    return pb.getFileUrl(ProjectInfo, oneIcon);
});
console.log(urlAllIcons);

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
    <div
        class="[&_p]:pb-2 [&_h3]:pb-2 [&_h3]:text-grey [&_h3]:font-thin [&_h6]:text-grey [&_h6]:py-2 -mt-16 flex flex-col gap-10">

        <section class="mt-20 col-span-full">
            <h1 class="mb-0 font-bold font-itc">{{ ProjectInfo.title }}</h1>
            <div class="w-0 h-[1px] anim-slide-in rounded-full mb-1 bg-lightwhite"></div>
            <h2 class="my-6"> {{ ProjectInfo.category.join(" | ") }}</h2>

            <section class="md:project-grid">
                <img :src="urlMainImg" class="w-full h-auto mx-auto mb-10 rounded-simple col-span-full" />
                <div class="flex flex-col justify-between h-full col-span-5 py-2 mb-10">
                    <h3 class="pt-2 text-right border-t">{{ ProjectInfo.date.slice(0, 7) }}</h3>
                    <h3 class="pt-2 text-right border-t">{{ $t('projects.case') }}</h3>
                    <a v-if="ProjectInfo.link" :href="ProjectInfo.link" target="_blank"
                        class="ml-auto hover:bg-lightwhite hover:text-lightblack transition-all pb-1.5 btn-style">{{
                            $t('projects.link')
                        }}</a>
                </div>
                <div class="col-start-7 col-span-full intro-outro" v-html="ProjectInfo.intro">
                </div>
            </section>

        </section>

        <section class="flex flex-col justify-between gap-10 md:project-grid">
            <div class="flex justify-center w-full col-span-5 gap-4 flex-nowrap">
                <div class="mb-1 md:mb-0 w-1/2 [&_img]:w-full [&_img]:rounded-simple [&_img]:shadow-1">
                    <img v-if="urlAllImg[2]" :src="urlAllImg[2]" alt="Image 1">
                    <img v-if="urlAllImg[4]" :src="urlAllImg[4]" alt="Image 2" class="mt-4">
                    <img v-if="urlAllImg[6]" :src="urlAllImg[6]" alt="Image 3" class="mt-4">
                </div>
                <div class="w-1/2 [&_img]:w-full [&_img]:rounded-simple [&_img]:shadow-1">
                    <img v-if="urlAllImg[3]" :src="urlAllImg[3]" alt="Image 4">
                    <img v-if="urlAllImg[5]" :src="urlAllImg[5]" alt="Image 5" class="mt-4">
                    <img v-if="urlAllImg[7]" :src="urlAllImg[7]" alt="Image 6" class="mt-4">
                </div>
            </div>
            <div class="flex flex-col col-start-7 gap-10 col-span-full">
                <div v-if="ProjectInfo.text_1" v-html="ProjectInfo.text_1"></div>
                <div v-if="ProjectInfo.text_2" v-html="ProjectInfo.text_2"></div>
                <ul class="flex flex-col" v-if="ProjectInfo.text_li" v-html="ProjectInfo.text_li"></ul>
            </div>
        </section>

        <section class="flex flex-col justify-between gap-10 md:flex-row md:project-grid">
            <div class="col-span-5">
                <img v-if="isImage(urlAllImg[0])" :src="urlAllImg[0]" class="rounded-simple" />
                <video v-else-if="isVideo(urlAllImg[0])" :src="urlAllImg[0]" class="rounded-simple" controls autoplay loop
                    muted></video>
            </div>
            <div class="flex flex-col col-start-7 gap-10 col-span-full">
                <div v-if="ProjectInfo.text_3" v-html="ProjectInfo.text_3"></div>
                <div v-if="ProjectInfo.text_4" v-html="ProjectInfo.text_4"></div>
            </div>
        </section>

        <section class="flex flex-col justify-between gap-10 md:project-grid">
            <div class="col-span-5">
                <img v-if="isImage(urlAllImg[1])" :src="urlAllImg[1]" class="rounded-simple" />
                <video v-else-if="isVideo(urlAllImg[1])" :src="urlAllImg[1]" class="rounded-simple" controls autoplay loop
                    muted></video>
            </div>
            <div class="col-start-7 col-span-full" v-if="ProjectInfo.text_4" v-html="ProjectInfo.text_4"></div>
        </section>

        <section class="flex lg:flex-row flex-col justify-between gap-10 max-w-[100%] col-span-full">
            <CarrouselVue v-if="urlAllImg[8]" :id="props.id" />
        </section>

        <section class="flex flex-col justify-between w-full gap-10 lg:gap-4 lg:flex-row col-span-full">
            <div class="flex gap-1 lg:w-[50%]">
                <Arrow class="self-start h-auto min-w-[2rem] max-w-[2rem]" />
                <p class="!py-8 [&_p]:!pb-2 md:!py-1 intro-outro" v-html="ProjectInfo.outro"></p>
                <Arrow class="md:hidden transform scale-x-[-1] scale-y-[-1] h-auto self-end min-w-[2rem] max-w-[2rem]" />
            </div>
            <section class="lg:w-[50%]">
                <h3 class="mx-auto mb-4 text-center lg:mt-2">{{ $t('projects.made') }}</h3>
                <ul class="mx-auto max-w-screen software-flex xl:software-grid">
                    <li v-if="urlAllIcons[0]" class="software-li">
                        <img :src="urlAllIcons[0]" />
                        {{ ProjectInfo.softwares[0] }}
                    </li>
                    <li v-if="urlAllIcons[1]" class="software-li">
                        <img :src="urlAllIcons[1]" />
                        {{ ProjectInfo.softwares[1] }}
                    </li>
                    <li v-if="urlAllIcons[2]" class="software-li">
                        <img :src="urlAllIcons[2]" />
                        {{ ProjectInfo.softwares[2] }}
                    </li>
                    <li v-if="urlAllIcons[3]" class="software-li">
                        <img :src="urlAllIcons[3]" />
                        {{ ProjectInfo.softwares[3] }}
                    </li>
                    <li v-if="urlAllIcons[4]" class="software-li">
                        <img :src="urlAllIcons[4]" />
                        {{ ProjectInfo.softwares[4] }}
                    </li>
                    <li v-if="urlAllIcons[5]" class="software-li">
                        <img :src="urlAllIcons[5]" />
                        {{ ProjectInfo.softwares[5] }}
                    </li>
                </ul>
            </section>
        </section>

    </div>
</template>