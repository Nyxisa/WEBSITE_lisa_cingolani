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
    <div class="relative hidden gap-4 div-graphic animate-scrolling lg:flex">
        <h1 class="font-bold w-fit text-giant no-stroke ">HELLO</h1>
        <h1 class="font-normal text-giant w-fit no-stroke ">HELLO</h1>
        <h1 class="font-normal stroke-2 text-giant w-fit ">HELLO</h1>
        <h1 class="font-bold w-fit text-giant no-stroke ">HELLO</h1>
        <h1 class="font-normal text-giant w-fit no-stroke ">HELLO</h1>
        <h1 class="font-normal stroke-2 text-giant w-fit ">HELLO</h1>
    </div>
    <div class="hidden lg:block relative mt-[300px] -z-10">
        <div
            class="w-full h-[100vh] background-hero absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 filter blur-xl">
        </div>
    </div>
    <!-- Mobile -->
    <section class="mx-[3vh] flex flex-col gap-4">
        <div class="w-full h-20 rounded-default bg-purple"></div>
        <div class="flex gap-4">
            <div class="flex flex-col gap-4">
                <div class="w-full h-full rounded-default bg-orange">
                    <h1 class="p-12">HI!</h1>
                </div>
                <div class="w-full h-full bg-lightorange rounded-default">
                    <p>NUMBER OF PROJECTS</p>
                    <h2 class="p-12">8</h2>
                </div>
            </div>
            <div class="w-full h-80 rounded-default bg-lightpurple"></div>
        </div>

        <div class="w-full h-fit rounded-default bg-lightwhite text-lightblack">
            <h6 class="px-8 py-2 border-2 rounded-full w-fit border-lightblack">QUICK INTRO</h6>
            <p class="text-lightblack">I'm Lisa Cingolani, a web design student at the University of Montbéliard. 
                My interest in visual identity and
                branding allows me to bring a unique and cohesive touch to my projects.</p>
    </div>
</section></template>