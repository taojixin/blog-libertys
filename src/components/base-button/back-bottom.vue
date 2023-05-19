<template>
  <div class="back-bottom" @click="backBottom">
    <i class="iconfont icon-xiangxia"></i>
  </div>
</template>

<script setup>
function backBottom() {
  window.scrollTo({
    top: document.documentElement.offsetHeight, //回到底部
    behavior: "smooth"
  });
}
</script>

<style lang="less" scoped>
.back-bottom {
  width: 100px;
  height: 50px;
  color: #f0f8ff;
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: rgba(125, 122, 122, 0.3);
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    background-color: rgba(125, 122, 122, 0.7);
    i {
      font-size: 30px;
    }
  }
}
@media (max-width: 749px) {
  .back-bottom {
    width: 50px;
    height: 30px;
    bottom: 10px;
    right: 10px;
  }
}
</style>