<script setup lang="ts">
import { pb } from '@/backend'
import { ProjectId } from '@/backend';
import { useHead } from '@unhead/vue'
const props = defineProps<{
    id: string,
}>();
const ProjectInfo = await ProjectId(props.id);

useHead({
    title: `${ProjectInfo.title} | Lisa Cingolani`
})
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
    <img src="" alt="">
    <p>{{ ProjectInfo.description }}</p>
</template>




