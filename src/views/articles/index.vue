<template>
  <div class="articles">
    <template v-for="item in articles" :key="item.id">
      <ArticleItem :article-item="item"></ArticleItem>
    </template>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import ArticleItem from "./cpns/article-item.vue";
import { getAllArticles } from "../../services";

let articles = ref([]);

onMounted(async () => {
  await getAllArticles().then((res) => {
    articles.value = res.data.result;
  console.log(res.data.result);
  });
});
</script>

<style lang="less" scoped></style>
