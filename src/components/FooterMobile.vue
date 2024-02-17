<script setup lang="ts">
import { RouterLink } from 'vue-router'
import linkedinLogo from './icons/linkedin-logo.vue';
import instagramLogo from './icons/instagram-logo.vue';
import dribbbleLogo from './icons/dribbble-logo.vue';
import behanceLogo from './icons/behance-logo.vue';
import Logo from './icons/logo.vue';
</script>
<template>
    <footer class="w-screen bg-gradient-to-t from-lightblack to-black footer">
        <div class="p-10">
            <div class="min-w-fit">
                <h5 class="mb-5 text-center">Retrouvez-moi sur les réseaux !</h5>
                <ul class="flex flex-wrap gap-6 mx-auto w-fit">
                    <div class="flex flex-col gap-6">
                        <li class="footer-socials-item">
                            <linkedinLogo /><a class="footer-socials-link" href="">Linkedin</a>
                        </li>
                        <li class="footer-socials-item">
                            <instagramLogo /><a class="footer-socials-link" href="">Instagram</a>
                        </li>
                    </div>
                    <div class="flex flex-col gap-6">
                        <li class="footer-socials-item">
                            <behanceLogo /><a class="footer-socials-link" href="">Behance</a>
                        </li>

                        <li class="footer-socials-item">
                            <dribbble-logo /><a class="footer-socials-link" href="">Dribbble</a>
                        </li>
                    </div>
                </ul>
            </div>

            <div class="w-[80%] mx-auto">
                <h5 class="mt-10 mb-5 text-center">Restons en contact !</h5>
                <form action="#">
                    <input type="email" id="email"
                        class="block w-full px-1 text-base bg-black border-b max-w-[300px] mx-auto border-b-lightwhite focus:outline-none text-lightwhite"
                        placeholder="email@example.com">
                </form>
                <button type="submit"
                    class="mx-auto mt-5 btn focus:translate-y-[1px] hover:-translate-y-[1px]">Envoyer</button>
            </div>
            <Logo class="w-[50%] h-auto mx-auto mt-8 fill-lightwhite max-w-[200px]" />
        </div>
        <span class="block py-2 text-sm text-center">
            &copy; 2023 Lisa Cingolani.</span>
    </footer>
</template>