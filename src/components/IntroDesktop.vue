<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMouseInElement } from '@vueuse/core'
const target = ref(null)

const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target)

const cardTransform = computed(() => {
  const MaxRotation = 6
  const rX = (
    MaxRotation / 2 -
    (elementY.value / elementHeight.value) * MaxRotation).toFixed(2)
  const rY = (
    (elementX.value / elementWidth.value) * MaxRotation - MaxRotation / 2).toFixed(2)

  return isOutside.value ? '' : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
})
</script>

<template>
  <section class="flex gap-8 mt-10">
    <div class="flex flex-col w-1/4 max-h-full gap-8">
      <div class="flex items-center justify-center bg-right bg-cover h-1/2 rounded-simple"
        style="background-image: url(/bg_home3.webp)">
        <video class="w-full py-4" autoplay loop muted playsinline>
          <source src="/my_arrow.mov" type='video/mp4; codecs="hvc1"' />
          <source src="/my_arrow.webm" type="video/webm" />
        </video>
      </div>
      <RouterLink to="/projects" class="flex items-center justify-center bg-left bg-cover h-1/2 rounded-simple group"
        style="background-image: url(/bg_home2.webp)">
        <p class="-mb-4 text-lg transition-all duration-500 group-hover:scale-90">
          <span class="pr-2 text-7xl">5</span>{{ $t('home.nbprojects') }}
        </p>
      </RouterLink>
    </div>
    <div class="w-3/4 p-[1px] rounded-simple" ref="target"
      :style="{ transform: cardTransform, transition: 'transform 0.25s ease-out' }"
      style="background:linear-gradient(to top left, #212121 25%, rgb(117, 117, 117) 100%)">
      <div class="w-full p-8 rounded-simple bg-lightblack">
        <h2 class="mb-4 bg-lightblack font_normal rounded-simple" v-html="$t('home.intro1')"></h2>
        <p class="text-base md:text-lg lg:text-2xl font_light w-fill bg-lightblack rounded-simple"
          v-html="$t('home.intro2')">
        </p>
        <p class="text-base w-fill md:text-lg lg:text-2xl bg-lightblack rounded-simple">
          <span class="font-normal">{{ $t('home.intro3span') }}</span>
          <span class="font_light" v-html="$t('home.intro3')"></span>
        </p>
        <h2 class="mt-4 fw-1/2 bg-lightblack font_normal rounded-simple">
          {{ $t('home.cta') }}
        </h2>
      </div>
    </div>
  </section>
</template>
