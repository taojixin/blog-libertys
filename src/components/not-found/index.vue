<template>
  <div class="not-found">
    <span class="content">🚧 🚧 🚧 页面施工中，欢迎稍后回来！🚧 🚧 🚧</span>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.not-found {
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    font-size: 40px;
    user-select: none;
  }
}
</style>