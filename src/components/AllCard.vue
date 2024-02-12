<script setup lang="ts">
import { pb } from '@/backend'
import { allProjectsSorted } from '@/backend';
import ProjectCard from '@/components/ProjectCard.vue';
const ProjectsListeSorted = await allProjectsSorted();
console.log(ProjectsListeSorted)
</script>
<template>
    <ul class="flex-wrap justify-around -mb-16 md:gap-5 lg:gap-20 md:mb-0 md:flex">
        <li v-for="projects_en in ProjectsListeSorted.slice(0, 3)" :key="projects_en.id">
            <RouterLink :to="{ name: 'projects_en-id', params: { id: projects_en.id } }" class="flex flex-col h-full">
                <ProjectCard :key="projects_en.id" v-bind="{ ...projects_en }" />
            </RouterLink>
        </li>
    </ul>
</template>