<template>
  <div class="top-navbar">
    <h1>Libertys</h1>
    <div class="nav" v-if="!useScreen.isSmall">
      <template v-for="item in navList" :key="item.id">
        <span class="nav-item" @click="goTo(item.path)">
          <i :class="item.iconClass"></i>
          {{ item.text }}</span>
      </template>
    </div>
    <div class="samll-nav" v-else>
      <i class="iconfont icon-xiangxia"></i>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import useScreenStore from '../../stores/screen';

const useScreen = useScreenStore();
const router = useRouter();

// 导航列表
const navList = [
  {
    id: 0,
    path: "home",
    text: "首页",
    iconClass: "iconfont icon-shouyefill size",
  },
  {
    id: 1,
    path: "articles",
    text: "文章",
    iconClass: "iconfont icon-16 size",
  },
  {
    id: 2,
    path: "collections",
    text: "收藏",
    iconClass: "iconfont icon-shoucangjia size",
  },
  {
    id: 3,
    path: "life",
    text: "生活",
    iconClass: "iconfont icon-icon size",
  },
  {
    id: 4,
    path: "message",
    text: "留言",
    iconClass: "iconfont icon-liuyanfill size",
  },
  {
    id: 5,
    path: "about",
    text: "关于",
    iconClass: "iconfont icon-guanyu size",
  },
];

function goTo(path) {
    router.push("/" + path)
}
</script>

<style lang="less" scoped>
.top-navbar {
  width: 100vw;
  height: 60px;
  line-height: 60px;
  // border: 1px solid red;
  display: flex;
  justify-content: space-between;

  h1 {
    margin: 0;
    padding-left: 20px;
  }

  .nav {
    height: 60px;
    display: flex;
    // justify-content: space-around;
    border: 1px solid blue;

    .nav-item {
      width: 80px;
      border: 1px solid pink;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
