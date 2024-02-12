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
    <ProjectsAnim />
    <section class="margins lg:mt-[25px]">
        <div class="flex items-center w-full gap-4 mb-8">
            <h1 class="text-transparent lg:hidden div-graphic font_thin">
                Projets
            </h1>
            <div class="w-0 h-[1px] anim-slide-in rounded-full mb-1 bg-lightwhite"></div>
        </div>
        <ul class="flex-wrap justify-around -mb-16 md:mb-0 md:flex">
            <li v-for="projects_en in ProjectsListeSorted" :key="projects_en.id" class="xl:w-[30%]">
                <RouterLink :to="{ name: 'projects_en-id', params: { id: projects_en.id } }" class="flex flex-col h-full">
                    <CardProject :key="projects_en.id" v-bind="{ ...projects_en }" />
                </RouterLink>
                <Circle class="mx-auto mb-10 md:hidden" />
            </li>
        </ul>
    </section>
</template>