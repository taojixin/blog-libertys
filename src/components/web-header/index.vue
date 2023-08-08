<template>
  <header class="web-header" :style="{ backgroundImage: `url(${bgImgUrl})` }">
    <h2>{{ title }}</h2>
    <p>{{ sentense }}</p>
  </header>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
  sentense: {
    type: String,
  },
  bgImgUrl: {
    type: String,
  },
});
</script>

<style lang="less" scoped></style>
