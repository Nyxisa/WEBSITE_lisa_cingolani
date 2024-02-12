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
            <ul
                class="justify-center -mb-8 lg:flex-wrap xl:flex-nowrap xl:justify-around md:gap-5 lg:gap-8 md:mb-0 md:flex">
                <li v-for="projects_en in ProjectsListeSorted.slice(0, 3)" :key="projects_en.id">
                    <RouterLink :to="{ name: 'projects_en-id', params: { id: projects_en.id } }"
                        class="flex flex-col h-full">
                        <CardProject :key="projects_en.id" v-bind="{ ...projects_en }" />
                    </RouterLink>
                    <Circle class="mx-auto mb-10 md:hidden" />
                </li>
            </ul>
        </section>
    </div>
</template>