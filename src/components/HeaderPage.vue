<script setup lang="ts">
import { RouterLink } from 'vue-router'

</script>
<template>
    <header class="header">
        <div class="container">
            <div class="logo">
                <RouterLink to=""><img src="../components/icons/logo.svg" alt="Lisa Cingolani's logo"></RouterLink>
            </div>
            <h1>Lisa Cingolani | Portfolio</h1>
            <nav class="navbar">
                <ul class="font">
                    <li class="menu-item">
                        <RouterLink class="menu-link" to="/portfolio">Portfolio</RouterLink>
                    </li>
                    <li class="menu-item">
                        <RouterLink class="menu-link" to="/about">About</RouterLink>
                    </li>
                    <li class="menu-item">
                        <RouterLink class="menu-link" to="/web3">WEB 3</RouterLink>
                        <ul>
                            <li>
                                <Routerlink class="menu-link-2" to="">Animations</Routerlink>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item">
                        <RouterLink class="menu-link" to="/web5">WEB 5</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>