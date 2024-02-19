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
        <div class="flex items-center w-full gap-4 mb-8">
            <h1 class="text-transparent whitespace-nowrap lg:hidden div-graphic font_thin">
                Contact
            </h1>
            <div class="w-0 h-[1px] anim-slide-in rounded-full mb-1 bg-lightwhite"></div>
        </div>
        <p class="md:text-lg max-w-[65ch] mb-2">{{ $t('contact.p1') }}</p>
        <p>{{ $t('contact.p2') }}</p>
        <ContactForm />
    </section>
</template>