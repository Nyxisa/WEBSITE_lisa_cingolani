<script setup lang="ts">
import { pb } from '@/backend'
import { ProjectId } from '@/backend';
import TheProjectAnim from '@/components/TheProjectAnim.vue';
import { useHead } from '@unhead/vue'
const props = defineProps<{
    id: string,
    image: string,
}>();

const ProjectInfo = await ProjectId(props.id);
const img0 = props.image
const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '100x200' })

useHead({
    title: `${ProjectInfo.title} | Lisa Cingolani`
})
</script>

<template>
    <TheProjectAnim/>
    <h1>{{ ProjectInfo.title }}</h1>
    <img :src="urlImg0"/>
    <p>{{ ProjectInfo.description }}</p>
</template>




