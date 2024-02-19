<template>
  <section class="flex gap-8 mt-4">
    <div class="flex flex-col w-1/4 max-h-full gap-8">
      <div
        class="flex items-center justify-center bg-right bg-cover h-1/2 rounded-simple"
        style="background-image: url(/bg_home3.webp)"
      >
        <video class="w-full py-4" autoplay loop muted playsinline>
          <source src="../../public/my_arrow.mov" type='video/mp4; codecs="hvc1"' />
          <source src="../../public/my_arrow.webm" type="video/webm" />
        </video>
      </div>
      <div
        class="flex items-center justify-center bg-left bg-cover h-1/2 rounded-simple"
        style="background-image: url(/bg_home2.webp)"
      >
        <p class="-mb-4 text-lg"><span class="pr-2 text-7xl">5</span>{{ $t('hero.projets') }}</p>
      </div>
    </div>
    <div class="w-3/4 p-8 border border-opacity-10 border-lightwhite rounded-simple">
      <h2 class="mb-4 bg-lightblack font_normal rounded-simple" v-html="$t('hero.introh2')"></h2>
      <p
        lang="fr"
        class="text-base md:text-lg lg:text-2xl font_light w-fill bg-lightblack rounded-simple"
       v-html="$t('hero.introp1')">
      </p>
      <p class="text-base font_light w-fill md:text-lg lg:text-2xl bg-lightblack rounded-simple">
        <span class="font_normal">Mon rôle ?</span> Sculpter des iden&shy;tités visu&shy;elles, être
        l'archi&shy;tecte derrière chaque pixel.
      </p>
      <h2 class="fw-1/2 bg-lightblack font_normal rounded-simple">
        Et si on donnait vie à vos idées ensemble ?
      </h2>
    </div>
  </section>
</template>
