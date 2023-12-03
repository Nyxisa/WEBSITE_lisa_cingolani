<script setup lang="ts">
import Hero from '@/components/Hero.vue';
import Circle from '@/components/icons/circle.vue';
import { useHead } from '@unhead/vue'
useHead({
    title: 'Portfolio | Lisa Cingolani'
})

import CardProject from '@/components/CardProject.vue';
import { allProjectsSorted } from '@/backend';
const ProjectsListeSorted = await allProjectsSorted();
console.log(ProjectsListeSorted)
</script>

<template>
    <div class="mx-auto">
        <Hero />
        <section class="margins">
            <div class="flex items-center w-full gap-4 mt-12 mb-8">
                <h3 class="text-xl font-light">Latest Projects</h3>
                <div class="flex-1 border-b border-lightwhite"></div>
            </div>
            <ul class="flex-wrap justify-around -mb-8 md:gap-5 lg:gap-20 md:mb-0 md:flex">
                <li v-for="projects in ProjectsListeSorted.slice(0, 3)" :key="projects.id">
                    <RouterLink :to="{ name: 'projects-id', params: { id: projects.id } }" class="flex flex-col h-full">
                        <CardProject :key="projects.id" v-bind="{ ...projects }" />
                    </RouterLink>
                    <Circle class="mx-auto mb-10 md:hidden" />
                </li>
            </ul>
        </section>
    </div>
</template>