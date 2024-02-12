<script setup lang="ts">
import { pb } from '@/backend'
import { allProjectsSortedFR } from '@/backend';
import ProjectCard from '@/components/ProjectCard.vue';
const ProjectsListeSorted = await allProjectsSortedFR();
console.log(ProjectsListeSorted)
</script>
<template>
    <ul class="flex-wrap justify-around -mb-16 md:gap-5 lg:gap-20 md:mb-0 md:flex">
        <li v-for="projects_fr in ProjectsListeSorted.slice(0, 3)" :key="projects_fr.id">
            <RouterLink :to="{ name: 'projects_fr-id', params: { id: projects_fr.id } }" class="flex flex-col h-full">
                <ProjectCard :key="projects_fr.id" v-bind="{ ...projects_fr }" />
            </RouterLink>
        </li>
    </ul>
</template>