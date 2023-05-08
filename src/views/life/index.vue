<template>
  <transition name="life">
    <div class="life" v-show="isShow">
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
  background: url("http://img.libertys.cn/blog/bg6.jpg") no-repeat;
  background-size: cover;
  background-position: 30% center;
}

.life-enter-from,
.life-leave-to {
  filter: blur(10px);
  opacity: .5;
}

.life-enter-to,
.life-leave-from {
  filter: blur(0px);
  opacity: 1;
}

.life-enter-active,
.life-leave-active {
  transition: all 1s ease;
}
</style>
