<template>
  <div class="lover" ref="loverRef"></div>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from "vue";
import { startSakura, stopp } from "../../../utils/sakura";

const loverRef = ref(null);
onMounted(() => {
  startSakura();
});
onUnmounted(() => {
  stopp();
});
</script>

<style lang="less" scoped></style>
