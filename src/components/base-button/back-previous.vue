<template>
  <div class="back-previous" @click="this.$router.back()">
    <i class="iconfont icon-fanhui"></i>
    <!-- <span>返回</span> -->
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.back-previous {
  width: 100px;
  height: 50px;
  color: #f0f8ff;
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: rgba(125, 122, 122, 0.3);
  transition: all 0.5s;
  i {
    font-weight: bold;
    font-size: 20px;
    transition: all .5s;
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(125, 122, 122, 0.7);
    i {
      font-size: 30px;
    }
  }
}
@media (max-width: 749px) {
  .back-previous {
    width: 50px;
    height: 30px;
    top: 10px;
    right: 10px;
  }
}
</style>
