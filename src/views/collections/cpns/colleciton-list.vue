<template>
  <div class="collection-list">
    <template v-for="item in sortList" :key="item.id">
      <div class="sort-item shadow-box">
        <h3 ref="allList">{{ item.sortName }}</h3>
        <div class="list">
          <div
            class="item shadow-box"
            v-for="child in item.item"
            @click="jumpPage(child.url)"
          >
            <div class="item-box">
              <div class="left">
                <img :src="child.iconUrl" alt="" />
              </div>
              <div class="right">
                <div class="title">{{ child.itemName }}</div>
                <p>{{ child.sketch }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  sortList: {
    type: Array,
    default: () => [],
  },
  selectBar: {
    type: String,
    default: () => "常用网页",
  },
});

const emit = defineEmits(["allListValue"]);

// 获取所有的h3的dom元素
let allList = ref(null);
// 获取每个list距离顶部的距离
let domArr = [];
onMounted(() => {
  allList.value.forEach((item) => {
    domArr.push({
      key: item.innerText,
      top: item.offsetTop - 30,
      // offsetTop, offsetLeft：只读属性。要确定的这两个属性的值，首先得确定元素的offsetParent。offsetParent指的是距该元素最近的position不为static的祖先元素，如果没有则指向body元素。确定了offsetParent，offsetLeft指的是元素左侧偏移offsetParent的距离，同理offsetTop指的是上侧偏移的距离。
    });
  });
  // 将值传递给父组件
  console.log(domArr);
  emit("allListValue", domArr);
});

// 新页面跳转
function jumpPage(path) {
  window.open(path, "_blank");
}
</script>

<style lang="less" scoped>
.shadow-box {
  box-shadow: 0 0 20px 1px rgb(188, 185, 185);
  border-radius: 5px;
}
.collection-list {
  .sort-item {
    // height: 200px;
    background-color: white;
    margin-top: 30px;

    h3 {
      margin: 0;
      height: 22px;
      padding-bottom: 20px;
    }
    .list {
      display: flex;
      justify-items: center;
      flex-wrap: wrap;
      .item {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 150px;
        min-width: 300px;
        margin: 10px 10px;
        transition: all 0.5s;

        &:hover {
          transform: translateY(5px);
          cursor: pointer;
        }

        .item-box {
          height: 100px;
          display: flex;

          .left {
            width: 100px;
            height: 100px;
            margin-left: 10px;
            img {
              width: 100%;
              height: 100%;
            }
          }

          .right {
            flex: 1;
            padding-left: 10px;

            .title {
              font-size: 14px;
              font-weight: bold;
            }
            p {
              size: 12px;
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>
