<script setup lang="ts">
import { useHead } from '@unhead/vue'
useHead({
    title: 'À Propos | Lisa Cingolani'
})

import AboutAnim from '@/components/AboutAnim.vue'
</script>


<template>
    <AboutAnim />
    <article class="margins lg:mt-[25px]">
        <div class="flex items-center w-full gap-4 mb-8">
            <h1 class="text-transparent whitespace-nowrap lg:hidden div-graphic font_thin">
                {{ $t('about.title') }}
            </h1>
            <div class="w-0 h-[1px] anim-slide-in rounded-full mb-1 bg-lightwhite"></div>
        </div>
        <div>
            <div class="flex flex-col mb-4 md:justify-between">
                <h2
                    class="min-w-full pb-3 mb-4 text-lg md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl md:my-1 var-font about-text ">
                    {{ $t('about.hi') }}</h2>
                <div class="flex max-w-full gap-4 md:gap-10 md:items-center">

                    <div class="flex-grow w-3/4 md:w-2/3 md:grow-0">

                        <p class="mb-0 text-base md:text-2xl lg:text-3xl 2xl:text-4xl about-text md:max-w-[25ch]">{{
                            $t('about.p1') }}</p>
                    </div>
                    <div class="w-1/4 pb-2 bg-center bg-cover md:aspect-square md:rounded-full rounded-simple"
                        style="background-image: url(/profile_pic.webp)" alt="Photo">

                    </div>
                </div>

            </div>

            <div class="flex flex-col [&>*]:mb-4 [&>*:nth-child(odd)]:self-end md:[&>*:nth-child(odd)]:self-auto">
                <p class="about-text">{{ $t('about.p2') }}</p>
                <p class="about-text">{{ $t('about.p3') }}</p>
                <p class="about-text">{{ $t('about.p4') }}</p>
                <p class="about-text">{{ $t('about.p5') }}</p>
            </div>
        </div>

        <section class="grid grid-cols-2 gap-4 md:gap-8 md:mt-10 grid-rows-8 xl:grid-cols-4">

            <div class="row-span-3 p-4 md:row-span-4 bg-lightblack rounded-simple">
                <h3 class="w-auto pb-2 font-thin text-transparent div-graphic" v-html="$t('about.h3-1')"></h3>
                <ul class="grid gap-2 md:grid-cols-2 lg:grid-cols-1">
                    <li class="about-skills">
                        <img src="/svg/figma.svg" class="h-[1.25em]" alt="Figma">
                        <p class="pt-1 mb-0">Figma</p>
                    </li>
                    <li class="about-skills">
                        <img src="/svg/adobe_ai.svg" class="h-[1.25em]" alt="Illustrator">
                        <p class="pt-1 mb-0">Illustrator</p>
                    </li>
                    <li class="about-skills">
                        <img src="/svg/adobe_ps.svg" class="h-[1.25em]" alt="Photoshop">
                        <p class="pt-1 mb-0">Photoshop</p>
                    </li>
                    <li class="about-skills">
                        <img src="/svg/adobe_id.svg" class="h-[1.25em]" alt="InDesign">
                        <p class="pt-1 mb-0">InDesign</p>
                    </li>
                    <li class="about-skills">
                        <img src="/svg/adobe_ae.svg" class="h-[1.25em]" alt="AfterEffects">
                        <p class="pt-1 mb-0">AfterEffects</p>
                    </li>
                    <li class="about-skills">
                        <img src="/svg/html_5.svg" class="h-[1.25em]" alt="HTML 5">
                        <p class="pt-1 mb-0">HTML 5</p>
                    </li>
                    <li class="about-skills">
                        <img src="/svg/css_3.svg" class="h-[1.25em]" alt="CSS 3">
                        <p class="pt-1 mb-0">CSS 3</p>
                    </li>
                    <li class="about-skills">
                        <img src="/svg/vuejs.svg" class="h-[1.25em]" alt="Vue.js">
                        <p class="pt-1 mb-0">Vue.js</p>
                    </li>
                    <li class="about-skills">
                        <img src="/svg/tailwind.svg" class="h-[1.25em]" alt="CSS 3">
                        <p class="pt-1 mb-0">Tailwind</p>
                    </li>
                </ul>
            </div>

            <div class="row-span-2 p-4 md:row-span-4 bg-lightblack rounded-simple">
                <h3 class="w-auto pb-2 font-thin text-transparent div-graphic" v-html="$t('about.h3-2')"></h3>
                <ul class="grid gap-2 pt-2 md:grid-cols-2 lg:grid-cols-1">
                    <li>
                        <p>{{ $t('about.1li-1') }}</p>
                    </li>
                    <li>
                        <p>{{ $t('about.1li-2') }}</p>
                    </li>
                    <li>
                        <p>{{ $t('about.1li-3') }}</p>
                    </li>
                    <li>
                        <p>{{ $t('about.1li-4') }}</p>
                    </li>
                    <li>
                        <p>{{ $t('about.1li-5') }}</p>
                    </li>
                    <li>
                        <p>{{ $t('about.1li-6') }}</p>
                    </li>
                </ul>
            </div>

            <div class="row-span-2 p-4 bg-lightblack rounded-simple">
                <h3 class="pb-2 font-thin text-transparent div-graphic">{{ $t('about.h3-3') }}</h3>
                <ul class="grid gap-2 pt-1 md:grid-cols-2 lg:grid-cols-1">
                    <li class="about-skills">
                        <img src="/svg/hobby_art.svg" class="h-[1.25em]" alt="Art">
                        <p class="pt-1 mb-0">{{ $t('about.2li-1') }}</p>
                    </li>
                    <li class="about-skills">
                        <img src="/svg/hobby_sport.svg" class="h-[1.25em]" alt="Sport">
                        <p class="pt-1 mb-0">{{ $t('about.2li-2') }}</p>
                    </li>
                    <li class="about-skills">
                        <img src="/svg/hobby_travel.svg" class="h-[1.25em]" alt="Travel">
                        <p class="pt-1 mb-0">{{ $t('about.2li-3') }}</p>
                    </li>
                    <li class="about-skills">
                        <img src="/svg/hobby_cinema.svg" class="h-[1.25em]" alt="Cinema">
                        <p class="pt-1 mb-0">{{ $t('about.2li-4') }}</p>
                    </li>
                </ul>
            </div>

            <div class="row-span-4 p-4 bg-lightblack rounded-simple">
                <h3 class="pb-2 font-thin text-transparent div-graphic">{{ $t('about.h3-4') }}</h3>
                <ul class="grid gap-2 pt-2 md:grid-cols-2 lg:grid-cols-1">
                    <li>
                        <p>{{ $t('about.3li-1') }}</p>
                    </li>
                    <li>
                        <p>{{ $t('about.3li-2') }}</p>
                    </li>
                    <li>
                        <p>{{ $t('about.3li-3') }}</p>
                    </li>
                    <li>
                        <p>{{ $t('about.3li-4') }}</p>
                    </li>
                </ul>
            </div>

        </section>
    </article>
</template>


