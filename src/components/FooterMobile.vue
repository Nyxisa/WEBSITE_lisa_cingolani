<script setup lang="ts">
import { RouterLink } from 'vue-router'
import linkedinLogo from './icons/linkedin-logo.vue';
import instagramLogo from './icons/instagram-logo.vue';
import dribbbleLogo from './icons/dribbble-logo.vue';
import behanceLogo from './icons/behance-logo.vue';

import { ref } from 'vue';

const email = ref('');
const error = ref('');
const submitted = ref(false);

const resetStates = () => {
    submitted.value = false;
    error.value = '';
};

const resetForm = () => {
    email.value = '';
};

const onSubmit = async () => {
    resetStates();

    try {
        const response = await fetch("https://formcarry.com/s/xcH-sD-LvT3", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: email.value })
        });

        const data = await response.json();

        if (data.code === 200) {
            submitted.value = true;
            resetForm();
        } else if (data.code === 422) {
            error.value = data.message;
        } else {
            error.value = data.message;
        }
    } catch (err: any) {
        error.value = err.message ? err.message : err;
    }
};

const showNotification = () => submitted.value || error.value;
const errorMessage = () => error.value ? error.value : '';

</script>

<template>
    <footer class="w-screen bg-gradient-to-t from-lightblack to-black footer">
        <div class="p-10">
            <div class="min-w-fit">
                <h5 class="mb-10 text-center">{{ $t('footer.cta1') }}</h5>
                <ul class="flex flex-wrap justify-center gap-6 mx-auto w-fit">
                    <div class="flex flex-col items-center gap-6">
                        <li class="footer-socials-item">
                            <linkedinLogo /><a class="footer-socials-link" href="https://www.linkedin.com/in/lisacgln"
                                target="_blank">LinkedIn</a>
                        </li>
                        <li class="footer-socials-item">
                            <instagramLogo /><a class="footer-socials-link" href="https://www.instagram.com/lisa_cgln"
                                target="_blank">Instagram</a>
                        </li>
                    </div>
                    <div class="flex flex-col items-center gap-6">
                        <li class="footer-socials-item">
                            <behanceLogo /><a class="footer-socials-link" href="https://www.behance.net/lisa-cingolani"
                                target="_blank">Behance</a>
                        </li>

                        <li class="footer-socials-item">
                            <dribbble-logo /><a class="footer-socials-link" href="https://dribbble.com/Nyxisa"
                                target="_blank">Dribbble</a>
                        </li>
                    </div>
                </ul>
            </div>

            <div class="mt-20 w-[80%] mx-auto">
                <h5 class="mb-10 text-center">{{ $t('footer.cta2') }}</h5>
                <form @submit.prevent="onSubmit">
                    <input type="email" v-model="email" id="email"
                        class="block focus:border-b-2 focus:border-lightpurple text-center w-full px-1 text-base bg-transparent border-b max-w-[300px] mx-auto border-b-lightwhite focus:outline-none text-lightwhite"
                        :placeholder="$t('footer.placeholder')">

                    <button v-if="!showNotification() || error" type="submit"
                        class="mx-auto mt-5 btn hover:scale-[1.03] focus:tracking-wider">{{
                    $t('footer.btn') }}</button>
                    <button v-if="!error && showNotification()"
                        class=" mx-auto mt-5 bg-lightpurple btn hover:scale-[1.03] focus:tracking-wider">{{
                    $t('footer.btn-ok') }}</button>
                    <div v-else-if="error && showNotification()"
                        class="p-5 mx-auto my-5 text-lightblack bg-lightorange rounded-simple w-fill">
                        {{ error }}
                    </div>

                </form>
            </div>
            <img src="./icons/nav/logo.svg" class="w-[40%] h-auto mx-auto mt-20 fill-lightwhite max-w-[200px]" />
        </div>
        <span class="block py-2 text-sm font-thin text-center">
            &copy; 2023 Lisa Cingolani.</span>
    </footer>
</template>