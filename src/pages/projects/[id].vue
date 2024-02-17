<script setup lang="ts">
import { pb } from '@/backend'
import { ProjectId } from '@/backend';
import { useHead } from '@unhead/vue'
import ProjectContent from '@/components/ProjectContent.vue';
import AllCard from '@/components/AllCard.vue';
const props = defineProps<{
    id: string,
    card_image: string,
}>();

const ProjectInfo = await ProjectId(props.id);

useHead({
    title: `${ProjectInfo.title} | Lisa Cingolani`
})

</script>

<template>
    <article class="margins mt-[25px]">
        <ProjectContent :key="ProjectInfo.id" v-bind="{ ...ProjectInfo, image: ProjectInfo.card_image }" />
    </article>
    <section class="margins">
        <div class="flex items-center w-full gap-4 mt-12 mb-8">
            <h3 class="text-xl font-light whitespace-nowrap">Voir d'autres projets</h3>
            <div class="w-0 h-[1px] anim-slide-in rounded-full mb-1 bg-lightwhite"></div>
        </div>
        <AllCard />
    </section>
</template>