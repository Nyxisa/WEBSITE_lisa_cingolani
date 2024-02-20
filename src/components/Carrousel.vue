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
            <img id="ecran-1" v-if="urlAllImg[2]" :src="urlAllImg[2]" alt="1" />
            <img id="ecran-2" v-if="urlAllImg[3]" :src="urlAllImg[3]" alt="2" />
            <img id="ecran-3" v-if="urlAllImg[4]" :src="urlAllImg[4]" alt="3" />
            <img id="ecran-4" v-if="urlAllImg[5]" :src="urlAllImg[5]" alt="4" />
            <img id="ecran-5" v-if="urlAllImg[6]" :src="urlAllImg[6]" alt="5" />
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
            <li><a href="#ecran-1" :class="{ carrousel_actif: displayedImg === '#ecran-1' }">
                    <div class="carrousel_circle"></div>
                </a></li>
            <li><a href="#ecran-2" :class="{ carrousel_actif: displayedImg === '#ecran-2' }">
                    <div class="carrousel_circle"></div>
                </a></li>
            <li><a href="#ecran-3" :class="{ carrousel_actif: displayedImg === '#ecran-3' }">
                    <div class="carrousel_circle"></div>
                </a></li>
            <li><a href="#ecran-4" :class="{ carrousel_actif: displayedImg === '#ecran-4' }">
                    <div class="carrousel_circle"></div>
                </a></li>
            <li><a href="#ecran-5" :class="{ carrousel_actif: displayedImg === '#ecran-5' }">
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

