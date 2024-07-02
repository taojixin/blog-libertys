<template>
  <div class="right">
    <div class="article-right" :class="{ positionfixed: isFied }">
      <div class="look">
        <img
          class="lookagain"
          src="https://libertys.oss-cn-chengdu.aliyuncs.com/blog/lookagain.gif"
          alt=""
        />
        <div class="avatar"></div>
        <div class="info">
          <div class="item">
            <span>文章</span>
            <span>54</span>
          </div>
          <div class="item">
            <span>标签</span>
            <span>24</span>
          </div>
        </div>
      </div>
      <div class="word-cloud">
        <div id="canvas" class="canvas"></div>
      </div>
      <div class="recent">
        <div class="state">最近状态：</div>
        <template v-for="(item, index) in task" :key="index">
          <p>{{ index + 1 }}.{{ item }}</p>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onUnmounted, watch, ref, onMounted } from "vue";
import useScroll from "../../../hooks/useScroll";
import WordCloud from "wordcloud";
import useArticleStore from "../../../stores/article";
import { storeToRefs } from "pinia";

const articleStore = useArticleStore();
const { wordData } = storeToRefs(articleStore);

const task = ["找合适工作", "使用React重构个人博客", "学习技术Nest.js"];

// let wordData = [
//   ["javaScript", 12],
//   ["Java", 8],
//   ["生活", 20],
//   ["杂谈", 17],
//   ["vue", 13],
//   ["node", 12],
// ];

// let labels = articleStore.labels;
// onMounted(async () => {
//   console.log(labels.value);
//   const end = labels.value.map((item) => {
//     return {
//       label: item.label,
//       count: item.articleCount,
//     };
//   });
//   console.log("res",end);
// });

// 词云
const timer = setTimeout(() => {
  const options = eval({
    list: wordData.value, //或者[['各位观众',45],['词云', 21],['来啦!!!',13]],只要格式满足这样都可以
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
    // click: function (item, dimension, event) {
    //   console.log(item, dimension, event);
    // },
    weightFactor: function (size) {
      return size * 8;
    },
  });
  WordCloud(document.getElementById("canvas"), options);
}, 0);
onUnmounted(() => {
  clearInterval(timer);
});

// 监听滚动固定右侧内容
const isFied = ref(false);
let { scrollTop } = useScroll();
watch(scrollTop, (newValue) => {
  if (newValue > 300) {
    isFied.value = true;
  } else {
    isFied.value = false;
  }
});
</script>

<style lang="less" scoped>
.right {
  width: 300px;
  height: 100%;
  border-radius: 10px;
  .article-right {
    width: 300px;
    transition: all 2s;

    .look {
      width: 300px;
      height: 300px;
      overflow: hidden;
      position: relative;
      .lookagain {
        position: absolute;
        top: -120px;
        width: 300px;
        height: 400px;
      }
      .avatar {
        width: 80px;
        height: 80px;
        position: absolute;
        bottom: 100px;
        left: 50%;
        background-image: url(../../../assets/avatar.jpg);
        background-size: cover;
        border-radius: 50px;
        transform: translate(-50%, 0);
        border: 5px solid #e99e16;
      }
      .info {
        display: flex;
        justify-content: center;
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translate(-50%, 0);
        .item {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-wrap: wrap;
          margin: 10px 20px;
          span {
            margin-bottom: 5px;
            color: #e99e16;
            &:last-child {
              color: #c57c00;
            }
            &:first-child {
              font-weight: bold;
            }
          }
        }
      }
    }

    .word-cloud {
      height: 200px;
      width: 300px;
      // border: 1px solid pink;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      background-color: #f7f3f4;
      margin-top: -15px;

      .canvas {
        // border: 1px solid black;
        width: 100%;
        height: 100%;
        background-color: #f7f3f4;
      }
    }
    .recent {
      width: 300px;
      height: 200px;
      padding: 10px;
      margin-top: 5px;
      color: #e99e16;
      font-weight: bold;
      box-sizing: border-box;
      background-color: #fffdfe;
      p {
        text-indent: 2em;
        color: #3bcb49;
      }
    }
  }
}
.positionfixed {
  position: fixed;
  right: calc(10vw - 10px);
  top: 35px;
  transform: translate(0, 10px);
}

@media (max-width: 749px) {
  // 宽度窄时隐藏
  .right {
    display: none;
  }
}
</style>
