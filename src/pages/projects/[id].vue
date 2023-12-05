<script setup lang="ts">
import { pb } from '@/backend'
import { ProjectId } from '@/backend';
import ProjectContent from '@/components/ProjectContent.vue';
import MobileProjectContent from '@/components/MobileProjectContent.vue';
import TheProjectAnim from '@/components/TheProjectAnim.vue';
import CardProject from '@/components/CardProject.vue';
import { useHead } from '@unhead/vue'
const props = defineProps<{
    id: string,
    image: string,
}>();

const ProjectInfo = await ProjectId(props.id);
const img0 = props.image
const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '100x200' })
import { allProjectsSorted } from '@/backend';

const ProjectsListeSorted = await allProjectsSorted();
console.log(ProjectsListeSorted)

useHead({
    title: `${ProjectInfo.title} | Lisa Cingolani`
})
</script>

<template>
    <TheProjectAnim />
    <article class="margins mt-[25px]">
            <MobileProjectContent :key="ProjectInfo.id" v-bind="{ ...ProjectInfo }" class="block lg:hidden"/>
            <ProjectContent :key="ProjectInfo.id" v-bind="{ ...ProjectInfo }" class="hidden lg:block" />
    </article>
    <section class="margins">
        <div class="flex items-center w-full gap-4 mt-12 mb-8">
            <h3 class="text-xl font-light">See more projects</h3>
            <div class="flex-1 border-b border-lightwhite"></div>
        </div>
        <ul class="flex-wrap justify-around -mb-16 md:gap-5 lg:gap-20 md:mb-0 md:flex">
            <li v-for="projects in ProjectsListeSorted.slice(0, 3)" :key="projects.id">
                <RouterLink :to="{ name: 'projects-id', params: { id: projects.id } }" class="flex flex-col h-full">
                    <CardProject :key="projects.id" v-bind="{ ...projects }" />
                </RouterLink>
            </li>
        </ul>
    </section>
</template>




