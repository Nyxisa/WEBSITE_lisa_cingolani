<script setup lang="ts">
import { useHead } from '@unhead/vue'
useHead({
    title: 'À Propos | Lisa Cingolani'
})

import AboutAnim from '@/components/AboutAnim.vue'
</script>


<template>
<AboutAnim/>
    <article class="margins">
        <h1 class="w-full mb-8 bg-black border-none lg:hidden btn-style">ABOUT</h1>
        <div class="flex items-end gap-4 mb-6">
            <div>
                <p class="mb-1 text-lg var-font">Hello, I'm Lisa</p>
                <p class="mb-0 text-base">A French graphic and web design student passionate about creativity and technology.</p>
            </div>
            <img src="/profile_pic.png" class="w-40 h-40" alt="">
        </div>
        <p> As a constant learner, I'm drawn to the ever-evolving digital world. Pursuing a degree in Multimedia, I bring
            creativity and attention to detail to every project, making me a perfect fit for your brand needs.</p>
        <section class="about-list">
            <div>
                <h2>PERSONALITY</h2>
                <ul class="flex flex-wrap justify-center gap-4">
                    <li>Organized</li>
                    <li>Creative</li>
                    <li>Reliable</li>
                    <li>Passionate</li>
                    <li>Detail-oriented</li>
                    <li>Curious</li>
                </ul>
            </div>
            <div>
                <h2>VALUES</h2>
                <ul class="flex flex-wrap justify-center gap-4">
                    <li>Quality</li>
                    <li>Exploration</li>
                    <li>Integrity </li>
                    <li>Empathy</li>
                </ul>
            </div>
            <div>
                <h2>HOBBIES</h2>
                <ul class="flex flex-wrap gap-10 justify-evenly">
                    <div>
                        <li class="about-skills">
                            <img src="/svg/hobby_art.svg" class="h-[1.25em]" alt="Art">
                            <p class="pt-1 mb-0">Art</p>
                        </li>
                        <li class="about-skills">
                            <img src="/svg/hobby_sport.svg" class="h-[1.25em]" alt="Sport">
                            <p class="pt-1 mb-0">Sport</p>
                        </li>
                    </div>
                    <div>
                        <li class="about-skills">
                            <img src="/svg/hobby_travel.svg" class="h-[1.25em]" alt="Travel">
                            <p class="pt-1 mb-0">Travel</p>
                        </li>
                        <li class="about-skills">
                            <img src="/svg/hobby_cinema.svg" class="h-[1.25em]" alt="Cinema">
                            <p class="pt-1 mb-0">Cinema</p>
                        </li>
                    </div>
                </ul>
            </div>
            <div>
                <h2>SKILLS</h2>
                <ul class="flex flex-wrap gap-10 justify-evenly">
                    <div>
                        <li class="about-skills">
                            <img src="/svg/figma.svg" class="h-[1.25em]" alt="Figma">
                            <p class="pt-1 mb-0">Figma</p>
                        </li>
                        <li class="pb-2 about-skills">
                            <img src="/svg/vuejs.svg" class="h-[1.25em]" alt="Vue.js">
                            <p class="pt-1 mb-0">Vue.js</p>
                        </li>
                        <li class="about-skills">
                            <img src="/svg/html_5.svg" class="h-[1.25em]" alt="HTML 5">
                            <p class="pt-1 mb-0">HTML 5</p>
                        </li>
                        <li class="about-skills">
                            <img src="/svg/css_3.svg" class="h-[1.25em]" alt="CSS 3">
                            <p class="pt-1 mb-0">CSS 3</p>
                        </li>
                    </div>
                    <div>
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
                    </div>
                </ul>
            </div>
            <div>
            </div>
        </section>
    </article>
</template>


