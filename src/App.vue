<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Suspense } from 'vue'
import HeaderPage from '@/components/HeaderPage.vue'
import FooterPage from './components/FooterPage.vue';
</script>

<template class="flex flex-col min-h[100vh] max-w-[100vw]">
    <HeaderPage />
    <main class="flex-grow max-w-[calc(100vw-300px)]">
        <Suspense>
            <RouterView />
        </Suspense>
    </main>
    <FooterPage class="max-w-[calc(100vw-300px)]" />
</template>
