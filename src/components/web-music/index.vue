<template>
  <div class="web-music" v-if="isMusicPlay">
    <div class="play-box">
      <!-- 转动歌曲图片 -->
      <div class="music-img">
        <img
          src="https://libertys.oss-cn-chengdu.aliyuncs.com/blog/avatar.jpg"
          alt=""
        />
      </div>
      <!-- 操作按钮 -->
      <div class="btn-list">
        <i
          class="iconfont icon-shangyishoushangyige"
          @click="nextOrPrevious(true)"
        ></i>
        <i
          class="iconfont icon-zanting zanting"
          @click="playOpera"
          v-if="!isPlay"
        ></i>
        <i class="iconfont icon-zanting1 bofang" @click="playOpera" v-else></i>
        <i
          class="iconfont icon-xiayigexiayishou"
          @click="nextOrPrevious(false)"
        ></i>
        <i
          class="iconfont icon-24gf-playlistMusic4 music-list"
          @click="isExtend = !isExtend"
          :style="{ color: isExtend ? '#1ecd98' : '#a8a8a8' }"
        ></i>
        <i
          class="iconfont icon-cha cha"
          @click="isMusicPlay = !isMusicPlay"
        ></i>
      </div>
    </div>
    <!-- 歌曲列表 -->
    <div class="song-list" v-show="isExtend">
      <template v-for="item in songs" :key="item.id">
        <div class="song">
          {{ item.songName }}-{{ item.singer }}
          <i
            class="iconfont icon-24gl-pause"
            v-if="currentMusicId === item.id && isPlay"
            @click="someOnePlay(item)"
          ></i>
          <i
            class="iconfont icon-24gl-play"
            v-else
            @click="someOnePlay(item)"
          ></i>
        </div>
      </template>
    </div>
    <audio autoplay="autoplay" ref="musicRef" v-show="true">
      <source :src="songSrc" />
    </audio>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isMusicPlay = ref(true);
const isPlay = ref(false); // 是否正在播放
const currentMusicId = ref(0); // 正在播放的歌曲id
const isExtend = ref(false); // 播放列表是否展开
const musicRef = ref(null); // 播放器实例
const songSrc = ref(
  "https://libertys.oss-cn-chengdu.aliyuncs.com/test/%E9%94%A6%E9%9B%B6%20-%20%E9%B1%BC%E7%8E%84%E6%9C%BA.mp3"
);
const songs = ref([
  {
    id: 0,
    songName: "鱼玄机",
    singer: "锦零",
    src: "https://libertys.oss-cn-chengdu.aliyuncs.com/test/%E9%94%A6%E9%9B%B6%20-%20%E9%B1%BC%E7%8E%84%E6%9C%BA.mp3",
  },
  {
    id: 1,
    songName: "他夏了夏天",
    singer: "绿苏打",
    src: "https://libertys.oss-cn-chengdu.aliyuncs.com/test/%E8%8B%8F%E6%89%93%E7%BB%BF%20-%20%E4%BB%96%E5%A4%8F%E4%BA%86%E5%A4%8F%E5%A4%A9.mp3",
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
function someOnePlay(item) {
  if (currentMusicId.value === item.id && isPlay.value) {
    isPlay.value = false;
    currentMusicId.value = item.id;
    musicRef.value.pause();
  } else {
    isPlay.value = true;
    currentMusicId.value = item.id;
    songSrc.value = item.src;
    musicRef.value.load();
  }
}
function nextOrPrevious(booleanValue) {
  console.log(currentMusicId.value);
  isPlay.value = true;
  if (booleanValue) {
    if (currentMusicId.value > 0) {
      currentMusicId.value -= 1;
      songSrc.value = songs.value[currentMusicId.value].src;
      musicRef.value.load();
    } else {
      currentMusicId.value = songs.value.length - 1;
      songSrc.value = songs.value[currentMusicId.value].src;
      musicRef.value.load();
    }
  } else {
    if (currentMusicId.value < songs.value.length - 1) {
      currentMusicId.value += 1;
      songSrc.value = songs.value[currentMusicId.value].src;
      musicRef.value.load();
    } else {
      currentMusicId.value = 0;
      songSrc.value = songs.value[currentMusicId.value].src;
      musicRef.value.load();
    }
  }
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
