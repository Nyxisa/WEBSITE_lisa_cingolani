<script setup lang="ts">
import { useHead } from '@unhead/vue'
useHead({
    title: 'À Propos | Lisa Cingolani'
})

import AboutAnim from '@/components/AboutAnim.vue'
</script>


<template>
    <AboutAnim />
    <article class="margins">
        <h1 class="w-full mb-8 bg-black border-none lg:hidden btn-style">ABOUT</h1>
        <div class="">
            <div class="flex items-end gap-4 mb-6 lg:justify-between">
                <div>
                    <p class="mb-1 text-lg lg:text-4xl lg:my-1 var-font">Hello, I'm Lisa</p>
                    <p class="mb-0 text-base lg:text-2xl max-w-[30ch]">A French graphic and web design student passionate
                        about creativity and
                        technology.</p>
                </div>
                <img src="/profile_pic.webp" class="w-40 h-40 lg:w-[25%] lg:h-auto" alt="">
            </div>
            <p class="lg:pt-4 lg:text-lg max-w-[50ch]"> As a constant learner, I'm drawn to the ever-evolving digital world.
                Pursuing a degree in Multimedia, I
                bring
                creativity and attention to detail to every project, making me a perfect fit for your brand needs.</p>
        </div>
        <div class="container">
            <div class="title1">Personality</div>
            <div class="list1">
                <ul class="">
                    <div class="flex justify-center gap-10">
                        <li>truc</li>
                        <li>random</li>
                        <li>lebidou</li>
                    </div>
                    <div class="flex justify-center gap-10">
                        <li>grostest</li>
                        <li>poulet</li>
                        <li>frites</li>
                    </div>
                </ul>
            </div>
            <div class="title2">Values</div>
            <div class="list2"></div>
            <div class="title3">Personality</div>
            <div class="li3"></div>
            <div class="title4">PersValuesonality</div>
            <div class="li4"></div>
    </div>
</article></template>


