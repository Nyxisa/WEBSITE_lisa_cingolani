<script setup lang="ts">
import IntroMobile from './IntroMobile.vue'
import IntroDesktop from './IntroDesktop.vue'
import SkillsPills from './SkillsPills.vue';
</script>

<template>
    <!-- <div class="relative hidden gap-10 -mb-10 div-graphic animate-scrolling lg:flex">
        <h1 class="font-bold whitespace-nowrap w-fit text-giant no-stroke ">LISA CINGOLANI</h1>
        <h1 class="font-normal whitespace-nowrap text-giant w-fit no-stroke ">LISA CINGOLANI</h1>
        <h1 class="font-normal stroke-2 whitespace-nowrap text-giant w-fit ">LISA CINGOLANI</h1>
        <h1 class="font-bold whitespace-nowrap w-fit text-giant no-stroke ">LISA CINGOLANI</h1>
        <h1 class="font-normal whitespace-nowrap text-giant w-fit no-stroke ">LISA CINGOLANI</h1>
        <h1 class="font-normal stroke-2 whitespace-nowrap text-giant w-fit ">LISA CINGOLANI</h1>
    </div> -->

    <div class="margins">
        <div class="flex">
            <h1 class="w-full">
                <strong class="text-transparent div-graphic font_thin var-font">Lisa Cingolani</strong>
            </h1>
            <h1 class="text-transparent font_thin">
                <strong class="opacity-40 mirror div-graphic md:opacity-20">Designer</strong>
            </h1>
        </div>
        <!-- <section class="herogrid">
            <div class="rounded-3xl div1 bg-[url('/bg_home1.webp')] bg-cover"> </div>
            <div class="rounded-3xl div2 bg-[url('/bg_home2.webp')] bg-cover"> </div>
            <div class="rounded-3xl div3 bg-[url('/bg_home3.webp')] bg-cover flex items-center justify-center">
                <h2 class="pt-3 mb-0 text-5xl">HI!</h2>
            </div> 
        </section>-->

        <!-- Working section !! -->

        <IntroMobile class="md:hidden" />
        <IntroDesktop class="hidden md:flex" />
        <!-- <video width="600" height="100%" autoplay loop muted playsinline>
            <source src="/my_arrow.mov" type='video/mp4; codecs="hvc1"'>
            <source src="/my_arrow.webm" type="video/webm">
        </video> -->
        <SkillsPills class="mt-10" />
        <!-- Working section !! -->

    </div>
</template>