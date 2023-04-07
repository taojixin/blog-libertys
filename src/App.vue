<template>
  <hello-visitor></hello-visitor>
  <nav-bar></nav-bar>
  <router-view />

</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/nav-bar/index.vue';
import HelloVisitor from './components/hello-visitor/index.vue'
import { onMounted } from 'vue';
import useResize from "./hooks/useResize"

useResize()

</script>

<style scoped>

</style>
