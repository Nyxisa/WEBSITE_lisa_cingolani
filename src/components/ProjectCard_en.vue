<script setup lang="ts">
import { pb } from '@/backend'
import { ProjectIdEn } from '@/backend'
import { ref, onMounted, onUnmounted } from 'vue'
const props = defineProps<{
  id: string,
  main_image: string,
}>()
const ProjectInfo = await ProjectIdEn(props.id)
const CategoryTab = ref(ProjectInfo.category)

const mainImg = ProjectInfo.main_image
const urlMainImg = mainImg && pb.getFileUrl(ProjectInfo, mainImg, { thumb: '100x200' })
</script>

<template>
  <div class="mx-auto flex flex-col h-full mb-10 text-lightblack rounded-default shadow-1 max-w-[350px]">
    <img :src="urlMainImg" class="object-cover rounded-b-none rounded-default h-[250px] lg:h-[300px]" alt="Project Thumbnail" />
    <div class="flex flex-col justify-between h-full px-8 py-5 rounded-t-none rounded-default bg-lightwhite">
      <div class="flex items-center w-full gap-4">
        <h6 class="mb-0">{{ CategoryTab.slice(0, 1).join(' | ') }}</h6>
        <div class="flex-1 border-b border-black"></div>
      </div>
      <div class="flex flex-col justify-between h-full">
        <div class="h-full">
          <h5 class="mt-4 mb-2">{{ ProjectInfo.title }}</h5>
          <p class="max-w-[70ch] mb-4 font_normal h-full">{{ ProjectInfo.description }}</p>
        </div>
        <RouterLink :to="{ name: 'projects-id', force: true, params: { id } }"
          class="w-full text-lg focus:tracking-wider transition-all hover:scale-[1.03] hover:text-orange hover:border-lightorange hover:border-2 hover:bg-lightwhite text-lightwhite bg-orange btn-style">
          Read more
        </RouterLink>
      </div>
    </div>
  </div>
</template>
