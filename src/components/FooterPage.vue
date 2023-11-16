<script setup lang="ts">
import { RouterLink } from 'vue-router'
import logoGradient from './icons/logo-gradient.vue';
import linkedinLogo from './icons/linkedin-logo.vue';
import instagramLogo from './icons/instagram-logo.vue';
import dribbbleLogo from './icons/dribbble-logo.vue';
import behanceLogo from './icons/behance-logo.vue';

</script>
<template>
    <footer class="footer w-[100vw] pt-10">
        <div class="flex justify-between gap-10 pb-5 mx-[6vw]">
            <div class="flex gap-6">
                <logoGradient />
                <div class="w-[1px] h-auto bg-lightwhite"></div>
            </div>
            <div class="min-w-fit">
                <h5 class="mb-2">Catch me on socials!</h5>
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
                <h5 class="mb-2">Let's stay in touch!</h5>
                <form action="#" class="py-4">
                    <div>
                        <label for="email" class="block mb-2 text-sm">Email</label>
                        <input type="email" id="email"
                            class="block w-full px-1 text-base border-b bg-lightblack border-b-lightwhite focus:outline-none text-lightwhite"
                            placeholder="email@example.com">
                    </div>
                </form>
                <button type="submit"
                    class="my-4 bg-none border-lightwhite border hover:border-none text-lightwhite hover:bg-purple hover:text-lightblack font-medium rounded-full px-5 pt-2.5 pb-1.5 text-center transition-all">Join
                    the adventure</button>
            </div>
        </div>
        <span class="block py-2 mx-[5vw] -mb-1 text-sm text-center border-t border-lightwhite">
            &copy; 2023 Lisa Cingolani.</span>
    </footer>
</template>