<template>
  <WebMusic />
  <router-view />
</template>

<script setup>
import { RouterView } from "vue-router";
import useResize from "./hooks/useResize";

import WebMusic from "./components/web-music/index.vue";

useResize();
</script>

<style scoped>
.home-bg {
  width: 100vw;
  height: 100vh;
}
</style>
