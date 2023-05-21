<template>
  <div class="life" v-show="isShow">
    <NavBar />
    <div class="first-floor">
      <span>生 活</span>
      <p>须知少时凌云志，曾许人间第一流!</p>
    </div>
    <div class="second-floor">
      <div class="left" v-if="!isHidden">
        <div class="left-box">
          <div class="info">
            <!-- <div class="bg"></div> -->
            <img src="../../assets/avatar.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import useScreenStore from "../../stores/screen";

const useScreen = useScreenStore();
const isHidden = useScreen.isSmall;

const isShow = ref(false);
onMounted(() => {
  isShow.value = true;
});
</script>

<style lang="less" scoped>
.life {
  .second-floor {
    border: 1px solid black;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    .left {
      width: 200px;
      height: 500px;
      margin: 0 20px 0 10vw;
      background-color: aqua;
      .left-box {
        width: 100%;
        border: 1px solid red;
        .info {
          border: 1px solid black;
          position: relative;
          height: 200px;
          overflow: hidden;
          background-color: #d4d4d4;
          .bg {
            width: 100%;
            height: 200px;
            position: absolute;
            left: 0;
            top: 0;
            background-image: url(http://img.libertys.cn/blog/sprinkle_flowers.gif);
            background-size: cover;
            background-repeat: no-repeat;
          }
          img {
            position: absolute;
            left: 50%;
            transform: translate(-50%, 0);
            width: 80px;
            height: 80px;
            border-radius: 80px;
          }
        }
      }
    }
    .right {
      flex: 1;
      margin-right: 10vw;
      background-color: aliceblue;
    }
  }
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
