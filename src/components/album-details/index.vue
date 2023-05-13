<template>
  <transition name="album">
    <div class="album-details" v-show="isShow">
      <div
        class="first-floor"
        :style="{ backgroundImage: bgImage(album.phoneUrl[0]) }"
      >
        <span>{{ album.title }}</span>
        <p>{{ album.describe }}</p>
      </div>
      <div class="second-floor">
        <div class="grid">
          <template v-for="(item, index) in album.phoneUrl" :key="index">
            <div class="grid-item" @click="enlarge(item)">
              <img v-loadlazy="item" src="https://img.libertys.cn/blog/load1.gif"  />
            </div>
          </template>
        </div>
      </div>
      <!-- 遮罩层 -->
      <div class="mask" v-show="isMask" @click="isMask = !isMask">
        <img ref="maskImgRef" src="" alt="">
      </div>
    </div>
  </transition>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import usePhoneStore from "../../stores/phone";


import { ref, onUnmounted } from "vue";
const isShow = ref(false);

const timer = setTimeout(() => {
  isShow.value = true;
}, 0);
onUnmounted(() => {
  clearInterval(timer);
});

const route = useRoute();
const router = useRouter();

const phoneStore = usePhoneStore();
phoneStore.fetchPhoneMsg();
const { albumInfo } = storeToRefs(phoneStore);
const albumId = route.params.albumId;
const album = albumInfo.value[albumId - 1];

if (albumInfo.value.length === 0) {
  router.push("/phone");
}

function bgImage(src) {
  return `url(${src})`;
}

// 点击放大图片
const maskImgRef = ref(null)
const isMask = ref(false)
function enlarge(src) {
  maskImgRef.value.src = src
  isMask.value = true
}
</script>

<style lang="less" scoped>
.album-details {
  .second-floor {
    border: 1px solid black;
    width: 80vw;
    margin: 0 auto;
    .grid {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .grid-item {
        height: 200px;
        margin: 3px;
        border: 5px solid pink;
        &:hover {
          cursor: pointer;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .first-floor {
    // background: url("https://img.libertys.cn/blog/bg3.jpg") no-repeat;
    height: 40vh;
    width: 100vw;
    background-size: cover;
    background-position: 30% center;
    background-repeat: no-repeat;
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
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 20px;
    background-color: rgba(87, 78, 78, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
    }

    img {
      // width: 70%;
      // height: 60%;
      border: 1px solid black;
    }
  }
}

.album-enter-from,
.album-leave-to {
  filter: blur(10px);
  opacity: 0.5;
}

.album-enter-to,
.album-leave-from {
  filter: blur(0px);
  opacity: 1;
}

.album-enter-active,
.album-leave-active {
  transition: all 1s ease;
}
</style>
