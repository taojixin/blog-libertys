<template>
  <div class="message">
    <MessageReadme />
    <MessagePanel />
    <MessageItem />
  </div>
</template>

<script setup>
import MessageReadme from "./cpns/message-readme.vue";
import MessagePanel from "./cpns/message-panel.vue";
import MessageItem from "./cpns/message-item.vue";
</script>

<style lang="less" scoped>
.message {
  width: 80vw;
  margin: 20px auto;
  padding: 20px 20px;
  border: 1px solid black;
}
</style>
