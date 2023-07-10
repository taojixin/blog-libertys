<template>
  <div class="shortcut-btn">
    <div class="back-top btn" @click="backTop" v-show="isScroll">
      <i class="iconfont icon-xiangshang"></i>
    </div>
    <div class="back-previous btn" @click="backPrevious" v-show="isBack">
      <i class="iconfont icon-fanhui"></i>
    </div>
    <div class="back-bottom btn" @click="backBottom" v-show="isScroll">
      <i class="iconfont icon-xiangxia"></i>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isBack: {
    type: Boolean,
    default: true,
  },
  isScroll: {
    type: Boolean,
    default: true,
  },
})
function backBottom() {
  window.scrollTo({
    top: document.documentElement.offsetHeight, //回到底部
    behavior: "smooth",
  });
}
function backTop() {
  window.scrollTo({
    top: 0, //回到顶部
    behavior: "smooth",
  });
}
function backPrevious() {
  window.history.back()
}
</script>

<style lang="less" scoped>
.shortcut-btn {
  position: fixed;
    right: 0;
    bottom: 0;

  .btn {
    width: 80px;
    height: 50px;
    color: #f0f8ff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: rgba(125, 122, 122, 0.3);
    transition: all 0.5s;
    margin: 10px;
    i {
      transition: all 0.5s;
    }
    &:hover {
      cursor: pointer;
      background-color: rgba(125, 122, 122, 0.7);
      i {
        font-size: 30px;
      }
    }
  }
}
@media (max-width: 749px) {
  .shortcut-btn {
    right: 0;
    bottom: 0;
    .btn {
      width: 50px;
      height: 30px;
      bottom: 50px;
      right: 10px;
    }
  }
}
</style>
