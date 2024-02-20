<script setup lang="ts">
import { pb } from '@/backend'
import { ref, onMounted, onUnmounted } from 'vue';
import { ProjectId, allProjectsSorted, ProjectIdEn, allProjectsSortedEn } from '@/backend'
import { useHead } from '@unhead/vue'
import ProjectContent from '@/components/ProjectContent.vue';
import ProjectContentEn from '@/components/ProjectContent_en.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import ProjectCardEn from '@/components/ProjectCard_en.vue';

const ProjectsListeSorted = await allProjectsSorted();
console.log(ProjectsListeSorted)
const ProjectsListeSortedEn = await allProjectsSortedEn();
console.log(ProjectsListeSortedEn)

const props = defineProps<{
    id: string,
    main_image: string,
}>();

const ProjectInfo = await ProjectId(props.id);
const ProjectInfoEn = await ProjectIdEn(props.id);

useHead({
    title: `${ProjectInfo.title} | Lisa Cingolani`
})

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
    <article class="margins mt-[25px]">

        <div v-if="$i18n.locale === 'fr'">
            <ProjectContent :key="ProjectInfo.id" v-bind="{ ...ProjectInfo, image: ProjectInfo.main_image }" />
        </div>

        <div v-else-if="$i18n.locale === 'en'">
            <ProjectContentEn :key="ProjectInfoEn.id" v-bind="{ ...ProjectInfoEn, image: ProjectInfoEn.main_image }" />
        </div>

    </article>
    <section class="margins">
        <div class="flex items-center w-full gap-4 mt-12 mb-8">
            <h3 class="text-xl font-light whitespace-nowrap">{{ $t('projects.seemore') }}</h3>
            <div ref="targetElement" class="w-0 h-[1px] rounded-full mb-1 bg-lightwhite"></div>
        </div>

        <div v-if="$i18n.locale === 'fr'">
            <ul class="flex-wrap justify-center -mb-16 md:gap-5 md:justify-around xl:gap-8 md:mb-0 md:flex">
                <li v-for="project in getProjectsListe()" :key="project.id" class="2xl:w-[30%]">
                    <RouterLink :to="{ name: 'projects-id', params: { id: project.id } }" class="flex flex-col h-full">
                        <ProjectCard :key="project.id" v-bind="{ ...project }" />
                    </RouterLink>
                </li>
            </ul>
        </div>

        <div v-else-if="$i18n.locale === 'en'">
            <ul class="flex-wrap justify-center -mb-16 md:gap-5 md:justify-around xl:gap-8 md:mb-0 md:flex">
                <li v-for="project in getProjectsListe()" :key="project.id" class="2xl:w-[30%]">
                    <RouterLink :to="{ name: 'projects-id', params: { id: project.id } }" class="flex flex-col h-full">
                        <ProjectCardEn :key="project.id" v-bind="{ ...project }" />
                    </RouterLink>
                </li>
            </ul>
        </div>

    </section>
</template>