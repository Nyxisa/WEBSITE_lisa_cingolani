<script setup lang="ts">
import ArrowSimple from './icons/arrow_simple.vue';
</script>
<template>
    <div class="relative hidden gap-10 mt-4 -mb-10 div-graphic animate-scrolling lg:flex">
        <h1 class="font-bold whitespace-nowrap w-fit text-giant no-stroke ">PAGE 404</h1>
        <h1 class="font-normal whitespace-nowrap text-giant w-fit no-stroke ">PAGE 404</h1>
        <h1 class="font-normal stroke-2 whitespace-nowrap text-giant w-fit ">PAGE 404</h1>
        <h1 class="font-bold whitespace-nowrap w-fit text-giant no-stroke ">PAGE 404</h1>
        <h1 class="font-normal whitespace-nowrap text-giant w-fit no-stroke ">PAGE 404</h1>
        <h1 class="font-normal stroke-2 whitespace-nowrap text-giant w-fit ">PAGE 404</h1>
    </div>
    <section class="margins lg:mt-8">
        <div class="flex items-center w-full gap-4 mb-8">
            <h1 class="text-transparent whitespace-nowrap lg:hidden div-graphic font_thin">
                Page 404
            </h1>
            <div class="w-0 h-[1px] anim-slide-in rounded-full mb-1 bg-lightwhite"></div>
        </div>
        <div class="p-5 lg:p-20 bg-lightwhite rounded-simple">
            <h4 class="pb-3 mb-4 text-center md:my-1 text-lightblack">
                {{ $t('404.info') }}</h4>
            <RouterLink to="/"
                class="mx-auto my-20 hidden md:block text-xl transition-all border-none focus:translate-y-1 focus:shadow-none hover:-translate-y-[1px] bg-orange text-lightwhite hover:shadow-nav btn-style w-fit">
                {{ $t('404.link') }}</RouterLink>
            <div class="md:hidden">
                <p class="text-lg text-center font_normal text-lightblack">{{ $t('404.link') }}</p>
                <RouterLink to="/"
                    class="mx-auto my-5 text-xl transition-all border-none focus:translate-y-1 focus:shadow-none hover:-translate-y-[1px] bg-orange text-lightwhite hover:shadow-nav btn-style py-2">
                    <ArrowSimple class="w-10" />
                </RouterLink>
            </div>
        </div>
    </section>
</template>