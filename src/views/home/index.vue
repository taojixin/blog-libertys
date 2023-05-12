<template>
  <transition name="home">
    <div class="home" v-show="isShow">
      <div class="first-floor">
        <div class="box">
          <span class="typed"></span> <i class="iconfont icon-xiangxia"></i>
        </div>
      </div>
      <div class="second-floor">
        <div class="left" v-if="!isHidden">
          <introduction></introduction>
          <announcement></announcement>
          <div class="fixed" :class="{ positionfixed: isFixed }">
            <all-labels></all-labels>
            <website-info></website-info>
          </div>
        </div>
        <div class="right">
          <div class="recommend">推 荐 文 章</div>
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
      <div class="third-floor">
        <Footer></Footer>
      </div>
      <!-- 你好！ -->
      <HelloVisitor></HelloVisitor>
    </div>
  </transition>
</template>

<script setup>
import { onMounted, ref, watch, onUnmounted } from "vue";
import Typed from "typed.js";

import useScreenStore from "../../stores/screen";
import useScroll from "../../hooks/useScroll";
import { getArticles } from "../../services/index";

import HelloVisitor from "../../components/hello-visitor/index.vue";
import Introduction from "./cpns/introduction.vue";
import Announcement from "./cpns/announcement.vue";
import AllLabels from "./cpns/all-labels.vue";
import WebsiteInfo from "./cpns/website-info.vue";
import ArticleItem from "../../components/article-item/index.vue";
import Footer from "../../components/footer/index.vue";

const useScreen = useScreenStore();
const isHidden = useScreen.isSmall; // 页面宽度缩小到一定程度时隐藏左侧内容

// 首次加载动画
const isShow = ref(false);
const timer = setTimeout(() => {
  isShow.value = true;
}, 0);
onUnmounted(() => {
  clearInterval(timer);
});

// 请求文章数据
let aritcleList = ref([]);
const count = ref(5);
const offset = ref(0);
onMounted(async () => {
  await getArticles(count.value, offset.value).then((res) => {
    console.log(res.data.endResult);
    aritcleList.value = res.data.endResult.map((item) => {
      item.time =
        item.time.split("T")[0] + " " + item.time.split("T")[1].substr(0, 8);
      return item;
    });
  });
  // 打字动画
  const options = {
    strings: ["Hello, world!", "Welcome to my website!"],
    typeSpeed: 100,
    loop: true,
  };
  new Typed(".typed", options);
});

// 加载更多
const loadHidden = ref(true);
function loadMore() {
  offset.value += 5;
  getArticles(count.value, offset.value).then((res) => {
    if (res.data.endResult.length === 0) {
      loadHidden.value = false;
    }
    const moreArt = res.data.endResult.map((item) => {
      item.time =
        item.time.split("T")[0] + " " + item.time.split("T")[1].substr(0, 8);
      return item;
    });
    aritcleList.value.push(...moreArt);
  });
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
.home {
  .second-floor {
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
      margin-right: 60px;

      .recommend {
        position: absolute;
        top: -20px;
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
        background-color: rgba(231, 15, 90, .2);
        padding: 5px;
        border-radius: 10px;
        transition: all 0.5s;
        &:hover {
          cursor: pointer;
          background-color: rgba(231, 15, 90, .5);
        }
      }
    }
  }

  .first-floor {
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
}

@media (max-width: 749px) {
  .home {
    .second-floor {
      .left {
        display: none;
      }
    }
    .first-floor {
      font-size: 25px;
    }
  }
}
.home-enter-from,
.home-leave-to {
  filter: blur(10px);
  opacity: 0.5;
}

.home-enter-to,
.home-leave-from {
  filter: blur(0px);
  opacity: 1;
}

.home-enter-active,
.home-leave-active {
  transition: all 1s ease;
}
</style>
