<script setup lang="ts">
import { ProjectId, allProjectsSorted } from '@/backend';
import CardProject from '@/components/CardProject.vue';

const props = defineProps<{
    id: string,
}>();

const ProjectsListeSorted = await allProjectsSorted();
console.log(ProjectsListeSorted)
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

    <div class="text-center lg:hidden">
        <h1 class="text-2xl">PROJECTS</h1>
    </div>
    <main>
        <ul class="flex-wrap justify-around -mb-8 md:gap-5 lg:gap-20 md:mb-0 md:flex">
            <li v-for="projects in ProjectsListeSorted" :key="projects.id">
                <RouterLink :to="{ name: 'projects-id', params: { id: projects.id } }" class="flex flex-col h-full">
                    <CardProject :key="projects.id" v-bind="{ ...projects }" />
                </RouterLink>
                <Circle class="mx-auto mb-10 md:hidden" />
            </li>
        </ul>
    </main>
</template>