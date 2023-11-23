<script setup lang="ts">
import { useHead } from '@unhead/vue'
useHead({
    title: 'Projets | Lisa Cingolani'
})

import CardProject from '@/components/cardproject.vue';

import { allProjects } from '@/backend'
const ProjectsListe = await allProjects();
console.log(ProjectsListe)
</script>

<template>
      <div class="relative flex gap-4 div-graphic animate-scrolling">
            <h1 class="font-bold w-fit text-giant no-stroke ">PROJECTS</h1>
            <h1 class="font-normal text-giant w-fit no-stroke ">PROJECTS</h1>
            <h1 class="font-normal stroke-2 text-giant w-fit ">PROJECTS</h1>
            <h1 class="font-bold w-fit text-giant no-stroke ">PROJECTS</h1>
            <h1 class="font-normal text-giant w-fit no-stroke ">PROJECTS</h1>
            <h1 class="font-normal stroke-2 text-giant w-fit ">PROJECTS</h1>
        </div>
    <main>
        <ul>
            <li v-for="projects in ProjectsList" :key="projects.id">
                <RouterLink :to="{ name: 'projects-id', params: { id: projects.id } }"
                    class="text-red-700 hover:text-red-400">
                    <CardProject :key="projects.id" v-bind="{ ...projects }" />
                </RouterLink>
            </li>
        </ul>
    </main>
</template>