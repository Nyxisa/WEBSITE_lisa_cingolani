<script setup lang="ts">
import { RouterLink } from 'vue-router'
import linkedinLogo from './icons/linkedin-logo.vue';
import instagramLogo from './icons/instagram-logo.vue';
import dribbbleLogo from './icons/dribbble-logo.vue';
import behanceLogo from './icons/behance-logo.vue';

</script>
<template>
    <footer class="footer w-[100vw] pt-20 bg-gradient-to-b from-lightblack to-black">
        <div class="flex justify-around gap-10 pb-5 mx-[6vw]">
            <div class="min-w-fit">
                <h5 class="mb-2">{{ $t('footer.cta1') }}</h5>
                <ul class="footer-socials">
                    <li class="footer-socials-item">
                        <linkedinLogo /><a class="footer-socials-link" href="https://www.linkedin.com/in/lisacgln"
                            target="_blank">LinkedIn</a>
                    </li>
                    <li class="footer-socials-item">
                        <behanceLogo /><a class="footer-socials-link" href="https://www.behance.net/lisa-cingolani"
                            target="_blank">Behance</a>
                    </li>
                    <li class="footer-socials-item">
                        <instagramLogo /><a class="footer-socials-link" href="https://www.instagram.com/lisa_cgln"
                            target="_blank">Instagram</a>
                    </li>
                    <li class="footer-socials-item">
                        <dribbble-logo /><a class="footer-socials-link" href="https://dribbble.com/Nyxisa"
                            target="_blank">Dribbble</a>
                    </li>
                </ul>
            </div>

            <div class="w-[300px]">
                <h5 class="mb-2">{{ $t('footer.cta2') }}</h5>
                <form action="#" class="py-4">
                    <div>
                        <label for="email" class="block mb-2 text-sm">{{ $t('footer.mail') }}</label>
                        <input type="email" id="email"
                            class="block w-full px-1 text-base bg-transparent border-b border-b-lightwhite focus:outline-none text-lightwhite"
                            :placeholder="$t('footer.placeholder')">
                    </div>
                </form>
                <button type="submit" class="my-4 btn focus:translate-y-[1px] hover:-translate-y-[1px]">{{ $t('footer.btn')
                }}</button>
            </div>
        </div>
        <span class="block py-4 pt-6 text-sm font-thin text-center">
            &copy; 2023 Lisa Cingolani.</span>
    </footer>
</template>