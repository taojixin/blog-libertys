<template>
  <transition name="home">
    <div class="home" v-show="isShow">
      <!-- 导航栏 -->
      <NavBar />
      <!-- 欢迎访问 -->
      <HelloVisitor />
      <!-- 初始顶部 -->
      <HomeTop />
      <!-- 内容 -->
      <HomeContent @aritcleList="aritcleList" />
      <!-- 底部 -->
      <Footer />
    </div>
  </transition>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";

import HomeTop from "./cpns/home-top.vue";
import HomeContent from "./cpns/home-content.vue";
import HelloVisitor from "../../components/hello-visitor/index.vue";
import Footer from "../../components/footer/index.vue";

import useHomeStore from "../../stores/home";

const useHome = useHomeStore();

// 获取数据
useHome.fetchRecommendArticles(5, 0);
// 首次加载动画
const isShow = ref(false);
onMounted(() => {
  isShow.value = true;
});

// 请求文章数据
const { aritcleList } = storeToRefs(useHome);
</script>

<style lang="less" scoped>
.home-enter-from,
.home-leave-to {
  filter: blur(10px);
  opacity: 0.5;
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
