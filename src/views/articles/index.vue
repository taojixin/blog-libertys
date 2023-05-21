<template>
  <transition name="articles">
    <div class="articles" v-show="isShow">
      <NavBar />
      <div class="first-floor">
        <span>文章</span>
        <p>须知少时凌云志，曾许人间第一流!</p>
      </div>
      <div class="second-floor">
        <div class="left">
          <!-- 标签列表 -->
          <labels-list />
          <div class="new-arts">最新文章</div>
          <!-- 文章列表 -->
          <template v-for="(item, index) in aritcleList" :key="item.id">
            <article-item
              :articleItem="item"
              :itemIndex="index"
              :artNum="index"
            ></article-item>
          </template>
        </div>
        <div class="right">
          <RightBox />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getArticles } from "../../services";

import ArticleItem from "../../components/article-item/index.vue";
import LabelsList from "./cpns/labels-list.vue";
import RightBox from "./cpns/right-box.vue";

const isShow = ref(false);

// 请求文章数据
let aritcleList = ref([]);
const count = ref(5);
const offset = ref(0);
onMounted(async () => {
  // 过渡动画
  isShow.value = true;
  // 获取数据
  await getArticles(count.value, offset.value).then((res) => {
    aritcleList.value = res.data.endResult.map((item) => {
      item.time =
        item.time.split("T")[0] + " " + item.time.split("T")[1].substr(0, 8);
      return item;
    });
  });
});
</script>

<style lang="less" scoped>
.positionfixed {
  position: fixed;
  right: calc(10vw - 10px);
  top: 35px;
  transform: translate(0, 10px);
}

.articles {
  width: 100vw;
  height: 100vh;
  .first-floor {
    background: url("https://img.libertys.cn/blog/bg7.jpg") no-repeat;
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
    height: 1000px;
    margin: 20px 10vw;
    display: flex;

    .left {
      flex: 1;
      background-color: white;
      border-radius: 10px;
      margin-right: 10px;
      padding: 0 10px;
      .new-arts {
        // border: 1px solid black;
        margin-bottom: -30px;
        text-align: center;
        height: 100px;
        line-height: 100px;
        font-size: 30px;
        font-weight: bold;
        color: rgb(120, 130, 138);
        text-shadow: 3px 3px 3px rgb(222, 175, 175);
      }
    }
    .right {
      width: 300px;
      height: 100%;
      border-radius: 10px;
    }
  }
}

@media (max-width: 749px) {
  .articles {
    .second-floor {
      margin: 20px 2vw;
      .left {
        padding: 0 5px;
        margin-top: -10px;
        .new-arts {
          height: 80px;
          line-height: 80px;
          margin-bottom: -30px;
        }
      }
      .right {
        display: none;
      }
    }
  }
}

.articles-enter-from,
.articles-leave-to {
  filter: blur(10px);
  opacity: 0.6;
}

.articles-enter-to,
.articles-leave-from {
  filter: blur(0px);
  opacity: 1;
}

.articles-enter-active,
.articles-leave-active {
  transition: all 1s ease;
}
</style>
