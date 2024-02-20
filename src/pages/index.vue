<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Hero from '@/components/Hero.vue'
import Circle from '@/components/icons/circle.vue'
import { useHead } from '@unhead/vue'
useHead({
  title: 'Portfolio | Lisa Cingolani'
})

import ProjectCard from '@/components/ProjectCard.vue'
import ProjectCardEn from '@/components/ProjectCard_en.vue'

import { allProjectsSorted } from '@/backend'
const ProjectsListeSorted = await allProjectsSorted()
console.log(ProjectsListeSorted)

import { allProjectsSortedEn } from '@/backend'
const ProjectsListeSortedEn = await allProjectsSortedEn()
console.log(ProjectsListeSortedEn)

const screenSize = ref('');
onMounted(() => {
  // Initial screen size
  updateScreenSize();
  // Update screen size on resize
  window.addEventListener('resize', updateScreenSize);
});

function updateScreenSize() {
  screenSize.value = getScreenSize();
}
function getScreenSize() {
  if (window.matchMedia('(min-width: 1280px)').matches) {
    return 'xl';
  } else {
    return 'other';
  }
}
function getProjectsListe() {
  return screenSize.value === 'xl' ? ProjectsListeSorted.slice(0, 3) : ProjectsListeSorted.slice(0, 2);
}
</script>

<template>
  <Hero />
  <section class="margins">
    <div class="flex items-center w-full gap-4 mt-12 mb-8">
      <h3 class="text-xl font-light whitespace-nowrap">{{ $t('home.lastprojects') }}</h3>
      <div class="w-0 h-[1px] anim-slide-in rounded-full mb-1 bg-lightwhite"></div>
    </div>

    <div v-if="$i18n.locale === 'fr'">
      <ul class="flex-wrap justify-center -mb-8 md:justify-around md:gap-5 xl:gap-8 md:mb-0 md:flex">
        <li v-for="projects_fr in ProjectsListeSorted.slice(0, 3)" :key="projects_fr.id" class="2xl:w-[30%]">
          <RouterLink :to="{ name: 'projects-id', params: { id: projects_fr.id } }" class="flex flex-col h-full">
            <ProjectCard :key="projects_fr.id" v-bind="{ ...projects_fr }" />
          </RouterLink>
          <Circle class="mx-auto mb-10 md:hidden" />
        </li>
      </ul>
    </div>

    <div v-else-if="$i18n.locale === 'en'">
      <ul class="flex-wrap justify-center -mb-8 md:justify-around md:gap-5 xl:gap-8 md:mb-0 md:flex">
        <li v-for="project in getProjectsListe()" :key="project.id" class="xl:w-[30%]">
          <RouterLink :to="{ name: 'projects-id', params: { id: project.id } }" class="flex flex-col h-full">
            <ProjectCardEn :key="project.id" v-bind="{ ...project }" />
          </RouterLink>
          <Circle class="mx-auto mb-10 md:hidden" />
        </li>
      </ul>
    </div>

  </section>
</template>
