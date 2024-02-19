<script setup lang="ts">
import { pb } from '@/backend'
import { ProjectId } from '@/backend'
import { ref, onMounted, onUnmounted } from 'vue'
const props = defineProps<{
  id: string
}>()
const ProjectInfo = await ProjectId(props.id)
const CategoryTab = ref(ProjectInfo.category)

const img0 = ProjectInfo.card_image
const urlImg0 = img0 && pb.getFileUrl(ProjectInfo, img0, { thumb: '100x200' })
</script>

<template>
  <div
    class="mx-auto flex flex-col h-full mb-10 text-lightblack rounded-default shadow-1 max-w-[350px]"
  >
    <img
      :src="urlImg0"
      class="object-cover rounded-b-none rounded-default h-[200px] md:h-[250px] lg:h-[300px]"
    />
    <div
      class="flex flex-col justify-between h-full px-8 py-5 rounded-t-none rounded-default bg-lightwhite"
    >
      <div class="flex items-center w-full gap-4">
        <h6 class="mb-0">{{ CategoryTab.slice(0, 1).join(' | ') }}</h6>
        <div class="flex-1 border-b border-black"></div>
      </div>
      <div class="flex flex-col justify-between h-full">
        <div class="h-full">
          <h5 class="mt-4 mb-2">{{ ProjectInfo.title }}</h5>
          <p class="max-w-[70ch] mb-4 h-full">{{ ProjectInfo.description }}</p>
        </div>
        <RouterLink
          :to="{ name: 'projects-id', force: true, params: { id } }"
          class="w-full text-xl transition-all border-none focus:translate-y-1 focus:shadow-none hover:-translate-y-[1px] bg-orange text-lightwhite hover:shadow-nav btn-style"
        >
          Voir Le Projet
        </RouterLink>
      </div>
    </div>
  </div>
</template>
