<script setup lang="ts">
const props = defineProps<{
    id: string,
    image: string,
}>();
const ProjectInfo = await ProjectId(props.id);

import CardProject from '@/components/CardProject.vue';
import { ProjectId, allProjectsSorted } from '@/backend';
const ProjectsListeSorted = await allProjectsSorted();
console.log(ProjectsListeSorted)

const img0 = props.image
const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '100x200' })

import { useHead } from '@unhead/vue'
useHead({
    title: `${ProjectInfo.title} | Lisa Cingolani`
})
</script>

<template>
    <div class="relative hidden gap-4 lg:flex div-graphic animate-scrolling">
        <h1 class="font-bold w-fit text-giant no-stroke ">PROJECTS</h1>
        <h1 class="font-normal text-giant w-fit no-stroke ">PROJECTS</h1>
        <h1 class="font-normal stroke-2 text-giant w-fit ">PROJECTS</h1>
        <h1 class="font-bold w-fit text-giant no-stroke ">PROJECTS</h1>
        <h1 class="font-normal text-giant w-fit no-stroke ">PROJECTS</h1>
        <h1 class="font-normal stroke-2 text-giant w-fit ">PROJECTS</h1>
    </div>
    <main>
        <ul class="flex-wrap justify-around -mb-8 md:gap-5 lg:gap-20 md:mb-0 md:flex">
            <li v-for="projects in ProjectsListe" :key="projects.id">
                <RouterLink :to="{ name: 'projects-id', params: { id: projects.id } }" class="flex flex-col h-full">
                    <CardProject :key="projects.id" v-bind="{ ...projects }" />
                </RouterLink>
                <Circle class="mx-auto mb-10 md:hidden" />
            </li>
        </ul>
    </main>
</template>