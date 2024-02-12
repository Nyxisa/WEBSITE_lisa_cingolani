<script setup lang="ts">
import IntroMobile from './IntroMobile.vue'
import IntroDesktop from './IntroDesktop.vue'
import SkillsPills from './SkillsPills.vue';
</script>

<template>
    <div class="margins">
        <div class="flex">
            <h1 class="w-full">
                <strong class="text-transparent div-graphic font_thin var-font">Lisa Cingolani</strong>
            </h1>
            <h1 class="text-transparent font_thin">
                <strong class="opacity-40 mirror div-graphic md:opacity-20">Designer</strong>
            </h1>
        </div>
        <IntroMobile class="md:hidden" />
        <IntroDesktop class="hidden md:flex" />
        <SkillsPills class="mt-10" />
    </div>
</template>