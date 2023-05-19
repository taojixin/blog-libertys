<template>
  <transition name="about">
    <div class="about" v-show="isShow">
      <NavBar />
      <div class="first-floor">
        <span>关 于</span>
        <p>须知少时凌云志，曾许人间第一流!</p>
      </div>
      <div class="second-floor">
        <button @click="messageClick">点击挂载</button>
        <!-- <base-message /> -->
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onUnmounted, onMounted, getCurrentInstance } from "vue";
import Message from '../../components/base-message/message'

const isShow = ref(false);

const instance = getCurrentInstance();
onMounted(() => {
  isShow.value = true
  // instance.proxy.$message({type: "warn", text: "djfsla"})
});
function messageClick() {
  // instance.proxy.$message({ type: "warn", text: "djfsla" });
  Message({ type: "warn", text: "djfsla" })
}
</script>

<style lang="less" scoped>
.first-floor {
  background: url("https://img.libertys.cn/blog/bg3.jpg") no-repeat;
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
