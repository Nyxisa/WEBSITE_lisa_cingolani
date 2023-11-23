<script setup lang="ts">
import { useHead } from '@unhead/vue'
useHead({
    title: 'Portfolio | Lisa Cingolani'
})
</script>

<template>
    <!-- <div class="flex"><h1 class="font-bold w-fit giant-graphic text-giant">HELLO</h1>
    <h1 class="font-normal giant-graphic text-giant w-fit">HELLO</h1>
    <h1 class="font-normal giant-graphic-stroke text-giant w-fit">HELLO</h1></div> -->
    <div class="relative flex gap-4 div-graphic animate-scrolling">
        <h1 class="font-bold w-fit text-giant no-stroke ">HELLO</h1>
        <h1 class="font-normal text-giant w-fit no-stroke ">HELLO</h1>
        <h1 class="font-normal stroke-2 text-giant w-fit ">HELLO</h1>
        <h1 class="font-bold w-fit text-giant no-stroke ">HELLO</h1>
        <h1 class="font-normal text-giant w-fit no-stroke ">HELLO</h1>
        <h1 class="font-normal stroke-2 text-giant w-fit ">HELLO</h1>
    </div>

        <div class="relative mt-[300px] -z-10">
            <div class="w-full h-[100vh] background-hero absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 filter blur-xl"></div>
        </div>

    <!-- <div class="flex gap-4">
        <div class="h-80 w-[600px] rounded-default bg-orange filter blur-2xl">HI !</div>
        <div class="h-80 w-[600px] rounded-default bg-purple filter blur-2xl"></div>
    </div> -->
</template>