<template>
    <section class="flex flex-col gap-4 mt-4">
        <div class="flex max-w-full gap-4">
            <div class="flex items-center justify-center w-1/4 bg-right bg-cover rounded-simple"
                style="background-image: url(/bg_home3.webp)">
                <video class="w-full py-4" autoplay loop muted playsinline>
                    <source src="/my_arrow.mov" type='video/mp4; codecs="hvc1"'>
                    <source src="/my_arrow.webm" type="video/webm">
                </video>
            </div>
            <h2 class="w-3/4 p-4 bg-lightblack font_normal rounded-simple" v-html="$t('home.intro1')"></h2>
        </div>
        <p class="flex-grow p-4 my-0 text-base font_light w-fill bg-lightblack rounded-simple"
            v-html="$t('home.intro2')">
        </p>
        <p class="p-4 my-0 text-base tflex-grow w-fill bg-lightblack rounded-simple">
            <span class="font-normal">{{ $t('home.intro3span') }}</span>
            <span class="font_light" v-html="$t('home.intro3')"></span>
        </p>
        <div class="flex max-w-full gap-4">
            <h2 class="flex-grow w-1/2 p-4 bg-lightblack font_normal rounded-simple">{{ $t('home.cta') }}</h2>
            <RouterLink to="/projects"
                class="flex items-center justify-center w-1/2 pb-2 bg-left bg-cover rounded-simple"
                style="background-image: url(/bg_home2.webp)">
                <p class="-mb-4 text-xs"><span class="pr-2 text-4xl">5</span>{{ $t('home.nbprojects') }}</p>
            </RouterLink>
        </div>
    </section>
</template>