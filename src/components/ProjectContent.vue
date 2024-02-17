<script setup lang="ts">
import { pb } from '@/backend'
import { ProjectId } from '@/backend';
import { ref, onMounted, onUnmounted } from 'vue';
const props = defineProps<{
    id: string,
    image: string,
}>();
const ProjectInfo = await ProjectId(props.id);
console.log(ProjectInfo)

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
        <p class="max-w-[70ch] py-5 h-full">{{ ProjectInfo.intro }}</p>
        <!-- <img :src="urlImg1" class="w-full max-h-full mx-auto" /> -->
    </section>

    <section class="flex flex-col justify-between gap-10 py-10 lg:flex-row [&_p]:pb-5">
        <!-- <img :src="urlImg2" class="max-h-[500px] lg:max-w-[50%] mx-auto" /> -->
        <div>
            <p class="max-w-[70ch]">{{ ProjectInfo.text1 }}</p>
            <p class="max-w-[70ch]">{{ ProjectInfo.text2 }}</p>
            <ul class="flex flex-col gap-4">
                <li>{{ ProjectInfo.textli1 }}</li>
                <li>{{ ProjectInfo.textli2 }}</li>
                <li>{{ ProjectInfo.textli3 }}</li>
            </ul>
        </div>
    </section>

    <section class="flex flex-col justify-between gap-10 py-10 lg:flex-row [&_p]:pb-5">
        <div>
            <p class="max-w-[70ch]">{{ ProjectInfo.text3 }}</p>
            <p class="max-w-[70ch]">{{ ProjectInfo.text4 }}</p>
        </div>
        <ul class="software-grid">
            <li>
                <!-- {{ ProjectInfo.softwares_icons.slice(1, 2) }} -->
                {{ ProjectInfo.softwares.slice(0, 1)[0] }}
            </li>
            <li>{{ ProjectInfo.softwares.slice(1, 2)[0] }}</li>
            <li>{{ ProjectInfo.softwares.slice(2, 3)[0] }}</li>
            <li>{{ ProjectInfo.softwares.slice(3, 4)[0] }}</li>
        </ul>
    </section>

    <section class="flex lg:flex-row flex-col justify-between gap-10 py-10 max-w-[100%]">
        <!-- <img :src="urlImg3" class="lg:w-[30%] h-full" />
        <img :src="urlImg2" class="lg:w-[30%] h-full" />
        <img :src="urlImg4" class="lg:w-[30%] h-full" /> -->
    </section>

    <p class="max-w-[70ch] py-10">{{ ProjectInfo.outro }}
    </p>

    <!-- <div class="">
        <p class="ml-auto font-light border-none btn-style bg-grey">Share on Facebook / Twitter / LinkedIn</p>
       <a href="https://www.facebook.com/sharer/sharer.php?u=https://portfolio.lisa-cingolani.fr/{{ id }}"></a>
                    <a href="https://twitter.com/intent/tweet?url=https://portfolio.lisa-cingolani.fr/{{ id }}"></a>
    </div> -->
</template>