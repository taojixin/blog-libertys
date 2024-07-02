<template>
  <transition name="initial">
    <div class="life" v-show="isShow">
      <NavBar />
      <WebHeader :title="title" :sentense="sentense" :bgImgUrl="bgImgUrl" />
      <div class="lift-content">
        <template v-for="item in lifeItemDetail" :key="item.id">
          <LifeItem :lifeItem="item" />
        </template>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from "vue";
import LifeItem from "../../components/life-item/index.vue";
import WebHeader from "../../components/web-header/index.vue";

const title = "生活";
const sentense = "须知少时凌云志，曾许人间第一流!";
const bgImgUrl = "https://libertys.oss-cn-chengdu.aliyuncs.com/blog/bg6.jpg";

const isShow = ref(false);
onMounted(() => {
  isShow.value = true;
});
const lifeItemDetail = ref([
  {
    id: 1,
    content:
      "须知少时凌云志，曾许人间第一流!须知少时凌云志，曾许人间第一流!须知少时凌云志，曾许人间第一流!须知少时凌云志，曾许人间第一流!须知少时凌云志，曾许人间第一流!须知少时凌云志，曾许人间第一流!须知少时凌云志，曾许人间第一流!须知少时凌云志，曾许人间第一流!须知少时凌云志，曾许人间第一流!须知少时凌云志，曾许人间第一流!",
    time: "2023-09-06",
    like: 99,
    imgUrl: [
      "https://libertys.oss-cn-chengdu.aliyuncs.com/rock/%E5%9C%A3%E6%B9%AE%E4%BC%8A%E8%8E%B1%E5%A8%9C.png",
      "https://libertys.oss-cn-chengdu.aliyuncs.com/blog/bg4.jpg",
      "https://libertys.oss-cn-chengdu.aliyuncs.com/blog/bg4.jpg",
      "https://libertys.oss-cn-chengdu.aliyuncs.com/blog/bg4.jpg",
      "https://libertys.oss-cn-chengdu.aliyuncs.com/blog/bg4.jpg",
      "https://libertys.oss-cn-chengdu.aliyuncs.com/blog/bg4.jpg",
    ],
  },
  {
    id: 1,
    content:
      "须知少时凌云志，曾许人间第一流!须知少时凌云志，曾许人间第一流!须知少时凌云志，曾许人间第一流!须知少时凌云志，曾许人间第一流!须知少时凌云志，曾许人间第一流!须知少时凌云志，曾许人间第一流!须知少时凌云志，曾许人间第一流!须知少时凌云志，曾许人间第一流!须知少时凌云志，曾许人间第一流!须知少时凌云志，曾许人间第一流!",
    time: "2023-09-06",
    like: 99,
    imgUrl: [],
  },
  {
    id: 1,
    content:
      "须知少时凌云志，曾许人间第一流!须知少时凌云志，曾许人间第一流!须知少时凌云志，曾许人间第一流!须知少时凌云志，曾许人间第一流!须知少时凌云志，曾许人间第一流!须知少时凌云志，曾许人间第一流!须知少时凌云志，曾许人间第一流!须知少时凌云志，曾许人间第一流!须知少时凌云志，曾许人间第一流!须知少时凌云志，曾许人间第一流!",
    time: "2023-09-06",
    like: 99,
    imgUrl: [],
  },
]);
</script>

<style lang="less" scoped>
.life {
  .lift-content {
    margin: 0 auto;
    box-sizing: border-box;
    padding: 10px;
    width: 60vw;
    background-color: white;
  }
}

@media (max-width: 500px) {
  .life {
    .lift-content {
      width: 100vw;
      padding: 5px;
    }
  }
}
</style>
