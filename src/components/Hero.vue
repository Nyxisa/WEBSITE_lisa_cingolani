<script setup lang="ts">
import IntroMobile from './IntroMobile.vue'
import IntroDesktop from './IntroDesktop.vue'
import SkillsPills from './SkillsPills.vue';
</script>

<template>
    <div class="mt-8 margins">
        <div class="flex">
            <h1 class="w-full">
                <strong class="text-transparent normal-case div-graphic font_thin md:var-font">Lisa Cingolani</strong>
            </h1>
            <h1 class="text-transparent transition-all hover:blur-sm font_thin">
                <strong class="normal-case transition-opacity opacity-40 hover:opacity-80 mirror div-graphic md:opacity-20">Designer</strong>
            </h1>
        </div>
        <IntroMobile class="md:hidden" />
        <IntroDesktop class="hidden md:flex" />
        <SkillsPills class="mt-16" />
    </div>
</template>