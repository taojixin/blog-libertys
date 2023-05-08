<template>
  <transition name="about">
    <div class="about" v-show="isShow">
      <div class="first-floor"></div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onUnmounted } from "vue";
const isShow = ref(false);

const timer = setTimeout(() => {
  isShow.value = true;
}, 0);
onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style lang="less" scoped>
.first-floor {
  height: 40vh;
  width: 100vw;
  background: url("http://img.libertys.cn/blog/bg4.jpg") no-repeat;
  background-size: cover;
  background-position: 30% center;
}

.about-enter-from,
.about-leave-to {
  filter: blur(10px);
  opacity: 0.6;
}

.about-enter-to,
.about-leave-from {
  filter: blur(0px);
  opacity: 1;
}

.about-enter-active,
.about-leave-active {
  transition: all 1s ease;
}
</style>
