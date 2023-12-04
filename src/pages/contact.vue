<script setup lang="ts">
import { useHead } from '@unhead/vue'
useHead({
    title: 'Contact | Lisa Cingolani'
})
import ContactAnim from '@/components/ContactAnim.vue';
import ContactForm from '@/components/ContactForm.vue';

</script>

<template>
    <ContactAnim />
    <section class="margins lg:mt-[25px]">
        <h1 class="w-full mb-8 bg-black border-none lg:hidden btn-style">CONTACT</h1>
        <p class="md:text-lg max-w-[60ch]">Feel free to reach out to me through the contact form below, whether you have a
            project in mind, want to collaborate,
            or simply have a question. I'm looking forward to hearing from you!</p>
        <ContactForm />
    </section>
</template>