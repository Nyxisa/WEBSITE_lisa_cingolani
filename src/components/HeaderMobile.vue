<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { useWindowScroll } from '@vueuse/core'
import Logo from './icons/logo.vue'

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
        class="fixed z-10 flex items-center justify-between w-screen px-6 py-4 transition-all duration-300 ease-in-out translate-y-0 md:shadow-none md:bg-gradient-to-t bg-gradient-to-b from-lightblack/90 to-black/90 text-lightwhite shadow-1 lg:py-4"
        :class="{
            '!-translate-y-full !bg-transparent': !dirTop,
            'shadow-1': underLimit,
        }">
        <RouterLink to="/">
            <Logo class="w-10 h-auto" />
        </RouterLink>
        <RouterLink to="/">
            <span class="text-xs font-thin text-transparent div-graphic font-halyard">Lisa Cingolani</span>
        </RouterLink>
        <div class="flex items-center justify-end font-itc">
            <nav aria-label="Site Nav"
                class="fixed inset-0 invisible w-screen h-[100vh] text-2xl transition-all duration-300 ease-in-out opacity-0 bg-gradient-to-t from-lightblack to-black lg:bg-opacity-0 md:block lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:opacity-100"
                :class="{ '!visible opacity-100': activeMenu }" v-scroll-lock="activeMenu">
                <ul class="items-center lg:flex-row mt-[20svh] text-center lg:m-0 flex-col flex">
                    <li class="block menu-item var-font">
                        <RouterLink @click="closeMenu" to="/">Accueil</RouterLink>
                    </li>
                    <li class="block menu-item var-font">
                        <RouterLink @click="closeMenu" to="/projects">Projets</RouterLink>
                    </li>
                    <li class="block menu-item var-font">
                        <RouterLink @click="closeMenu" to="/about">À Propos</RouterLink>
                    </li>
                    <li class="block menu-item var-font">
                        <RouterLink @click="closeMenu" to="/contact">Contact</RouterLink>
                    </li>
                    <li class="block menu-item var-font">
                        <label class="relative z-10 inline-flex items-center cursor-pointer drop-shadow-lg">
                            <input type="checkbox" value="" class="sr-only peer">
                            <div
                                class="w-20 h-8 bg-grey rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-1 after:left-1 after:w-9 after:h-6 after:rounded-full after:bg-white after:transition-all">
                            </div>
                            <span class="absolute z-20 text-lg text-white font-itc top-1 left-3">FR&nbsp;&nbsp;EN</span>
                        </label>
                    </li>
                </ul>
                <RouterLink class="" @click="closeMenu" to="/">
                    <Logo class="w-24 h-auto mx-auto mt-10 fill-lightwhite" />
                </RouterLink>
            </nav>

            <button class="relative z-10 flex flex-col justify-between w-8 h-5 mx-2" @click="activeMenu = !activeMenu">
                <div class="ease h-[2px] w-full transform rounded-full bg-lightwhite transition duration-300"
                    :class="{ 'translate-y-[9px] rotate-45 bg-lightwhite': activeMenu, '!bg-lightwhite': underLimit }">
                </div>
                <div class="ease h-[2px] w-full transform rounded-full bg-lightwhite transition duration-300"
                    :class="{ 'bg-lightwhite opacity-0': activeMenu, '!bg-lightwhite': underLimit }"></div>
                <div class="ease h-[2px] w-full transform rounded-full bg-lightwhite transition duration-300"
                    :class="{ '-translate-y-[9px] -rotate-45 bg-lightwhite': activeMenu, '!bg-lightwhite': underLimit }">
                </div>
            </button>

        </div>


    </header>
</template>