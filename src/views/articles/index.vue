<template>
  <transition name="initial">
    <div class="articles" v-show="isShow">
      <NavBar />
      <WebHeader :title="title" :sentense="sentense" :bgImgUrl="bgImgUrl" />
      <div class="article-content">
        <ArticleLeft :aritcleList="newArticles" />
        <div class="right">
          <ArticleRight />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";

import ArticleRight from "./cpns/article-right.vue";
import WebHeader from "../../components/web-header/index.vue";
import ArticleLeft from "./cpns/article-left.vue";

import useArticleStore from "../../stores/article";

const title = "文章";
const sentense = "须知少时凌云志，曾许人间第一流!";
const bgImgUrl = "https://libertys.oss-cn-chengdu.aliyuncs.com/blog/bg7.jpg";

const articleStore = useArticleStore();
const count = ref(5);
const offset = ref(0);
articleStore.fetchLabels(); // 获取标签
articleStore.fetchNewArticles(count.value, offset.value); // 获取文章数据
const { newArticles } = storeToRefs(articleStore);

const isShow = ref(false);
onMounted(async () => {
  // 过渡动画
  isShow.value = true;
});
</script>

<style lang="less" scoped>
.articles {
  width: 100vw;
  height: 100vh;
  .article-content {
    margin: 20px 10vw;
    display: flex;
  }
}

@media (max-width: 749px) {
  .articles {
    .article-content {
      margin: 20px 2vw;
    }
  }
}
</style>
