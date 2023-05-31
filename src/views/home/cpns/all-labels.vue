<template>
  <div class="all-labels shadow-box">
    <div class="labels-title">
      <i class="iconfont icon-24gl-tags3"></i>
      <span>标签</span>
    </div>
    <div class="content">
      <template v-for="item in labels" :key="item.id">
        <span class="label" :style="{color: item.color, backgroundColor: item.bgColor}">{{ item.label }}</span>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref ,onMounted} from "vue";
import { getAllLabels } from "../../../services/index";
import { randomColor } from "../../../utils/randomColor";
// const lebels = ref([
//   { id: 1, label: "JavaScript", color: "rgb(97, 97, 208)", bgColor: "rgb(133, 198, 223)" },
//   { id: 2, label: "Java", color: "rgb(134, 134, 65)", bgColor: "rgb(242, 242, 168)" },
//   { id: 3, label: "TypeScript", color: "rgb(31, 91, 219)", bgColor: "rgba(31, 91, 219, .3)" },
//   { id: 4, label: "nodejs", color: "rgb(222, 26, 36)", bgColor: "rgba(222, 26, 36, .3)" },
//   { id: 5, label: "koa", color: "rgb(140, 222, 26)", bgColor: "rgba(140, 222, 26, .3)" },
//   { id: 6, label: "express", color: "rgb(26, 222, 85)", bgColor: "rgba(26, 222, 85, .3)" },
//   { id: 7, label: "MySQL", color: "rgb(169, 19, 192)", bgColor: "rgba(169, 19, 192, .3)" },
//   { id: 8, label: "云服务器", color: "rgb(15, 227, 213)", bgColor: "rgba(15, 227, 213, .3)" },
//   { id: 9, label: "生活", color: "rgb(64, 36, 173)", bgColor: "rgba(64, 36, 173, .3)" },
//   { id: 10, label: "HTML", color: "rgb(139, 14, 139)", bgColor: "rgba(139, 14, 139, .3)" },
//   { id: 11, label: "CSS", color: "rgb(21, 206, 200)", bgColor: "rgba(21, 206, 200, .3)" },
//   { id: 12, label: "SSR", color: "rgb(138, 13, 100)", bgColor: "rgba(138, 13, 100, .3)" },
//   { id: 13, label: "跨域", color: "rgb(83, 211, 32)", bgColor: "rgba(83, 211, 32, .3)" },
//   { id: 14, label: "issue", color: "rgb(222, 26, 170)", bgColor: "rgba(222, 26, 170, .3)" },
// ]);
const labels = ref([])
onMounted(async () => {
  await getAllLabels().then(res => {
    const result = res.data.result.map(item => {
      const randColor = randomColor()
      return {
        id: item.id,
        label: item.label,
        color: randColor.color,
        bgColor: randColor.bgColor
      }
    })
    labels.value = result
  })
})
</script>

<style lang="less" scoped>
.all-labels {
  width: 300px;
  // height: 300px;
  box-sizing: border-box;
  padding: 20px;
  margin: 45px 0 40px 0;

  .labels-title {
    display: flex;
    align-items: center;
    i {
      font-size: 30px;
      color: rgb(42, 216, 42);
      font-weight: bold;
    }
    span {
      margin-left: 5px;
      font-weight: bold;
      color: rgb(119, 131, 142);
    }
  }
  .content {
    display: flex;
    flex-wrap: wrap;

    .label {
      padding: 5px;
      margin: 10px;
      border-radius: 3px;

      &:hover {
        cursor: pointer;
        transition: all .2s;
        transform: scale(1.1);
      }
    }
  }
}
</style>
