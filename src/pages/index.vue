<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Hero from '@/components/Hero.vue'
import Circle from '@/components/icons/circle.vue'
import { useHead } from '@unhead/vue'
useHead({
  title: 'Portfolio | Lisa Cingolani',
  meta: [
    {
      name: 'description',
      content: 'Portfolio de Lisa Cingolani, étudiante en design graphique passionnée par l\'innovation créative.'
    }
  ]
})

import ProjectCard from '@/components/ProjectCard.vue'
import ProjectCardEn from '@/components/ProjectCard_en.vue'

import { allProjectsSorted } from '@/backend'
const ProjectsListeSorted = await allProjectsSorted()
console.log(ProjectsListeSorted)

import { allProjectsSortedEn } from '@/backend'
const ProjectsListeSortedEn = await allProjectsSortedEn()
console.log(ProjectsListeSortedEn)

// Managing screen size for projects display
const screenSize = ref('');
onMounted(() => {
  updateScreenSize();
  window.addEventListener('resize', updateScreenSize);
});
function updateScreenSize() {
  screenSize.value = getScreenSize();
}
function getScreenSize() {
  if (window.matchMedia('(min-width: 1536px)').matches) {
    return '3';
  } else {
    return 'other';
  }
}
function getProjectsListe() {
  return screenSize.value === '3' ? ProjectsListeSorted.slice(0, 3) : ProjectsListeSorted.slice(0, 2);
}

// Trigger animation on scroll
const targetElement = ref<HTMLElement | null>(null);
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        targetElement.value?.classList.add('anim-slide-in');
        observer.unobserve(entry.target);
      }
    });
  });
  if (targetElement.value) {
    observer.observe(targetElement.value);
  }
});
</script>

<template>
  <Hero />
  <section class="margins">
    <div class="flex items-center w-full gap-4 mt-20 mb-10">
      <h3 class="text-xl font-light whitespace-nowrap">{{ $t('home.lastprojects') }}</h3>
      <div ref="targetElement" class="w-0 h-[1px] rounded-full mb-1 bg-lightwhite"></div>
    </div>

    <div v-if="$i18n.locale === 'fr'">
      <ul class="flex-wrap justify-center -mb-8 md:justify-around md:gap-5 xl:gap-8 md:mb-0 md:flex">
        <li v-for="project in getProjectsListe()" :key="project.id" class="2xl:w-[30%]">
          <RouterLink :to="{ name: 'projects-id', params: { id: project.id } }" class="flex flex-col h-full">
            <ProjectCard :key="project.id" v-bind="{ ...project }" />
          </RouterLink>
          <Circle class="mx-auto mb-10 md:hidden" />
        </li>
      </ul>
    </div>

    <div v-else-if="$i18n.locale === 'en'">
      <ul class="flex-wrap justify-center -mb-8 md:justify-around md:gap-5 xl:gap-8 md:mb-0 md:flex">
        <li v-for="project in getProjectsListe()" :key="project.id" class="2xl:w-[30%]">
          <RouterLink :to="{ name: 'projects-id', params: { id: project.id } }" class="flex flex-col h-full">
            <ProjectCardEn :key="project.id" v-bind="{ ...project }" />
          </RouterLink>
          <Circle class="mx-auto mb-10 md:hidden" />
        </li>
      </ul>
    </div>

  </section>
</template>
