<template>
  <transition name="message">
    <div class="message" v-show="isShow">
      <div class="first-floor"></div>
      <div class="second-floor">
        <MessageReadme />
        <MessagePanel />
        <MessageItem />
      </div></div
  ></transition>
</template>

<script setup>
import { ref, onUnmounted } from "vue";
import MessageReadme from "./cpns/message-readme.vue";
import MessagePanel from "./cpns/message-panel.vue";
import MessageItem from "./cpns/message-item.vue";

const isShow = ref(false);

const timer = setTimeout(() => {
  isShow.value = true;
}, 0);
onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style lang="less" scoped>
.message {
  .first-floor {
    height: 40vh;
    width: 100vw;
    background: url("https://img.libertys.cn/blog/bg4.jpg") no-repeat;
    background-size: cover;
    background-position: 30% center;
  }
  .second-floor {
    width: 80vw;
    border: 1px solid black;
    margin: 20px auto;
    padding: 20px 20px;
  }
}
.message-enter-from,
.message-leave-to {
  filter: blur(10px);
  opacity: .5;
}

.message-enter-to,
.message-leave-from {
  filter: blur(0px);
  opacity: 1;
}

.message-enter-active,
.message-leave-active {
  transition: all 1s ease;
}
</style>
