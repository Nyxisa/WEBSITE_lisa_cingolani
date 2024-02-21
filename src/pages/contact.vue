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
    <section class="margins lg:mt-[25px] pb-8">
        <div class="flex items-center w-full gap-4 mb-8">
            <h1 class="text-transparent normal-case whitespace-nowrap lg:hidden div-graphic font_thin">
                Contact
            </h1>
            <div class="w-0 h-[1px] anim-slide-in rounded-full mb-1 bg-lightwhite"></div>
        </div>
        <div class="gap-12 lg:flex">
            <p class="md:text-lg lg:w-1/2 max-w-[65ch] mb-2">{{ $t('contact.p1') }}</p>
            <p class="md:text-lg lg:w-1/2 max-w-[65ch] mb-2">{{ $t('contact.p2') }}</p>
        </div>
        <ContactForm />
    </section>
</template>