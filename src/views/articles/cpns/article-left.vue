<template>
  <div class="article-left">
    <labels-list />
    <div class="new-arts">最新文章</div>
    <!-- 文章列表 -->
    <template v-for="(item, index) in aritcleList" :key="item.id">
      <ArticleItem
        :articleItem="item"
        :itemIndex="index"
        :artNum="index"
      ></ArticleItem>
    </template>
  </div>
</template>

<script setup>
import LabelsList from "./labels-list.vue";
import ArticleItem from "../../../components/article-item/index.vue";
defineProps({
  aritcleList: {
    type: Array,
  },
});
</script>

<style lang="less" scoped>
.article-left {
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

@media (max-width: 749px) {
  .article-left {
    padding: 0 5px;
    margin-top: -10px;
    .new-arts {
      height: 80px;
      line-height: 80px;
      margin-bottom: -30px;
    }
  }
}
</style>
