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

const img1 = ProjectInfo.image1
const urlImg1 = img1 && pb.getFileUrl(ProjectInfo, img1, { thumb: '100x200' })
const img2 = ProjectInfo.image2
const urlImg2 = img2 && pb.getFileUrl(ProjectInfo, img2, { thumb: '100x200' })
const img3 = ProjectInfo.image3
const urlImg3 = img3 && pb.getFileUrl(ProjectInfo, img3, { thumb: '100x200' })
const img4 = ProjectInfo.image4
const urlImg4 = img3 && pb.getFileUrl(ProjectInfo, img4, { thumb: '100x200' })

</script>
    
<template>
    <section class="mb-10">
        <h1 class="mt-4 mb-2">{{ ProjectInfo.title }}</h1>
        <div class="flex items-center w-full gap-4 pb-10">
            <h2 class="pt-3 text-xl font-thin"> {{ ProjectInfo.category.join(" | ") }}</h2>
            <div class="flex-1 border-b border-lightwhite"></div>
        </div>
        <p class="max-w-[70ch] h-full">{{ ProjectInfo.intro }}</p>
        <img :src="urlImg1" class="w-full max-h-full mx-auto" />
    </section>

    <section class="flex flex-col justify-between gap-10 py-10 lg:flex-row">
        <img :src="urlImg2" class="max-h-[500px] lg:max-w-[50%] mx-auto" />
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

    <section class="flex flex-col justify-between gap-10 py-10 lg:flex-row">
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
        <img :src="urlImg3" class="lg:w-[30%] h-fit" />
        <img :src="urlImg2" class="lg:w-[30%] h-fit" />
        <img :src="urlImg4" class="lg:w-[30%] h-fit" />
    </section>

    <p class="max-w-[70ch] py-10">{{ ProjectInfo.outro }}
    </p>

    <div class="">
        <p class="ml-auto font-light border-none btn-style bg-grey">Share on Facebook / Twitter / LinkedIn</p>
        <!-- <a href="https://www.facebook.com/sharer/sharer.php?u=https://portfolio.lisa-cingolani.fr/{{ id }}"></a>
                    <a href="https://twitter.com/intent/tweet?url=https://portfolio.lisa-cingolani.fr/{{ id }}"></a> -->
    </div>
</template>