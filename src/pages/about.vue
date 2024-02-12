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
                À Propos
            </h1>
            <div class="w-0 h-[1px] anim-slide-in rounded-full mb-1 bg-lightwhite"></div>
        </div>
        <div>
            <div class="flex flex-col mb-4 md:justify-between">
                <h2
                    class="min-w-full pb-3 mb-4 text-lg md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl md:my-1 var-font about-text ">
                    Bonjour !</h2>
                <div class="flex max-w-full gap-4 md:gap-10 md:items-center">

                    <div class="flex-grow w-3/4 md:w-2/3 md:grow-0">

                        <p class="mb-0 text-base md:text-2xl lg:text-3xl 2xl:text-4xl about-text md:max-w-[25ch]">Je suis
                            Lisa Cingolani, étudiante en design
                            graphique passionnée par l'innovation créative.</p>
                    </div>
                    <div class="w-1/4 pb-2 bg-center bg-cover md:aspect-square md:rounded-full rounded-simple"
                        style="background-image: url(/profile_pic.webp)">
                        <!-- <img src="/profile_pic.webp"
                        class="min-w-[75px] w-full md:block lg:w-[200px] hidden max-w-[100px] md:max-w-[200px] h-auto"
                        alt="Photo"> -->
                    </div>
                </div>

            </div>

            <div class="flex flex-col [&>*]:mb-4 [&>*:nth-child(odd)]:self-end md:[&>*:nth-child(odd)]:self-auto">
                <p class="about-text">
                    Dans une quête d'apprentissage constant, je suis naturellement attirée par le monde numérique en
                    perpétuelle
                    évolution.</p>
                <p class="about-text">
                    Je poursuis actuellement des études dans le domaine du multimédia, en me spécialisant dans la conception
                    de
                    sites web et d'identités visuelles.</p>
                <p class="about-text">
                    Animée par des qualités telles que l'organisation, la créativité et la fiabilité, je suis la personne
                    idéale
                    pour répondre aux besoins de votre marque.</p>
                <p class="about-text">
                    Mon objectif est de collaborer avec des personnes et des entreprises afin d'améliorer la présence de
                    leur
                    marque par le biais d'un design mémorable et percutant.</p>
            </div>
        </div>

        <section class="grid grid-cols-2 gap-4 md:gap-8 md:mt-10 grid-rows-8 xl:grid-cols-4">

            <div class="row-span-3 p-4 md:row-span-4 bg-lightblack rounded-simple">
                <h3 class="w-auto pb-2 font-thin text-transparent div-graphic">Compé&shy;tences</h3>
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
                <h3 class="w-auto pb-2 font-thin text-transparent div-graphic">Person&shy;nalité</h3>
                <ul class="grid gap-2 pt-2 md:grid-cols-2 lg:grid-cols-1">
                    <li>
                        <p>Organized</p>
                    </li>
                    <li>
                        <p>Creative</p>
                    </li>
                    <li>
                        <p>Reliable</p>
                    </li>
                    <li>
                        <p>Passionate</p>
                    </li>
                    <li>
                        <p>Detail-oriented</p>
                    </li>
                    <li>
                        <p>Curious</p>
                    </li>
                </ul>
            </div>

            <div class="row-span-2 p-4 bg-lightblack rounded-simple">
                <h3 class="pb-2 font-thin text-transparent div-graphic">Hobbies</h3>
                <ul class="grid gap-2 pt-1 md:grid-cols-2 lg:grid-cols-1">
                    <li class="about-skills">
                        <img src="/svg/hobby_art.svg" class="h-[1.25em]" alt="Art">
                        <p class="pt-1 mb-0">Art</p>
                    </li>
                    <li class="about-skills">
                        <img src="/svg/hobby_sport.svg" class="h-[1.25em]" alt="Sport">
                        <p class="pt-1 mb-0">Sport</p>
                    </li>
                    <li class="about-skills">
                        <img src="/svg/hobby_travel.svg" class="h-[1.25em]" alt="Travel">
                        <p class="pt-1 mb-0">Travel</p>
                    </li>
                    <li class="about-skills">
                        <img src="/svg/hobby_cinema.svg" class="h-[1.25em]" alt="Cinema">
                        <p class="pt-1 mb-0">Cinema</p>
                    </li>
                </ul>
            </div>

            <div class="row-span-4 p-4 bg-lightblack rounded-simple">
                <h3 class="pb-2 font-thin text-transparent div-graphic">Valeurs</h3>
                <ul class="grid gap-2 pt-2 md:grid-cols-2 lg:grid-cols-1">
                    <li>
                        <p>Qualité</p>
                </li>
                <li>
                    <p>Exploration</p>
                </li>
                <li>
                    <p>Intégrité</p>
                </li>
                <li>
                    <p>Empathie</p>
                </li>
            </ul>
        </div>

    </section>
</article></template>


