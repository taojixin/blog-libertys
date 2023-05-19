<template>
  <div class="back-top" @click="backTop">
    <i class="iconfont icon-xiangshang"></i>
  </div>
</template>

<script setup>
function backTop() {
  window.scrollTo({
    top: 0, //回到顶部
    behavior: "smooth",
  });
}
</script>

<style lang="less" scoped>
.back-top {
  width: 100px;
  height: 50px;
  color: #f0f8ff;
  position: fixed;
  bottom: 80px;
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
  .back-top {
    width: 50px;
    height: 30px;
    bottom: 50px;
    right: 10px;
  }
}
</style>
