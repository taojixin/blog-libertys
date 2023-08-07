<template>
  <div class="home-content">
    <div class="left" v-if="!isHidden">
      <Introduction />
      <Announcement />
      <div class="fixed" :class="{ positionfixed: isFixed }">
        <AllLabels />
        <WebsiteInfo />
      </div>
    </div>
    <div class="right">
      <div class="recommend">推 荐 文 章 {{ clientWidth }}</div>
      <template v-for="(item, index) in aritcleList" :key="item.id">
        <article-item
          :articleItem="item"
          :itemIndex="index"
          :artNum="index"
        ></article-item>
      </template>
      <div class="more" @click="loadMore" v-show="loadHidden">点击加载更多</div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";

import useScreenStore from "../../../stores/screen";
import useResize from "../../../hooks/useResize";
import useHomeStore from "../../../stores/home";
import useScroll from "../../../hooks/useScroll";

import Introduction from "./introduction.vue";
import Announcement from "./announcement.vue";
import AllLabels from "./all-labels.vue";
import WebsiteInfo from "./website-info.vue";

import ArticleItem from "../../../components/article-item/index.vue";

defineProps({
  aritcleList: {
    type: Array,
  },
});

const { clientWidth } = useResize();
const useScreen = useScreenStore();
const useHome = useHomeStore();
const isHidden = useScreen.isSmall; // 页面宽度缩小到一定程度时隐藏左侧内容

const { loadHidden, aritcleList } = storeToRefs(useHome);
const count = ref(5);
const offset = ref(0);
function loadMore() {
  offset.value += 5;
  useHome.fetchRecommendArticles(count.value, offset.value);
}

// 监听滚动固定左侧内容
const isFixed = ref(false);
let { scrollTop } = useScroll();
watch(scrollTop, (newValue) => {
  if (newValue > 1480) {
    isFixed.value = true;
  } else {
    isFixed.value = false;
  }
});
</script>

<style lang="less" scoped>
.positionfixed {
  position: fixed;
  transform: translate(0, 40px);
  left: 60px;
  top: 0;
}
.home-content {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  .left {
    width: 300px;
    margin-left: 60px;

    .fixed {
      transition: all 2s;
    }
  }
  .right {
    width: 1000px;
    position: relative;
    margin-right: 5vw;
    padding-bottom: 50px;

    .recommend {
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translate(-50%, 0);
      height: 50px;
      font-size: 30px;
      font-weight: bold;
      color: rgb(120, 130, 138);
      text-shadow: 3px 3px 3px rgb(222, 175, 175);
    }

    .more {
      position: absolute;
      left: 50%;
      bottom: 10px;
      transform: translate(-50%, 0);
      color: rgb(231, 15, 90);
      background-color: rgba(231, 15, 90, 0.2);
      padding: 5px;
      border-radius: 10px;
      transition: all 0.5s;
      &:hover {
        cursor: pointer;
        background-color: rgba(231, 15, 90, 0.5);
      }
    }
  }
}
@media (max-width: 749px) {
  .home-content {
    .left {
      display: none;
    }
    .right {
      margin-right: 0;
    }
  }
}
</style>
