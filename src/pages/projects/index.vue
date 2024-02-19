<script setup lang="ts">
import { allProjectsSorted, allProjectsSortedEn } from '@/backend'
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import ProjectCard from '@/components/ProjectCard.vue'
import ProjectCardEn from '@/components/ProjectCard_en.vue'
import ProjectsAnim from '@/components/ProjectsAnim.vue'
import Circle from '@/components/icons/circle.vue'

import { useHead } from '@unhead/vue'

useHead({
  title: 'Projets | Lisa Cingolani'
})

const props = defineProps<{
  id: string
}>()

const ProjectsListeSorted = await allProjectsSorted()
console.log(ProjectsListeSorted)
const ProjectsListeSortedEn = await allProjectsSortedEn()
console.log(ProjectsListeSortedEn)
</script>

<template>
  <ProjectsAnim />
  <section class="margins lg:mt-[25px]">
    <div class="flex items-center w-full gap-4 mb-8">
      <h1 class="text-transparent lg:hidden div-graphic font_thin">Projets</h1>
      <div class="w-0 h-[1px] anim-slide-in rounded-full mb-1 bg-lightwhite"></div>
    </div>

    <div v-if="$i18n.locale === 'fr'">
      <ul class="flex-wrap justify-center -mb-16 md:gap-5 xl:gap-8 md:justify-around md:mb-0 md:flex">
        <li v-for="projects_fr in ProjectsListeSorted" :key="projects_fr.id" class="2xl:w-[30%]">
          <RouterLink :to="{ name: 'projects-id', params: { id: projects_fr.id } }" class="flex flex-col h-full">
            <ProjectCard :key="projects_fr.id" v-bind="{ ...projects_fr }" />
          </RouterLink>
          <Circle class="mx-auto mb-10 md:hidden" />
        </li>
      </ul>
    </div>

    <div v-else-if="$i18n.locale === 'en'">
      <ul class="flex-wrap justify-center -mb-16 md:gap-5 xl:gap-8 md:justify-around md:mb-0 md:flex">
        <li v-for="projects_en in ProjectsListeSortedEn" :key="projects_en.id" class="2xl:w-[30%]">
          <RouterLink :to="{ name: 'projects-id', params: { id: projects_en.id } }" class="flex flex-col h-full">
            <ProjectCardEn :key="projects_en.id" v-bind="{ ...projects_en }" />
          </RouterLink>
          <Circle class="mx-auto mb-10 md:hidden" />
        </li>
      </ul>
    </div>
  </section>
</template>
