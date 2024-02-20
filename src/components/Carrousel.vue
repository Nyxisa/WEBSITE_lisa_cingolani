<script setup lang="ts">
import { ref, onUnmounted, onMounted } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import Left from '@/components/icons/arrow-left.vue'
import Right from '@/components/icons/arrow-right.vue'

const carrousel = ref<HTMLDivElement | null>(null);
let displayedImg = ref("#ecran-1");

const updateDisplayedImg = () => {
    const currentElement = [...carrousel.value!.children].find(
        (e) => e.getBoundingClientRect().x >= carrousel.value!.getBoundingClientRect().x
    );
    displayedImg.value = `#${currentElement?.id}`;
}

const debouncedImg = useDebounceFn(updateDisplayedImg, 100, { maxWait: 500 });

// Autoscroll function
const autoScroll = () => {
    const scrollInterval = setInterval(() => {
        if (carrousel.value) {
            carrousel.value.scrollLeft += carrousel.value.clientWidth;
        }
    }, 5000); // 5 seconds

    onUnmounted(() => {
        clearInterval(scrollInterval);
    });
}
onMounted(() => {
    autoScroll();
});
</script>
<template>
    <section class="relative carrousel_layout">
        <div class="carrousel_images" ref="carrousel" @scroll.passive="debouncedImg()">
            <img id="ecran-1" src="/bg_home1.webp" alt="1" />
            <img id="ecran-2" src="/bg_home2.webp" alt="2" />
            <img id="ecran-3" src="/bg_home3.webp" alt="3" />
            <img id="ecran-4" src="/bg_home1.webp" alt="4" />
            <img id="ecran-5" src="/bg_home2.webp" alt="5" />
        </div>
        <div class="carrousel_btn">
            <button @click="carrousel && (carrousel.scrollLeft -= carrousel.clientWidth)">
                <Left />
            </button>
            <button @click="carrousel && (carrousel.scrollLeft += carrousel.clientWidth)">
                <Right />
            </button>
        </div>
        <ul class="flex gap-4 mt-5">
            <li><a href="#ecran-1" :class="{ actif: displayedImg === '#ecran-1' }">
                    <div class="circle"></div>
                </a></li>
            <li><a href="#ecran-2" :class="{ actif: displayedImg === '#ecran-2' }">
                    <div class="circle"></div>
                </a></li>
            <li><a href="#ecran-3" :class="{ actif: displayedImg === '#ecran-3' }">
                    <div class="circle"></div>
                </a></li>
            <li><a href="#ecran-4" :class="{ actif: displayedImg === '#ecran-4' }">
                    <div class="circle"></div>
                </a></li>
            <li><a href="#ecran-5" :class="{ actif: displayedImg === '#ecran-5' }">
                    <div class="circle"></div>
                </a></li>
        </ul>

    </section>
</template>

<style>
.actif .circle {
    background-color: white;
}

.active {
    margin-left: auto;
    margin-right: auto;
}

.circle {
    width: 8px;
    height: 8px;
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 50%;
}

.carrousel_layout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    scroll-snap-align: center;
}

.carrousel_images {
    display: flex;
    align-items: center;
    overflow: hidden;
    overflow-x: auto;
    width: 100%;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    margin-left: 0%;
}

.carrousel_images::-webkit-scrollbar {
    display: none;
}

.carrousel_images img {
    width: 80%;
    height: auto;
    object-fit: cover;
    border-radius: 1rem;
    display: block;
    margin-inline: 10%;

}

.carrousel_btn {
    visibility: hidden;
    display: flex;
    position: absolute;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
}
</style>

