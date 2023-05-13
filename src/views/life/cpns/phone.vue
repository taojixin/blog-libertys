<template>
  <transition name="phone">
    <div class="phone" v-show="isShow">
      <div class="first-floor">
        <span>相 册</span>
        <p>须知少时凌云志，曾许人间第一流!</p>
      </div>
      <div class="second-floor">
        <template v-for="item in albumInfo" :key="item.id">
          <div
            class="album hvr-radial-out"
            :style="{ backgroundImage: bgUrl(item.phoneUrl[0]) }"
            @click="albumDetails(item.id)"
          >
            <div class="title">{{ item.title }}</div>
            <span class="describe">{{ item.describe }}</span>
          </div>
        </template>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onUnmounted } from "vue";
import {useRouter} from 'vue-router'
import {storeToRefs} from 'pinia'
import usePhoneStore from "../../../stores/phone";
const isShow = ref(false);

const router = useRouter()

// 发送请求获取相册信息
const phoneStore = usePhoneStore()
phoneStore.fetchPhoneMsg()
// 获取store数据
const {albumInfo} = storeToRefs(phoneStore)

// 背景图片
function bgUrl(path) {
  return `url(${path})`;
}
// 点击跳转
function albumDetails(albumId) {
  router.push(`/albumdetails/${albumId}`)
}

const timer = setTimeout(() => {
  isShow.value = true;
}, 0);
onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style lang="less" scoped>
.phone {
  .first-floor {
    background: url("https://img.libertys.cn/blog/bg5.jpg") no-repeat;
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
  .second-floor {
    width: 70vw;
    // height: 1000px;
    background-color: white;
    margin: 0 auto;
    // padding: 20px;
    border: 1px solid pink;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    .album {
      border: 1px solid gray;
      position: relative;
      width: 500px;
      height: 300px;
      margin: 10px;
      border-radius: 10px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      transition: all .3s;
      &:hover {
        cursor: pointer;

        .describe {
          top: 50%;
          transform: translate(-50% ,  50%);
        }
      }

      .title {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #a913c0;
        font-weight: bold;
        font-size: 40px;
        text-shadow: 3px 3px 3px #dba8df;
      }
      .describe {
        position: absolute;
        top: 50%;
        left: 50%;
        font-weight: bold;
        color: #dba8df;
        transition: all .5s;
        transform: translate(-50%, 300px);
      }
    }
  }
}

.phone-enter-from,
.phone-leave-to {
  filter: blur(10px);
  opacity: 0.5;
}

.phone-enter-to,
.phone-leave-from {
  filter: blur(0px);
  opacity: 1;
}

.phone-enter-active,
.phone-leave-active {
  transition: all 1s ease;
}


/* Radial Out */
.hvr-radial-out {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
  background: #e1e1e1;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.hvr-radial-out:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(219, 168, 223, .3);
  border-radius: 100%;
  -webkit-transform: scale(0);
  transform: scale(0);
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-radial-out:hover, .hvr-radial-out:focus, .hvr-radial-out:active {
  color: white;
}
.hvr-radial-out:hover:before, .hvr-radial-out:focus:before, .hvr-radial-out:active:before {
  -webkit-transform: scale(2);
  transform: scale(2);
}
</style>
