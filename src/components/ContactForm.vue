<script lang="ts">
import { ref } from 'vue';

export default {
    setup() {
        const firstname = ref('');
        const lastname = ref('');
        const email = ref('');
        const object = ref('');
        const message = ref('');
        const error = ref('');
        const submitted = ref(false);

        const resetStates = () => {
            submitted.value = false;
            error.value = '';
        };

        const resetForm = () => {
            firstname.value = '';
            lastname.value = '';
            email.value = '';
            object.value = '';
            message.value = '';
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
                    body: JSON.stringify({ firstname: firstname.value, lastname: lastname.value, email: email.value, object: object.value, message: message.value })
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

        return {
            firstname,
            lastname,
            email,
            object,
            message,
            onSubmit,
            showNotification,
            errorMessage,
            resetStates,
            error
        };
    }
}
</script>

<template>
    <form @submit.prevent="onSubmit">
        <div class="flex flex-col justify-center lg:py-10 lg:flex-row lg:gap-10">
            <div class="flex-grow">
                <div class="my-8 text-sm">
                    <input type="text" v-model="firstname" id="firstname" class="input"
                        :placeholder="$t('contact.placeholder1')">
                </div>
                <div class="my-8 text-sm">
                    <input type="text" v-model="lastname" id="lastname" class="input"
                        :placeholder="$t('contact.placeholder2')">
                </div>
                <div class="my-8 text-sm">
                    <input type="email" v-model="email" id="email" class="input"
                        :placeholder="$t('contact.placeholder3')">
                </div>
            </div>
            <div class="flex-grow">
                <div class="text-sm lg:my-8">
                    <input type="text" v-model="object" id="object" class="input"
                        :placeholder="$t('contact.placeholder4')">
                </div>
                <div class="my-8 text-sm">
                    <textarea v-model="message" rows=2 id="message"
                        class="p-5 border rounded-md input lg:focus:border-4 focus:border-2 focus:border-lightpurple"
                        :placeholder="$t('contact.placeholder5')"></textarea>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center justify-between lg:gap-10 lg:flex-row">
            <div class="flex items-start gap-4 lg:items-center"> <input type="checkbox" id="terms" name="terms"
                    required />
                <span>{{ $t('contact.consent') }}</span>
            </div>
            <button type="submit" class="mt-10 lg:mt-0 btn font-itc hover:scale-[1.03] focus:tracking-wider lg:text-lg"
                aria-label="Submit">{{
                $t('footer.btn') }}</button>
        </div>

        <div v-if="showNotification()" class="mx-auto mt-10 text-center text-black lg:mt-20 rounded-simple w-fit">
            <div v-if="!error && showNotification()" class="p-4 px-10 mx-auto mb-5 bg-white rounded-simple w-fill">
                {{ $t('contact.success') }}
            </div>
            <div v-else-if="error && showNotification()"
                class="p-4 px-10 mx-auto mb-5 bg-lightorange rounded-simple w-fill">
                {{ error }}
            </div>
        </div>
    </form>
</template>
