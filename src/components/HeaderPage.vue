<script setup lang="ts">
import { RouterLink } from 'vue-router'
import LogoGradient from './icons/logo-gradient.vue';

</script>
<template>
    <header
            class="z-10 w-[300px] h-[100vh] rounded-bl-3xl fixed top-0 right-0 shadow-nav overflow-hidden px-[50px] py-[30px] flex flex-col gap-6 items-center rounded-tl-3xl bg-lightblack">
            <div class="w-[200px] h-[200px]">
                <RouterLink to="/">
                    <LogoGradient class="w-full" />
                </RouterLink>
            </div>
            <nav class="navbar">
                <ul class="grid justify-end">
                    <li class="menu-item">
                        <RouterLink class="menu-link" to="/">HOME</RouterLink><img src="./icons/nav/home.svg" alt="home">
                    </li>
                    <li class="menu-item">
                        <RouterLink class="menu-link" to="/projects">PROJECTS</RouterLink><img
                            src="./icons/nav/projects.svg" alt="projects">
                    </li>
                    <li class="menu-item">
                        <RouterLink class="menu-link" to="/about">ABOUT</RouterLink><img src="./icons/nav/about.svg"
                            alt="about">
                    </li>
                    <li class="menu-item">
                        <RouterLink class="menu-link" to="/contact">CONTACT</RouterLink><img src="./icons/nav/contact.svg"
                            alt="contact">
                    </li>
                </ul>
            </nav>
            <label class="relative z-10 inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer">
                <div
                    class="w-20 h-8 bg-grey rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-1 after:left-1 after:w-9 after:h-6 after:rounded-full after:bg-white after:transition-all">
                </div>
                <span class="absolute z-20 text-lg text-white font-itc top-1 left-3">FR&nbsp;&nbsp;EN</span>
            </label>
            <div class="blur-2xl">
                <div class="wave1"></div>
                <div class="wave2"></div>
                <div class="wave3"></div>
            </div>
    </header>
</template>