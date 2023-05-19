<template>
  <transition name="message">
    <div class="base-message" :style="style[type]" v-show="visible">
      <i class="iconfont" :class="[style[type].icon]"></i>
      <span class="text">{{ text }}</span>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from "vue";

defineProps({
  text: {
    type: String,
    default: "警告!"
  },
  type: {
    type: String,
    default: "warn"
  }
})

const style = {
  warn: {
    icon: "icon-jinggao",
    color: "#E6A23C",
    backgroundColor: "rgb(253, 246, 236)",
    borderColor: "rgb(250, 236, 216)",
  },
  error: {
    icon: "icon-shibai",
    color: "#F56C6C",
    backgroundColor: "rgb(254, 240, 240)",
    borderColor: "rgb(253, 226, 226)",
  },
  success: {
    icon: "icon-icon-check-solid",
    color: "#67C23A",
    backgroundColor: "rgb(240, 249, 235)",
    borderColor: "rgb(225, 243, 216)",
  },
};

// 组件默认隐藏，挂载完毕后显示
const visible = ref(false);
onMounted(() => {
  visible.value = true
})

// let timer = null
// clearTimeout(timer)
// timer = setTimeout(() => {
//   visible.value = false
// }, 2000)
</script>

<style lang="less" scoped>
.base-message {
  position: fixed;
  top: 25px;
  left: 50%;
  transform: translate(-50%, 25px);
  height: 50px;
  padding: 5px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: rgb(20, 213, 43);
  z-index: 99;

  i {
    margin-right: 5px;
  }
}
.message-enter-from,
.message-leave-to {
  transform: translate(-50%, 0);
  opacity: 0;
}

.message-enter-to,
.message-leave-from {
  transform: translate(-50%, 25px);
  opacity: 1;
}

.message-enter-active,
.message-leave-active {
  transition: all 1s ease;
}
</style>
