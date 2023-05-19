<template>
  <div class="life" v-show="isShow">
    <NavBar />
    <div class="first-floor">
      <span>关 于</span>
      <p>须知少时凌云志，曾许人间第一流!</p>
    </div>
    <div class="second-floor">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const isShow = ref(false);
onMounted(() => {
  isShow.value = true
})
</script>

<style lang="less" scoped>
.first-floor {
  background: url("https://img.libertys.cn/blog/bg6.jpg") no-repeat;
  height: 40vh;
  width: 100vw;
  background-size: cover;
  background-position: 30% center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(182, 174, 174);
  font-weight: bold;
  font-size: 40px;
  p {
    font-size: 14px;
    color: rgb(150, 147, 147);
  }
}

.life-enter-from,
.life-leave-to {
  filter: blur(10px);
  opacity: 0.5;
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
