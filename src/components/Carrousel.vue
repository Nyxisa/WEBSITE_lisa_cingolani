<script setup lang="ts">
import { pb } from '@/backend'
import { ProjectIdEn } from '@/backend';
import { ref, onUnmounted, onMounted } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import Left from '@/components/icons/arrow-left.vue'
import Right from '@/components/icons/arrow-right.vue'
const props = defineProps<{
    id: string,
}>();
const ProjectInfo = await ProjectIdEn(props.id);
console.log(ProjectInfo)

const allImg = ProjectInfo.gallery;
console.log(allImg);
const urlAllImg = allImg.map((oneImage: string) => {
    return pb.getFileUrl(ProjectInfo, oneImage);
});
console.log(urlAllImg);

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
            const containerWidth = carrousel.value.scrollWidth;
            const scrollDistance = containerWidth / 5 + 2.5;
            carrousel.value.scrollLeft += scrollDistance;
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
            <img id="ecran-1" v-if="urlAllImg[8]" :src="urlAllImg[8]" alt="1" />
            <img id="ecran-2" v-if="urlAllImg[9]" :src="urlAllImg[9]" alt="2" />
            <img id="ecran-3" v-if="urlAllImg[10]" :src="urlAllImg[10]" alt="3" />
            <img id="ecran-4" v-if="urlAllImg[11]" :src="urlAllImg[11]" alt="4" />
            <img id="ecran-5" v-if="urlAllImg[12]" :src="urlAllImg[12]" alt="5" />
        </div>
        <div class="hidden carrousel_btn lg:flex">
            <button @click="carrousel && (carrousel.scrollLeft -= carrousel.clientWidth)">
                <Left class="z-10 bg-opacity-75 rounded-full bg-lightblack backdrop-blur-sm" />
            </button>
            <button @click="carrousel && (carrousel.scrollLeft += carrousel.clientWidth)">
                <Right class="z-10 bg-opacity-75 rounded-full bg-lightblack backdrop-blur-sm" />
            </button>
        </div>
        <ul class="flex gap-4 mt-5">
            <li v-if="urlAllImg[8]"><a href="#ecran-1" :class="{ carrousel_actif: displayedImg === '#ecran-1' }">
                    <div class="carrousel_circle"></div>
                </a></li>
            <li v-if="urlAllImg[9]"><a href="#ecran-2" :class="{ carrousel_actif: displayedImg === '#ecran-2' }">
                    <div class="carrousel_circle"></div>
                </a></li>
            <li v-if="urlAllImg[10]"><a href="#ecran-3" :class="{ carrousel_actif: displayedImg === '#ecran-3' }">
                    <div class="carrousel_circle"></div>
                </a></li>
            <li v-if="urlAllImg[11]"><a href="#ecran-4" :class="{ carrousel_actif: displayedImg === '#ecran-4' }">
                    <div class="carrousel_circle"></div>
                </a></li>
            <li v-if="urlAllImg[12]"><a href="#ecran-5" :class="{ carrousel_actif: displayedImg === '#ecran-5' }">
                    <div class="carrousel_circle"></div>
                </a></li>
        </ul>

    </section>
</template>

<style>
.carrousel_actif .carrousel_circle {
    background-color: white;
}

.carrousel_circle {
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

    @media screen and (min-width: 1024px) {
        width: 50%;
        margin-inline: auto;
    }

    scroll-snap-align: center;
    max-height: 80vh;
}

.carrousel_images {
    display: flex;
    gap: 10px;
    align-items: center;
    overflow: hidden;
    overflow-x: auto;
    width: 100%;
    scroll-behavior: smooth;
}

.carrousel_images::-webkit-scrollbar {
    display: none;
}

.carrousel_images img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 1rem;
    display: block;
}

.carrousel_btn {
    position: absolute;
    justify-content: space-between;
    align-items: center;
    width: 60vw;
    height: 50px;
}
</style>

