<template>
  <div class="home">
    <div class="first-floor"></div>
    <div class="second-floor">
      <div class="left">
        <introduction></introduction>
        <announcement></announcement>
      </div>
      <div class="right">
        <template v-for="item in aritcleList" :key="item.id">
          <article-item :articleItem="item"></article-item>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import Introduction from "./cpns/introduction.vue";
import Announcement from "./cpns/announcement.vue";
import ArticleItem from "../../components/article-item/index.vue";
import useResize from "../../hooks/useResize";

const aritcleList = [
  {
    id: 1,
    imgUrl: "http://img.libertys.cn/background/1.jfif",
    title: "Vue基础语法",
    description: "关于vue的基础语法。",
    content: "vue安装。",
    time: "2023-05-02",
    labels: [
      { id: 1, label: "vue" },
      { id: 1, label: "javascript" },
      { id: 1, label: "前端" },
      { id: 1, label: "pinia" },
    ],
  },
  {
    id: 2,
    imgUrl: "http://img.libertys.cn/background/5.jpg",
    title: "Vue基础语法",
    description:
      "关于vue的基础语法。关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法",
    // description: "关于vue的基础语法。",
    content: "vue安装。",
    time: "2023-05-02",
    labels: [
      { id: 1, label: "vue" },
      { id: 1, label: "javascript" },
      { id: 1, label: "前端" },
      { id: 1, label: "pinia" },
    ],
  },
  {
    id: 3,
    imgUrl: "http://img.libertys.cn/background/7.jfif",
    title: "Vue基础语法",
    description:
      "关于vue的基础语法。关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法",
    // description: "关于vue的基础语法。",
    content: "vue安装。",
    time: "2023-05-02",
    labels: [
      { id: 1, label: "vue" },
      { id: 1, label: "javascript" },
      { id: 1, label: "前端" },
      { id: 1, label: "pinia" },
    ],
  },
  {
    id: 4,
    imgUrl: "http://img.libertys.cn/background/8.png",
    title: "Vue基础语法",
    description:
      "关于vue的基础语法。关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法关于vue的基础语法",
    // description: "关于vue的基础语法。",
    content: "vue安装。",
    time: "2023-05-02",
    labels: [
      { id: 1, label: "vue" },
      { id: 1, label: "javascript" },
      { id: 1, label: "前端" },
      { id: 1, label: "pinia" },
    ],
  },
];


</script>

<style lang="less" scoped>
.home {
  .second-floor {
    margin-top: 50px;
    display: flex;
    justify-content: space-around;

    .right {
      border: 1px solid pink;
      width: 1000px;
      height: 1000px;
    }

    .left {
      // border: 1px solid pink;
      width: 300px;
    }
  }

  .first-floor {
    height: 100vh;
    background: url("http://img.libertys.cn/blog/homebg.jfif") no-repeat;
    background-position: 30% center;
    overflow: hidden;
    background-size: cover;
  }
}

@media (max-width: 749px) {
  .home {
    .left {
      display: none;
    }
  }
}
</style>
