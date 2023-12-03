<script setup lang="ts">
import CardProject from '@/components/CardProject.vue';
import { allProjects } from '@/backend';
import { useHead } from '@unhead/vue'
useHead({
    title: 'Projets | Lisa Cingolani'
})
const ProjectsListe = await allProjects();
console.log(ProjectsListe)
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
        <ul>
            <li v-for="projects in ProjectsListe" :key="projects.id">
                <RouterLink :to="{ name: 'projects-id', params: { id: projects.id } }"
                    class="">
                    <CardProject :key="projects.id" v-bind="{ ...projects }" />
                </RouterLink>
            </li>
        </ul>
    </main>
</template>