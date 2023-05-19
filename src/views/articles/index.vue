<template>
  <transition name="articles">
    <div class="articles" v-show="isShow">
      <NavBar />
      <div class="first-floor"></div>
      <!-- <template v-for="item in articles" :key="item.id">
      <ArticleItem :article-item="item"></ArticleItem>
    </template> -->
      <div class="word-cloud">
        <div id="canvas" class="canvas"></div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { onBeforeMount, onMounted, onUnmounted, reactive, ref } from "vue";
import ArticleItem from "./cpns/article-item.vue";
import { getArticles } from "../../services";
import WordCloud from "wordcloud";

const isShow = ref(false);

const timer2 = setTimeout(() => {
  WordCloud(document.getElementById("canvas"), options);
}, 0);
onUnmounted(() => {
  clearInterval(timer2);
});

let articles = ref([]);
let wordData = [
  ["javaScript", 12],
  ["Java", 8],
  ["生活", 20],
  ["杂谈", 17],
  ["vue", 13],
  ["node", 12],
];
const options = eval({
  list: wordData, //或者[['各位观众',45],['词云', 21],['来啦!!!',13]],只要格式满足这样都可以
  gridSize: 1, // 密集程度 数字越小越密集
  weightFactor: 1, // 字体大小=原始大小*weightFactor
  // maxFontSize: 12, //最大字号
  // minFontSize: 6, //最小字号
  fontWeight: "normal", //字体粗细
  fontFamily: "Times, serif", // 字体
  color: "random-light", // 字体颜色 'random-dark' 或者 'random-light'
  backgroundColor: "white", // 背景颜色
  rotateRatio: 1, // 字体倾斜(旋转)概率，1代表总是倾斜(旋转)
  gridSize: 20, // 越大，词与词之间间距越大
  click: function (item, dimension, event) {
    console.log(item, dimension, event);
  },
  weightFactor: function (size) {
    return size * 4;
  },
});
onMounted(() => {
  isShow.value = true
});

// onMounted(async () => {
//   await getArticles().then((res) => {
//     articles.value = res.data.result;
//   console.log(res.data.result);
//   });
// });
</script>

<style lang="less" scoped>
.articles {
  // margin-top: 60px;
  width: 100vw;
  height: 100vh;

  .first-floor {
    height: 40vh;
    background: url("https://img.libertys.cn/blog/bg7.jpg") no-repeat;
    background-size: cover;
    background-position: 30% center;
    border: 1px solid black;
  }

  .word-cloud {
    height: 300px;
    width: 80vw;
    border: 1px solid pink;
    display: flex;
    justify-content: center;
    align-items: center;

    .canvas {
      border: 1px solid black;
      width: 100%;
      height: 100%;
      // cursor: pointer;
      // width: 200px;
      // height: 100px;
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
