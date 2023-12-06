<script setup lang="ts">
import { pb } from '@/backend'
import { allProjectsSorted } from '@/backend';
import CardProject from '@/components/CardProject.vue';
const ProjectsListeSorted = await allProjectsSorted();
console.log(ProjectsListeSorted)
</script>
<template>
    <ul class="flex-wrap justify-around -mb-16 md:gap-5 lg:gap-20 md:mb-0 md:flex">
        <li v-for="projects in ProjectsListeSorted.slice(0, 3)" :key="projects.id">
            <RouterLink :to="{ name: 'projects-id', params: { id: projects.id } }" class="flex flex-col h-full">
                <CardProject :key="projects.id" v-bind="{ ...projects }" />
            </RouterLink>
        </li>
    </ul>
</template>