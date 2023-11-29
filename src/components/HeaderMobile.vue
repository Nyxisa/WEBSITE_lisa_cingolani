<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { RouterLink } from 'vue-router'
import Logo from './icons/logo.vue';
import logoGradient from './icons/logo-gradient.vue';
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()
const underLimit = computed(() => y.value < 400)

const dirTop = ref(true)
watch(y, (y, oldY) => {
    dirTop.value = y < oldY
})

const activeMenu = ref(false)

function closeMenu() {
    activeMenu.value = false
}

</script>
<template>
    <header aria-label="Header"
        class="fixed z-10 flex shadow-1 items-stretch justify-between w-[100vw] px-6 py-2 transition-all duration-300 ease-in-out translate-y-0 bg-white lg:py-4"
        :class="{
            '!-translate-y-full !bg-transparent': !dirTop,
            '!bg-white lg:!bg-white': underLimit
        }">

        <div class="flex items-center">
            <RouterLink to="/">
                <logoGradient class="h-[75px] w-auto" />
            </RouterLink>
            <RouterLink class="text-xl font-bold lg:text-3xl font-abhaya text-darkBlue" to="/">PORTFOLIO</RouterLink>
        </div>

        <div class="flex items-center justify-end flex-1">
            <nav aria-label="Site Nav"
                class="fixed inset-0 invisible w-screen h-screen text-2xl transition-all duration-300 ease-in-out bg-white opacity-0 lg:bg-opacity-0 md:block lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:opacity-100"
                :class="{ '!visible opacity-100': activeMenu }" v-scroll-lock="activeMenu">
                <ul class="items-center lg:flex-row mt-[25vh] text-center lg:m-0 flex-col flex">
                    <li class="menu-item var-font">
                        <RouterLink @click="closeMenu" to="/apartments">HOME</RouterLink>
                    </li>
                    <li class="menu-item var-font">
                        <RouterLink @click="closeMenu" to="/infos">PROJECTS</RouterLink>
                    </li>
                    <li class="menu-item var-font">
                        <RouterLink @click="closeMenu" to="/about">ABOUT</RouterLink>
                    </li>
                    <li class="menu-item var-font">
                        <RouterLink @click="closeMenu" to="/about">CONTACT</RouterLink>
                    </li>
                    <li class="menu-item var-font lg:hidden">
                        <RouterLink class="font-dmSans" @click="closeMenu" to="">EN | FR</RouterLink>
                    </li>
                </ul>
                <RouterLink class="" @click="closeMenu" to="/">
                    <logo class="m-auto mt-[5vh]" />
                </RouterLink>
            </nav>

            <div class="items-center hidden gap-2 px-5 border-l-2 border-black lg:flex my-2.5">
                <language />
                <RouterLink class="block p-0 text-lg menu-item var-font" @click="closeMenu" to="">EN | FR
                </RouterLink>
            </div>

            <button class="relative z-10 flex flex-col justify-between w-8 h-5 ml-5 lg:hidden"
                @click="activeMenu = !activeMenu">
                <div class="ease h-[2px] w-full transform rounded-full bg-darkBlue transition duration-300"
                    :class="{ 'translate-y-[9px] rotate-45 bg-darkBlue': activeMenu, '!bg-darkBlue': underLimit }">
                </div>
                <div class="ease h-[2px] w-full transform rounded-full bg-darkBlue transition duration-300"
                    :class="{ 'bg-darkBlue opacity-0': activeMenu, '!bg-darkBlue': underLimit }"></div>
                <div class="ease h-[2px] w-full transform rounded-full bg-darkBlue transition duration-300"
                    :class="{ '-translate-y-[9px] -rotate-45 bg-darkBlue': activeMenu, '!bg-darkBlue': underLimit }">
                </div>
            </button>

        </div>


    </header>
</template>