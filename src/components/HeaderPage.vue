<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Logo from './icons/logo.vue';

</script>
<template>
    <header
        class="z-10 w-[300px] h-[100vh] rounded-bl-3xl fixed top-0 right-0 shadow-nav overflow-hidden px-[50px] py-[30px] flex flex-col gap-6 items-center rounded-tl-3xl bg-lightblack">
        <div class="w-[200px] h-[200px]">
            <RouterLink to="/">
                <Logo class="w-full" />
            </RouterLink>
        </div>
        <nav class="z-10 navbar">
            <ul class="grid justify-end">
                <li class="menu-item">
                    <RouterLink class="menu-link" to="/">Accueil</RouterLink><img src="./icons/nav/home.svg" alt="home">
                </li>
                <li class="menu-item">
                    <RouterLink class="menu-link" to="/projects">Projets</RouterLink><img src="./icons/nav/projects.svg"
                        alt="projects">
                </li>
                <li class="menu-item">
                    <RouterLink class="menu-link" to="/about">À Propos</RouterLink><img src="./icons/nav/about.svg"
                        alt="about">
                </li>
                <li class="menu-item">
                    <RouterLink class="menu-link" to="/contact">Contact</RouterLink><img src="./icons/nav/contact.svg"
                        alt="contact">
                </li>
            </ul>
        </nav>
        <label class="relative z-10 inline-flex items-center cursor-pointer drop-shadow-lg">
            <input type="checkbox" value="" class="sr-only peer">
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