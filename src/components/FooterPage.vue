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
                <form @submit.prevent="onSubmit" class="py-4">
                    <div>
                        <label for="email" class="block mb-2 text-sm">{{ $t('footer.mail') }}</label>
                        <input type="email" v-model="email" id="email"
                            class="block w-full px-1 text-base bg-transparent border-b focus:border-b-2 focus:border-lightpurple border-b-lightwhite focus:outline-none text-lightwhite"
                            :placeholder="$t('footer.placeholder')">
                    </div>
                    <button v-if="!showNotification() || error" type="submit"
                        class="my-4 btn hover:scale-[1.03] focus:tracking-wider">{{
                    $t('footer.btn')
                }}</button>
                    <button v-if="!error && showNotification()"
                        class="my-4 btn hover:scale-[1.03] focus:tracking-wider">{{
                    $t('footer.btn-ok')
                }}</button>
                    <div v-else-if="error && showNotification()"
                        class="p-5 mx-auto mb-5 text-lightblack bg-lightorange rounded-simple w-fill">
                        {{ error }}
                    </div>
                </form>
            </div>
        </div>
        <span class="block py-4 pt-6 text-sm font-thin text-center">
            &copy; 2023 Lisa Cingolani.</span>
    </footer>
</template>