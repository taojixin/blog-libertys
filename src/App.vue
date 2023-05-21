<template>
    <router-view />
    <!-- <Footer /> -->
</template>

<script setup>
import { RouterView } from 'vue-router'
import useResize from "./hooks/useResize"
import Footer from './components/footer/index.vue'

useResize()

</script>

<style scoped>
.home-bg {
  width: 100vw;
  height: 100vh;
}
</style>
