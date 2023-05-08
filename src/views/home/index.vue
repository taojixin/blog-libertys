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
        </div>
        <div class="right">
          <div class="recommend">推 荐 文 章</div>
          <template v-for="(item, index) in aritcleList" :key="item.id">
            <article-item :articleItem="item" :artNum="index"></article-item>
          </template>
        </div>
      </div>
      <div class="third-floor">
        <Footer></Footer>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from "vue";
import Introduction from "./cpns/introduction.vue";
import Announcement from "./cpns/announcement.vue";
import ArticleItem from "../../components/article-item/index.vue";
import Footer from "../../components/footer/index.vue";
import useScreenStore from "../../stores/screen";
import { getAllArticles } from "../../services/index";

import Typed from "typed.js";
let aritcleList = ref([]);
const useScreen = useScreenStore();
const isHidden = useScreen.isSmall;
const isShow = ref(false);

const timer = setTimeout(() => {
  isShow.value = true;
}, 0);
onUnmounted(() => {
  clearInterval(timer);
});

// 请求文章数据
onMounted(async () => {
  await getAllArticles().then((res) => {
    console.log(res.data.result);
    aritcleList.value = res.data.result.map((item) => {
      item.imgUrl = "https://img.libertys.cn/background/1.jfif";
      return item;
    });
  });

  const options = {
    strings: ["Hello, world!", "Welcome to my website!"],
    typeSpeed: 100,
    loop: true,
  };
  new Typed(".typed", options);
});
</script>

<style lang="less" scoped>
.home {
  .second-floor {
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    .left {
      width: 300px;
    }
    .right {
      border: 1px solid pink;
      width: 1000px;
      position: relative;

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
  opacity: .5;
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
