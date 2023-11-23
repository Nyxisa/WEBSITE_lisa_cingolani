<script setup lang="ts">
useHead({
    title: `${ProjectInfo.title} | Lisa Cingolani`
})

import { pb } from '@/backend'
import { ProjectId } from '@/backend';
import { useHead } from '@unhead/vue'
const props = defineProps<{
    id: string,
    image: string,
}>();

const ProjectInfo = await ProjectId(props.id);
const img0 = props.image
const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '100x200' })
</script>

<template>
    <div class="relative flex gap-4 div-graphic animate-scrolling">
        <h1 class="font-bold w-fit text-giant no-stroke ">THE PROJECT</h1>
        <h1 class="font-normal text-giant w-fit no-stroke ">THE PROJECT</h1>
        <h1 class="font-normal stroke-2 text-giant w-fit ">THE PROJECT</h1>
        <h1 class="font-bold w-fit text-giant no-stroke ">THE PROJECT</h1>
        <h1 class="font-normal text-giant w-fit no-stroke ">THE PROJECT</h1>
        <h1 class="font-normal stroke-2 text-giant w-fit ">THE PROJECT</h1>
    </div>
    <h1>{{ ProjectInfo.title }}</h1>
    <img :src="urlImg0" :alt="ProjectInfo.alt_img"/>
    <p>{{ ProjectInfo.description }}</p>
</template>




