<template>
  <div class="article-item">
    {{ articleItem.id }}
  </div>
</template>

<script setup>
import {ref} from "vue"
defineProps({
  articleItem: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="less" scoped>
.article-item {
  max-width: 500px;
  height: 200px;
  border: 1px solid black;
}
</style>