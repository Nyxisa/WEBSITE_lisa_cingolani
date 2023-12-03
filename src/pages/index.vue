<script setup lang="ts">
import Hero from '@/components/Hero.vue';
import { useHead } from '@unhead/vue'
useHead({
    title: 'Portfolio | Lisa Cingolani'
})
</script>

<template>
<Hero/>
<h4>Latest Projects</h4>
<CardProject/>
</template>