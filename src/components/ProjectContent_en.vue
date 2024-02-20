<script setup lang="ts">
import { pb } from '@/backend'
import { ProjectIdEn } from '@/backend';
import { ref, onMounted, onUnmounted } from 'vue';
const props = defineProps<{
    id: string,
    image: string,
}>();
const ProjectInfo = await ProjectIdEn(props.id);
console.log(ProjectInfo)

const mainImg = ProjectInfo.main_image
const urlMainImg = mainImg && pb.getFileUrl(ProjectInfo, mainImg, { thumb: '100x200' })

// const img1 = ProjectInfo.image1
// const urlImg1 = img1 && pb.getFileUrl(ProjectInfo, img1, { thumb: '100x200' })
// const img2 = ProjectInfo.image2
// const urlImg2 = img2 && pb.getFileUrl(ProjectInfo, img2, { thumb: '100x200' })
// const img3 = ProjectInfo.image3
// const urlImg3 = img3 && pb.getFileUrl(ProjectInfo, img3, { thumb: '100x200' })
// const img4 = ProjectInfo.image4
// const urlImg4 = img3 && pb.getFileUrl(ProjectInfo, img4, { thumb: '100x200' })

// const imagebonus = ProjectInfo.gallery;
// console.log(imagebonus);
// const urlImagesBonus = imagebonus.map((nomImage: string) => {
//     return pb.getFileUrl(ProjectInfo, nomImage, { thumb: '100x250' });
// });
// console.log(urlImagesBonus);

</script>
    
<template>
    <!-- <div v-for= "(url, index) in urlImagesBonus" :key="index" >
            <img :src="url" :alt="'Image bonus ' + (index + 1)" >
                </div>
                <div >
                <img :src = "urlImagesBonus[1]" alt = "Image bonus 2" >
                    </div> -->


    <section class="mb-10">
        <h1 class="mb-0 font-bold font-itc">{{ ProjectInfo.title }}</h1>
        <div class="w-0 h-[1px] anim-slide-in rounded-full mb-1 bg-lightwhite"></div>
        <h2 class="my-6 text-xl font-thin font-itc"> {{ ProjectInfo.category.join(" | ") }}</h2>
        <img :src="urlMainImg" class="w-full h-auto mx-auto" />
        <div class="max-w-[70ch] py-5 h-full text-base md:text-lg lg:text-xl" v-html="ProjectInfo.intro"></div>
    </section>

    <section class="flex flex-col justify-between gap-10 py-10 lg:flex-row [&_p]:pb-5">
        <!-- <img :src="urlImg2" class="max-h-[500px] lg:max-w-[50%] mx-auto" /> -->
        <div>
            <p v-html="ProjectInfo.text_1"></p>

            <p class="max-w-[70ch]"></p>
            <p class="max-w-[70ch]">{{ ProjectInfo.text_1 }}</p>
            <p class="max-w-[70ch]">{{ ProjectInfo.text_2 }}</p>
            <ul class="flex flex-col">
                <li v-if="ProjectInfo.text_li">
                    <p>{{ ProjectInfo.text_li }}</p>
                </li>
            </ul>
        </div>
    </section>

    <section class="flex flex-col justify-between gap-10 py-10 lg:flex-row [&_p]:pb-5">
        <div>
            <p class="max-w-[70ch]" v-if="ProjectInfo.text_3">{{ ProjectInfo.text_3 }}</p>
            <p class="max-w-[70ch]" v-if="ProjectInfo.text_4">{{ ProjectInfo.text_4 }}</p>
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

    <section class="flex lg:flex-row flex-col justify-between gap-10 py-10 max-w-[100%]">
        <!-- <img :src="urlImg3" class="lg:w-[30%] h-full" />
        <img :src="urlImg2" class="lg:w-[30%] h-full" />
        <img :src="urlImg4" class="lg:w-[30%] h-full" /> -->
    </section>

    <p class="max-w-[70ch] py-10 text-base md:text-2xl lg:text-3xl 2xl:text-4xl" v-html="ProjectInfo.outro"></p>

    <!-- <div class="">
        <p class="ml-auto font-light border-none btn-style bg-grey">Share on Facebook / Twitter / LinkedIn</p>
       <a href="https://www.facebook.com/sharer/sharer.php?u=https://portfolio.lisa-cingolani.fr/{{ id }}"></a>
                    <a href="https://twitter.com/intent/tweet?url=https://portfolio.lisa-cingolani.fr/{{ id }}"></a>
    </div> -->
</template>