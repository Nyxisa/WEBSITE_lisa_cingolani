<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue';

let isHovered = ref(false);
</script>

<template>
    <header aria-label="Header" @mouseover="isHovered = true"
        class="logo_anim z-10 w-[300px] h-[100vh] rounded-bl-3xl fixed top-0 right-0 shadow-nav overflow-hidden px-[50px] py-[30px] flex flex-col gap-6 items-center rounded-tl-3xl bg-lightblack">
        <div class="w-[200px] h-[200px]">
            <RouterLink to="/" aria-label="Return to home">
                <img src="./icons/nav/logo.svg" class="w-full" :class="{ hidden: isHovered }" alt="Logo" />
                <img src="/Logo_Animation.gif" class="w-full" :class="{ hidden: !isHovered }" alt="Logo" />
            </RouterLink>
        </div>
        <nav class="z-10" aria-label="Navigation">
            <ul class="grid justify-center">
                <li class="menu-item">
                    <RouterLink class="menu-link" to="/">{{ $t('menu.link1') }}</RouterLink><img
                        src="./icons/nav/home.svg" alt="home">
                </li>
                <li class="menu-item">
                    <RouterLink class="menu-link" to="/projects">{{ $t('menu.link2') }}</RouterLink><img
                        src="./icons/nav/projects.svg" alt="projects">
                </li>
                <li class="menu-item">
                    <RouterLink class="menu-link" to="/about">{{ $t('menu.link3') }}</RouterLink><img
                        src="./icons/nav/about.svg" alt="about">
                </li>
                <li class="menu-item">
                    <RouterLink class="menu-link" to="/contact">{{ $t('menu.link4') }}</RouterLink><img
                        src="./icons/nav/contact.svg" alt="contact">
                </li>
            </ul>
        </nav>
        <label class="relative z-10 inline-flex items-center drop-shadow-lg">
            <input type="checkbox" value="" class="sr-only peer" aria-label="Language switcher"
                @click="$i18n.locale = $i18n.locale === 'fr' ? 'en' : 'fr'">
            <div
                class="w-20 h-8 bg-grey rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-1 after:left-1 after:w-9 after:h-6 after:rounded-full after:bg-white after:transition-all">
            </div>
            <span class="absolute z-20 text-lg text-white font-itc top-1 left-3">FR&nbsp;&nbsp;EN</span>
        </label>
        <div class="blur-2xl">
            <div class="wave1"></div>
            <div class="wave2"></div>
            <div class="wave3 drop-shadow-xl"></div>
        </div>
    </header>
</template>