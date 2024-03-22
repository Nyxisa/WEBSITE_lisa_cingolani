<script setup lang="ts">
import Loading from "./Loading.vue"
</script>

<template>
    <div class="fixed z-50 flex flex-col items-center justify-center w-full h-full bg-lightblack">
        <Loading/>
        <span class="pt-10 font-thin font-itc animate-pulse">{{ $t('home.load') }}</span>
    </div>
</template>