<script setup lang="ts">
</script>

<template>
    <form action="#" class="flex flex-col justify-center lg:py-10 lg:flex-row lg:gap-10">
        <div class="flex-grow">
            <div class="my-8 text-sm">
                <input type="fname" id="fname" class="input" :placeholder="$t('contact.placeholder1')">
            </div>
            <div class="my-8 text-sm">
                <input type="lname" id="lname" class="input" :placeholder="$t('contact.placeholder2')">
            </div>
            <div class="my-8 text-sm">
                <input type="email" id="email" class="input" :placeholder="$t('contact.placeholder3')">
            </div>
        </div>
        <div class="flex-grow">
            <div class="text-sm lg:my-8">
                <input type="object" id="object" class="input" :placeholder="$t('contact.placeholder4')">
            </div>
            <div class="my-8 text-sm">
                <textarea type="message" rows=2 id="message"
                    class="p-5 border rounded-md input focus:border-4 focus:border-lightpurple"
                    :placeholder="$t('contact.placeholder5')"></textarea>
            </div>
        </div>
    </form>
    <div class="flex flex-col items-center justify-between lg:gap-10 lg:flex-row">
        <div class="flex items-start gap-4 lg:items-center"> <input type="checkbox" id="terms" name="terms" />
            <span>{{ $t('contact.consent') }}</span>
        </div>
        <button type="submit"
            class="mt-10 lg:mt-0 btn font-itc focus:translate-y-[1px] lg:text-xl hover:-translate-y-[1px]">{{
                $t('footer.btn') }}</button>
    </div>
</template>