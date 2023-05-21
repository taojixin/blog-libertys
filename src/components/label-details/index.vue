<template>
  <transition name="label-details">
    <div class="label-details" v-show="isShow">
      <div class="first-floor">
        <span>{{ label }}</span>
      </div>
      <div class="second-floor">
        <!-- 文章列表 -->
        <template v-for="(item, index) in aritcleList" :key="item.id">
          <article-item
            :articleItem="item"
            :itemIndex="index"
            :artNum="index"
          ></article-item>
        </template>
      </div>
      <ShortcutBtn />
    </div>
  </transition>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { getArticles } from "../../services";

import articleItem from "../article-item/index.vue";
import ShortcutBtn from "../shortcut-btn/index.vue";

const route = useRoute();
const label = route.params.label;

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
.label-details {
  .second-floor {
    width: 60vw;
    border: 2px solid pink;
    margin: 0 auto;
  }
  .first-floor {
    background: url("https://img.libertys.cn/blog/bg6.jpg") no-repeat;
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
  }
}
@media (max-width: 500px) {
  .label-details {
    .second-floor {
      width: 95vw;
    }
  }
}

.label-details-enter-from,
.label-details-leave-to {
  filter: blur(10px);
  opacity: 0.6;
}

.label-details-enter-to,
.label-details-leave-from {
  filter: blur(0px);
  opacity: 1;
}

.label-details-enter-active,
.label-details-leave-active {
  transition: all 1s ease;
}
</style>
