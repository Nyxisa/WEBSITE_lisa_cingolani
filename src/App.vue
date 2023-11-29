<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Suspense } from 'vue'
import HeaderPage from '@/components/HeaderPage.vue'
import HeaderMobile from '@/components/HeaderMobile.vue'
import FooterPage from './components/FooterPage.vue';
import FooterMobile from './components/FooterMobile.vue';
</script>

<template class="flex flex-col min-h[100vh] max-w-[100vw]">
    <HeaderPage class="hidden lg:visible" />
    <HeaderMobile class="lg:hidden" />
    <main class="flex-grow lg:max-w-[calc(100vw-300px)]">
        <Suspense>
            <RouterView />
        </Suspense>
    </main>
    <FooterPage class="max-w-[calc(100vw-300px)] hidden lg:visible" />
    <FooterMobile class="lg:hidden" />
</template>
