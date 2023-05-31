<template>
  <!-- 标签 -->
  <div class="labels-list">
    <div class="labels">标签：</div>
    <div class="labels-box">
      <template v-for="item in labels" :key="item.id">
        <div
          class="label-item"
          :style="{ color: item.color, backgroundColor: item.bgColor }"
          @click="labelDetails(item.id, item.label)"
        >
          {{ item.label }}({{ item.articleCount }})
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import useArticleStore from "../../../stores/article";
import { storeToRefs } from "pinia";

const router = useRouter();
const articleStore = useArticleStore();
const { labels } = storeToRefs(articleStore);

function labelDetails(id, label) {
  router.push({ path: `/labeldetails/${id}/${label}` });
}
</script>

<style lang="less" scoped>
.labels-list {
  // height: 300px;
  padding: 10px 50px 30px;
  background-color: white;
  border-bottom: 5px dotted gray;
  .labels {
    font-size: 30px;
    font-weight: bold;
    margin: 10px;
    color: rgb(108, 101, 101);
  }
  .labels-box {
    // border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .label-item {
      height: 20px;
      padding: 10px;
      margin: 5px;
      border-radius: 5px;
      transition: all 0.5s;
      &:hover {
        transform: scale(1.2);
        cursor: pointer;
      }
    }
  }
}
@media (max-width: 749px) {
  .labels-list {
    padding: 10px;
    .labels {
      font-size: 20px;
    }
    .labels-box {
      justify-content: space-between;
      .label-item {
        height: 15px;
        line-height: 15px;
        padding: 5px;
        font-size: 12px;
      }
    }
  }
}
</style>
