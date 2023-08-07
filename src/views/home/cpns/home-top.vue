<template>
  <div class="home-top">
    <div class="box">
      <span class="typed"></span> <i class="iconfont icon-xiangxia"></i>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Typed from "typed.js";

onMounted(() => {
  // 打字动画
  const options = {
    strings: ["Hello, world!", "Welcome to my website!"],
    typeSpeed: 100,
    loop: true,
  };
  new Typed(".typed", options);
});
</script>

<style lang="less" scoped>
.home-top {
  height: 100vh;
  width: 100vw;
  background: url("https://img.libertys.cn/blog/homebg.png") no-repeat;
  background-position: 30% center;
  overflow: hidden;
  background-size: cover;
  position: relative;
  // 中间文字
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(234, 227, 225, 0.7);
  font-size: 40px;
  font-weight: bold;
  text-shadow: 3px 3px 3px gray;

  i {
    font-size: 30px;
    position: absolute;
    bottom: 10vh;
    left: 50%;
    color: aliceblue;
    transform: translate(-50%, 0);
    animation: move-bottom 1.5s ease infinite backwards;
    @keyframes move-bottom {
      0% {
        bottom: 15vh;
      }
      100% {
        bottom: 3vh;
      }
    }
  }
}

@media (max-width: 749px) {
  .home-top {
    font-size: 25px;
  }
}
</style>
