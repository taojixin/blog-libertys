<template>
  <div class="home" ref="homeel">
    <template v-for="item in 1000" :key="item">
      <ul>
        <li>{{ item }}</li>
      </ul>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useScroll from "../../hooks/useScroll";
const homeel = ref(null);
useScroll(homeel);
</script>

<style lang="less" scoped>
.home {
  height: calc(100vh - 60px);
  overflow-y: auto;
}
</style>
