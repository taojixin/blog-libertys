<template>
  <div class="small-panel" @click="expand" :class="expandCss">
    <div class="panel-box">
      <div class="first-floor">
        <div class="left">
          <img src="../../../assets/avatar.jpg" alt="" />
          <div class="name">Libertys</div>
        </div>
        <div class="right">
          <div class="info">
            <div class="info-item">
              <span>文 章</span>
              <span>61</span>
            </div>
            <div class="info-item">
              <span>标 签</span>
              <span>28</span>
            </div>
          </div>
          <div class="contact">
            <a href="https://github.com/taojixin" target="_blank"
              ><i class="iconfont icon-github-fill"></i
            ></a>
            <a href="https://blog.csdn.net/qq_60602244" target="_blank"
              ><i class="iconfont icon-csdn1"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="second-floor">
        <template v-for="item in list" :key="item.id">
          <div
            class="nav-item"
            @click="smallGoTo(item.path)"
            :class="{ life: item.text === '生活' }"
          >
            <i class="iconfont" :class="item.iconClass"></i>
            <span>{{ item.text }}</span>
            <div class="other" v-if="item.otherItem.length !== 0">
              <template v-for="child in item.otherItem" :key="child.id">
                <div class="other-item" @click.stop="smallGoTo(child.path)">
                  <i :class="child.iconClass"></i>
                  {{ child.text }}
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

defineExpose({
  expand
})
defineProps({
  list: {
    type: Array,
  }
})


// 小屏
const expandCss = ref("collapse");
const isExpand = ref(false);
function expand() {
  expandCss.value = isExpand.value ? "collapse" : "expand";
  isExpand.value = !isExpand.value;
}
function smallGoTo(path) {
  router.push({
    path: "/" + path,
    query: {
      toPath: path,
    },
  });
  expandCss.value = isExpand.value ? "collapse" : "expand";
  isExpand.value = !isExpand.value;
}
</script>

<style lang="less" scoped>
.expand {
  transform: translate(0, 0);
}
.collapse {
  transform: translate(100%, 0);
}
.life {
  height: 150px !important;
  .other {
    width: 200px;
    margin-left: 20px;
    .other-item {
      margin: 10px 0;
      padding: 3px;
      border-radius: 10px;
      border-bottom: 3px solid gray;
      background-color: rgb(173, 200, 224);
    }
  }
}
.small-panel {
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: rgba(128, 128, 128, 0.5);
  transition: all 1s;

  .panel-box {
    position: absolute;
    top: 0;
    right: 0;
    width: 80%;
    height: 100%;
    float: right;
    background-color: white;
    .first-floor {
      border-bottom: 3px dotted gray;
      height: 140px;
      display: flex;
      .left {
        position: relative;
        width: 140px;
        img {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translate(-50%, 0);
          width: 85px;
          height: 85px;
          border-radius: 85px;
        }
        .name {
          position: absolute;
          bottom: 7px;
          left: 50%;
          transform: translate(-50%, 0);
          font-size: 25px;
          font-weight: bold;
          color: gray;
        }
      }
      .right {
        position: relative;
        flex: 1;
        .info {
          color: gray;
          margin: 20px;
          display: flex;
          justify-content: center;
          .info-item {
            margin: 0 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            span {
              margin: 2px 0;
            }
          }
        }
        .contact {
          position: absolute;
          left: 50%;
          transform: translate(-50%, 0);
          bottom: 10px;
          i {
            font-size: 37px;
            margin: 0 10px;
            color: rgb(104, 101, 101);
          }
        }
      }
    }
    .second-floor {
      border-bottom: 3px dotted gray;
      // border: 1px solid pink;
      // height: 500px;
      padding: 15px 30px;
      background-color: aliceblue;
      .nav-item {
        display: flex;
        align-items: center;
        margin: 20px 0;
        padding: 0 10px;
        background-color: rgb(209, 228, 245);
        border-bottom: 3px solid gray;
        border-radius: 10px;
        height: 30px;
      }
    }
  }
}
</style>
