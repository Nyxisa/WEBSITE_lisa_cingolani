<script setup lang="ts">
import { pb } from '@/backend'
import { ProjectId } from '@/backend';
import { ref, onMounted, onUnmounted } from 'vue';
const props = defineProps<{
    id: string,
    image: string,
}>();
const ProjectInfo = await ProjectId(props.id);
const CategoryTab = ref(ProjectInfo.category);

const img0 = ProjectInfo.image
const urlImg0 = img0 && pb.getFileUrl(ProjectInfo, img0, { thumb: '100x200' })

</script>
    
<template>
    <section class="mb-10">
        <h1 class="mt-4 mb-2 text-orange">{{ ProjectInfo.title }}</h1>
        <h2 class="pt-3 text-xl font-thin"> {{ CategoryTab.join(" | ") }}</h2>
        <div class="flex-1 border-b border-lightwhite"></div>
        <p class="max-w-[70ch] h-full">{{ ProjectInfo.description }} Fictional retro-futuristic car brand. Lorem ipsum dolor
            sit
            amet consectetur. Varius lectus dictum rhoncus egestas. Imperdiet rhoncus in tellus cras condimentum posuere.
            Fictional retro-futuristic car brand. </p>
        <img :src="urlImg0" class="max-h-[500px] mt-10 w-full" />
    </section>

    <section class="flex justify-between gap-10 py-10"> 
        <img :src="urlImg0" class="max-h-[500px] w-[50%]" />
        <div>
            <p class="max-w-[70ch]">Fictional retro-futuristic car brand. Lorem ipsum dolor sit amet consectetur. Varius
                lectus dictum rhoncus
                egestas.
                Imperdiet rhoncus in tellus cras condimentum posuere.
                Fictional retro-futuristic car brand.</p>
            <ul>
                <li>Lorem ipsum dolor sit amet consectetur. </li>
                <li> Varius lectus dictum rhoncus egestas.</li>
                <li> Imperdiet rhoncus in tellus cras</li>
                <li> condimentum posuere.</li>
            </ul>
            <p class="max-w-[70ch]">Fictional retro-futuristic car brand. Lorem ipsum dolor sit amet consectetur. Varius
                lectus dictum rhoncus
                egestas.
                Imperdiet rhoncus in tellus cras condimentum posuere.</p>
        </div>
    </section>

    <section class="flex justify-between gap-10 py-10">
        <div>
            <p class="max-w-[70ch]">Fictional retro-futuristic car brand. Lorem ipsum dolor sit amet consectetur. Varius
                lectus dictum rhoncus
                egestas.
                Imperdiet rhoncus in tellus cras condimentum posuere.
                Fictional retro-futuristic car brand.</p>
            <p class="max-w-[70ch]">Fictional retro-futuristic car brand. Lorem ipsum dolor sit amet consectetur. Varius
                lectus dictum rhoncus
                egestas.
                Imperdiet rhoncus in tellus cras condimentum posuere.</p>
        </div>
        <ul class="software-grid">
            <li>FIGMA</li>
            <li>ILLUSTRATOR</li>
            <li>PHOTOSHOP</li>
            <li>INDESIGN</li>
        </ul>
    </section>

    <section class="flex justify-between gap-10 py-10 max-w-[100%]">
        <img :src="urlImg0" class="w-[30%] h-fit" />
        <img :src="urlImg0" class="w-[30%] h-fit" />
        <img :src="urlImg0" class="w-[30%] h-fit" />
    </section>

    <p class="max-w-[70ch] py-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. In qui aperiam inventore culpa
        fuga sit iusto incidunt eveniet. Ad voluptatem unde provident similique enim! Quasi, ipsam. Sapiente tempora quis
        numquam.
    </p>

    <div class="">
    <p class="ml-auto font-light border-none btn-style bg-grey">Share on Facebook / Twitter / LinkedIn</p>
    <!-- <a href="https://www.facebook.com/sharer/sharer.php?u=https://portfolio.lisa-cingolani.fr/{{ id }}"></a>
                    <a href="https://twitter.com/intent/tweet?url=https://portfolio.lisa-cingolani.fr/{{ id }}"></a> -->
</div>
</template>