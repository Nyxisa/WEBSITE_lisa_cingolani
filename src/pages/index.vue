<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Hero from '@/components/Hero.vue';
import Circle from '@/components/icons/circle.vue';
import { useHead } from '@unhead/vue'
useHead({
    title: 'Portfolio | Lisa Cingolani'
})

import ProjectCard from '@/components/ProjectCard.vue';
import { allProjectsSorted } from '@/backend';
const ProjectsListeSorted = await allProjectsSorted();
console.log(ProjectsListeSorted)
</script>

<template>
    <div class="mx-auto">
        <Hero />
        <section class="margins">
            <div class="flex items-center w-full gap-4 mt-12 mb-8">
                <h3 class="text-xl font-light whitespace-nowrap">Derniers Projets</h3>
                <div class="w-0 h-[1px] anim-slide-in rounded-full mb-1 bg-lightwhite"></div>
            </div>
            <ul
                class="justify-center -mb-8 lg:flex-wrap xl:flex-nowrap xl:justify-around md:gap-5 lg:gap-8 md:mb-0 md:flex">
                <li v-for="projects_fr in ProjectsListeSorted.slice(0, 3)" :key="projects_fr.id">
                    <RouterLink :to="{ name: 'projects_fr-id', params: { id: projects_fr.id } }"
                        class="flex flex-col h-full">
                        <ProjectCard :key="projects_fr.id" v-bind="{ ...projects_fr }" />
                    </RouterLink>
                    <Circle class="mx-auto mb-10 md:hidden" />
                </li>
            </ul>
        </section>
    </div>
</template>