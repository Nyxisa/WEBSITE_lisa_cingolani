<script setup lang="ts">
import { ProjectId, allProjectsSorted } from '@/backend';
import CardProject from '@/components/CardProject.vue';
import ProjectsAnim from '@/components/ProjectsAnim.vue';
import Circle from '@/components/icons/circle.vue';

const props = defineProps<{
    id: string,
}>();

const ProjectsListeSorted = await allProjectsSorted();
console.log(ProjectsListeSorted)
</script>

<template>
    <ProjectsAnim/>
    <section class="margins lg:mt-[25px]">
        <div class="text-center lg:hidden">
            <h1 class="w-full mx-auto mb-8 bg-black border-none btn-style">PROJECTS</h1>
        </div>
        <ul class="flex-wrap justify-around -mb-16 md:gap-5 lg:gap-20 md:mb-0 md:flex">
            <li v-for="projects in ProjectsListeSorted" :key="projects.id">
                <RouterLink :to="{ name: 'projects-id', params: { id: projects.id } }" class="flex flex-col h-full">
                    <CardProject :key="projects.id" v-bind="{ ...projects }" />
                </RouterLink>
                <Circle class="mx-auto mb-10 md:hidden" />
            </li>
        </ul>
    </section>
</template>