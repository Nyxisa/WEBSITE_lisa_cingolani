<script setup lang="ts">
</script>

<template>
    <form action="#" class="flex flex-col justify-center lg:py-10 lg:flex-row lg:gap-10">
        <div class="flex-grow">
            <div class="my-8 text-sm">
                <input type="fname" id="fname" class="input" placeholder="First Name">
            </div>
            <div class="my-8 text-sm">
                <input type="lname" id="lname" class="input" placeholder="Last Name">
            </div>
            <div class="my-8 text-sm">
                <input type="email" id="email" class="input" placeholder="Email">
            </div>
        </div>
        <div class="flex-grow">
            <div class="text-sm lg:my-8">
                <input type="object" id="object" class="input" placeholder="Object">
            </div>
            <div class="my-8 text-sm">
                <textarea type="message" rows=2 id="message"
                    class="p-5 border-2 rounded-md input focus:border-4 focus:border-lightpurple"
                    placeholder="Write your message here"></textarea>
            </div>
        </div>
    </form>
    <div class="flex flex-col items-center justify-between lg:gap-10 lg:flex-row">
        <div class="flex items-center gap-4"> <input type="checkbox" id="terms" name="terms" />
            <span>I agree to share the provided information through this contact form.</span>
        </div>
        <button type="submit" class="mt-10 lg:mt-0 btn focus:translate-y-[1px] lg:text-xl hover:-translate-y-[1px]">Envoyer</button>
    </div>
</template>