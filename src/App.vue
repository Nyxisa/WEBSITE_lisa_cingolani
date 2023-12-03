<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Suspense } from 'vue'
import HeaderPage from '@/components/HeaderPage.vue'
import HeaderMobile from '@/components/HeaderMobile.vue'
import FooterPage from '@/components/FooterPage.vue';
import FooterMobile from '@/components/FooterMobile.vue';
</script>

<template>
    <HeaderPage class="hidden lg:block" />
    <HeaderMobile class="lg:hidden" />
    <main class="lg:max-w-[calc(100vw-300px)] pt-24 pb-8 lg:py-0 overflow-hidden">
        <Suspense>
            <RouterView />
        </Suspense>
    </main>
    <FooterPage class="lg:max-w-[calc(100vw-300px)] hidden md:block" />
    <FooterMobile class="md:hidden max-w-[100vw]" />
</template>
