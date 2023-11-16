<script setup lang="ts">
import { RouterLink } from 'vue-router'
import logoGradient from './icons/logo-gradient.vue';

</script>
<template>
    <header
        class="z-10 w-[300px] h-[100vh] pl-[2px] py-[2px] rounded-tl-3xl rounded-bl-3xl fixed top-0 right-0 bg-gradient-to-bl from-white to-transparent">
        <div
            class="w-[100%] h-[100%] px-[50px] py-[30px] flex flex-col gap-6 items-center rounded-tl-3xl rounded-bl-3xl top-0 right-0 bg-lightblack">
            <div class="w-[200px] h-[200px]">
                <RouterLink to="/">
                    <logoGradient class="w-full" />
                </RouterLink>
            </div>
            <nav class="navbar">
                <ul class="grid justify-end">
                    <li class="menu-item">
                        <RouterLink class="menu-link" to="/">HOME</RouterLink><img src="./icons/nav/home.svg"
                            alt="home">
                    </li>
                    <li class="menu-item">
                        <RouterLink class="menu-link" to="/projects">PROJECTS</RouterLink><img src="./icons/nav/projects.svg"
                            alt="projects">
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
            <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer">
                <div
                    class="w-20 h-8 bg-grey rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-1 after:left-1 after:w-9 after:h-6 after:rounded-full after:bg-white after:transition-all">
                </div>
                <span class="absolute text-lg text-white font-itc top-1 left-3">FR&nbsp;&nbsp;EN</span>
            </label>
        </div>
    </header>
</template>