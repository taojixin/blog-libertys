<template>
  <!-- 标签 -->
  <div class="labels-list">
    <div class="labels">标签：</div>
    <div class="labels-box">
      <template v-for="item in labels" :key="item.id">
        <div
          class="label-item"
          :style="{ color: item.color, backgroundColor: item.bgColor }"
          @click="labelDetails(item.label)"
        >
          {{ item.label }}({{ item.id }})
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {useRouter} from 'vue-router'

const router = useRouter()

const labels = ref([
  {
    id: 1,
    label: "JavaScript",
    color: "rgb(97, 97, 208)",
    bgColor: "rgb(133, 198, 223)",
  },
  {
    id: 2,
    label: "Java",
    color: "rgb(134, 134, 65)",
    bgColor: "rgb(242, 242, 168)",
  },
  {
    id: 3,
    label: "TypeScript",
    color: "rgb(31, 91, 219)",
    bgColor: "rgba(31, 91, 219, .3)",
  },
  {
    id: 4,
    label: "nodejs",
    color: "rgb(222, 26, 36)",
    bgColor: "rgba(222, 26, 36, .3)",
  },
  {
    id: 5,
    label: "koa",
    color: "rgb(140, 222, 26)",
    bgColor: "rgba(140, 222, 26, .3)",
  },
  {
    id: 6,
    label: "express",
    color: "rgb(26, 222, 85)",
    bgColor: "rgba(26, 222, 85, .3)",
  },
  {
    id: 7,
    label: "MySQL",
    color: "rgb(169, 19, 192)",
    bgColor: "rgba(169, 19, 192, .3)",
  },
  {
    id: 8,
    label: "云服务器",
    color: "rgb(15, 227, 213)",
    bgColor: "rgba(15, 227, 213, .3)",
  },
  {
    id: 9,
    label: "生活",
    color: "rgb(64, 36, 173)",
    bgColor: "rgba(64, 36, 173, .3)",
  },
  {
    id: 10,
    label: "HTML",
    color: "rgb(139, 14, 139)",
    bgColor: "rgba(139, 14, 139, .3)",
  },
  {
    id: 11,
    label: "CSS",
    color: "rgb(21, 206, 200)",
    bgColor: "rgba(21, 206, 200, .3)",
  },
  {
    id: 12,
    label: "SSR",
    color: "rgb(138, 13, 100)",
    bgColor: "rgba(138, 13, 100, .3)",
  },
  {
    id: 13,
    label: "跨域",
    color: "rgb(83, 211, 32)",
    bgColor: "rgba(83, 211, 32, .3)",
  },
  {
    id: 14,
    label: "issue",
    color: "rgb(222, 26, 170)",
    bgColor: "rgba(222, 26, 170, .3)",
  },
]);
function labelDetails(label) {
  router.push({path: `/labeldetails/${label}`})
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
