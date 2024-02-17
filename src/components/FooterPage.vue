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
                <h5 class="mb-2">Retrouvez-moi sur les réseaux !</h5>
                <ul class="footer-socials">
                    <li class="footer-socials-item">
                        <linkedinLogo /><a class="footer-socials-link" href="">Linkedin</a>
                    </li>
                    <li class="footer-socials-item">
                        <behanceLogo /><a class="footer-socials-link" href="">Behance</a>
                    </li>
                    <li class="footer-socials-item">
                        <instagramLogo /><a class="footer-socials-link" href="">Instagram</a>
                    </li>
                    <li class="footer-socials-item">
                        <dribbble-logo /><a class="footer-socials-link" href="">Dribbble</a>
                    </li>
                </ul>
            </div>

            <div class="w-[300px]">
                <h5 class="mb-2">Restons en contact !</h5>
                <form action="#" class="py-4">
                    <div>
                        <label for="email" class="block mb-2 text-sm">Email</label>
                        <input type="email" id="email"
                            class="block w-full px-1 text-base bg-transparent border-b border-b-lightwhite focus:outline-none text-lightwhite"
                            placeholder="email@example.com">
                    </div>
                </form>
                <button type="submit"
                    class="my-4 btn focus:translate-y-[1px] hover:-translate-y-[1px]">Envoyer</button>
            </div>
        </div>
        <span class="block py-4 pt-6 text-sm text-center">
            &copy; 2023 Lisa Cingolani.</span>
    </footer>
</template>