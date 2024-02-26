<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Suspense } from 'vue'
import HeaderPage from '@/components/HeaderPage.vue'
import HeaderMobile from '@/components/HeaderMobile.vue'
import FooterPage from '@/components/FooterPage.vue';
import FooterMobile from '@/components/FooterMobile.vue';
</script>

<template>
    <!-- Thanks for checking the code, you're amazing! -->
    <HeaderPage class="hidden lg:flex" />
    <HeaderMobile class="lg:hidden" />
    <main class="lg:max-w-[calc(100vw-300px)] pt-24 lg:pt-0 lg:mb-10 overflow-hidden">
        <Suspense>
            <RouterView :key="$route.path" />
        </Suspense>
    </main>
    <FooterPage class="lg:max-w-[calc(100vw-300px)] hidden md:block" />
    <FooterMobile class="md:hidden max-w-[100vw]" />
    <!-- Have a nice day -->
</template>
