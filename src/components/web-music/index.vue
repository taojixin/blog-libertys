<template>
  <div class="web-music">
    <div class="play-box">
      <div class="music-img">
        <img src="https://img.libertys.cn/blog/avatar.jpg" alt="" />
      </div>
      <div class="btn-list">
        <i class="iconfont icon-shangyishoushangyige"></i>
        <i
          class="iconfont icon-zanting zanting"
          @click="playOpera"
          v-if="!isPlay"
        ></i>
        <i class="iconfont icon-zanting1 bofang" @click="playOpera" v-else></i>
        <i class="iconfont icon-xiayigexiayishou"></i>
        <i
          class="iconfont icon-24gf-playlistMusic4 music-list"
          @click="isExtend = !isExtend"
          :style="{ color: isExtend ? '#1ecd98' : '#a8a8a8' }"
        ></i>
        <i class="iconfont icon-cha cha"></i>
      </div>
    </div>
    <div class="song-list" v-show="isExtend">
      <template v-for="item in songs" :key="item.id">
        <div class="song">
          {{ item.songName }}-{{ item.singer }}
          <i
            class="iconfont icon-24gl-pause"
            v-if="isCurrentPlay"
            @click="someOnePlay(item.src)"
          ></i>
          <i
            class="iconfont icon-24gl-play"
            v-else
            @click="someOnePlay(item.src)"
          ></i>
        </div>
      </template>
    </div>
    <audio autoplay="autoplay" ref="musicRef" v-show="true">
      <source src="../../assets/苏打绿 - 他夏了夏天.mp3" />
    </audio>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isPlay = ref(false);
const isCurrentPlay = ref(false);
const isExtend = ref(false);
const musicRef = ref(null);
const songSrc = ref("");
const songs = ref([
  {
    id: 0,
    songName: "鱼玄机",
    singer: "锦零",
    src: "../../assets/锦零 - 鱼玄机.mp3",
  },
  {
    id: 2,
    songName: "他夏了夏天",
    singer: "绿苏打1",
    src: "../../assets/苏打绿 - 他夏了夏天.mp3",
  },
  {
    id: 3,
    songName: "他夏了夏天",
    singer: "绿苏打2",
    src: "../../assets/苏打绿 - 他夏了夏天.mp3",
  },
  {
    id: 4,
    songName: "他夏了夏天",
    singer: "绿苏打3",
    src: "../../assets/苏打绿 - 他夏了夏天.mp3",
  },
]);

function playOpera() {
  isPlay.value = !isPlay.value;
  if (isPlay.value) {
    musicRef.value.play();
  } else {
    musicRef.value.pause();
  }
}
function someOnePlay(src) {
  songSrc.value = src;
}
</script>

<style lang="less" scoped>
.web-music {
  position: fixed;
  top: 100px;
  right: 10px;
  z-index: 99;
  width: 300px;
  height: 80px;
  border-radius: 5px;
  background-color: white;

  .play-box {
    position: relative;
    height: 80px;
    background-color: white;
    z-index: 1;
    box-shadow: 0 1px 10px #a8a8a8;
    border-radius: 5px;
    .music-img {
      width: 80px;
      height: 80px;
      border-radius: 80px;
      border: 2px solid #1ecd98;
      position: absolute;
      top: -20px;
      left: 15px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 80px;
      }
    }
    .btn-list {
      width: 200px;
      height: 80px;
      position: absolute;
      right: 0;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      i {
        font-size: 30px;
        color: #a8a8a8;
        &:hover {
          cursor: pointer;
          color: #1ecd98;
        }
      }
      .bofang,
      .zanting {
        font-size: 35px;
        margin: 0 5px;
        color: #1ecd98;
      }
      .bofang {
        font-size: 38px;
      }
      .cha {
        position: absolute;
        right: 5px;
        top: 5px;
        font-size: 15px;
      }
      .music-list {
        margin-left: 10px;
        font-size: 25px;
      }
    }
  }
  .song-list {
    position: absolute;
    top: 70px;
    width: 300px;
    background-color: white;
    box-sizing: border-box;
    padding: 25px;
    .song {
      position: relative;
      margin: 5px 0;
      padding: 5px;
      i {
        position: absolute;
        right: 20px;
        display: none;
        &:hover {
          color: #1ecd98;
        }
      }
      &:hover {
        cursor: pointer;
        background-color: #b2ebd9;
        i {
          display: inline-block;
        }
      }
    }
  }
}
</style>
