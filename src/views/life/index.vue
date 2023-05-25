<template>
  <div class="life" v-show="isShow">
    <NavBar />
    <div class="first-floor">
      <span>生 活</span>
      <p>须知少时凌云志，曾许人间第一流!</p>
    </div>
    <div class="second-floor">
      <template v-for="item in lifeItemDetail" :key="item.id">
        <LifeItem :lifeItem="item" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import LifeItem from '../../components/life-item/index.vue'

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
      "https://img.libertys.cn/rock/%E5%9C%A3%E6%B9%AE%E4%BC%8A%E8%8E%B1%E5%A8%9C.png",
      "https://img.libertys.cn/blog/bg4.jpg",
      "https://img.libertys.cn/blog/bg4.jpg",
      "https://img.libertys.cn/blog/bg4.jpg",
      "https://img.libertys.cn/blog/bg4.jpg",
      "https://img.libertys.cn/blog/bg4.jpg",
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
  .second-floor {
    margin: 0 auto;
    box-sizing: border-box;
    padding: 10px;
    width: 60vw;
    background-color: white;
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
    p {
      font-size: 14px;
      color: rgb(150, 147, 147);
    }
  }
}

@media (max-width: 500px) {
  .life {
    .second-floor {
      width: 100vw;
      padding: 5px;
    }
  }
}

.life-enter-from,
.life-leave-to {
  filter: blur(10px);
  opacity: 0.5;
}

.life-enter-to,
.life-leave-from {
  filter: blur(0px);
  opacity: 1;
}

.life-enter-active,
.life-leave-active {
  transition: all 1s ease;
}
</style>
