<script setup lang="ts">
import { pb } from '@/backend'
import { ProjectId } from '@/backend';
import { allProjectsSorted } from '@/backend';
import TheProjectAnim from '@/components/TheProjectAnim.vue';
import { useHead } from '@unhead/vue'
import ProjectContent from '@/components/ProjectContent.vue';
import AllCard from '@/components/AllCard.vue';
const props = defineProps<{
    id: string,
    card_image: string,
}>();

const ProjectsListeSorted = await allProjectsSorted();
const ProjectInfo = await ProjectId(props.id);

useHead({
    title: `${ProjectInfo.title} | Lisa Cingolani`
})

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
</script>

<template>
    <TheProjectAnim />
    <article class="margins mt-[25px]">
        <ProjectContent :key="ProjectInfo.id" v-bind="{ ...ProjectInfo, image: ProjectInfo.card_image }" />
    </article>
    <section class="margins">
        <div class="flex items-center w-full gap-4 mt-12 mb-8">
            <h3 class="text-xl font-light">See more projects</h3>
            <div class="flex-1 border-b border-lightwhite"></div>
        </div>
        <AllCard @click="scrollToTop" />
    </section>
</template>