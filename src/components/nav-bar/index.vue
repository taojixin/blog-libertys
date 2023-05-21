<template>
  <transition name="navbar">
    <div class="top-navbar" v-show="!isHidden">
      <h1>Libertys</h1>
      <!-- 大屏导航 -->
      <div class="nav" v-if="!useScreen.isSmall">
        <template v-for="item in navList" :key="item.id">
          <span
            class="nav-item hvr-overline-reveal hvr-wobble-bottom"
            @click="goTo(item.path)"
            :class="{ active: item.path === isActivePath }"
          >
            <i :class="item.iconClass"></i>
            {{ item.text }}
            <div class="other" v-if="item.otherItem.length !== 0">
              <template v-for="child in item.otherItem" :key="child.id">
                <div class="other-item" @click.stop="goTo(child.path)">
                  <i :class="child.iconClass"></i>
                  {{ child.text }}
                </div>
              </template>
            </div>
          </span>
        </template>
      </div>
      <!-- 小屏导航 -->
      <div class="small-nav" v-else>
        <i class="iconfont icon-shouqicaidan" @click="expand"></i>
      </div>
      <SmallPanel ref="smallPanelRef" :list="navList" />
    </div>
  </transition>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, watch, onMounted } from "vue";
import useScreenStore from "../../stores/screen";
import useScroll from "../../hooks/useScroll";
import SmallPanel from "./cpns/small-panel.vue";

import Message from "../base-message/message";

const useScreen = useScreenStore();
const router = useRouter();
const route = useRoute();

const isActivePath = ref("/home");
onMounted(() => {
  if (route.path === "/" + route.query.toPath) {
    isActivePath.value = route.path.split("/")[1];
  }
});

// 导航列表
const navList = ref([
  {
    id: 0,
    path: "home",
    text: "首页",
    iconClass: "iconfont icon-shouyefill size",
    otherItem: [],
  },
  {
    id: 1,
    path: "articles",
    text: "文章",
    iconClass: "iconfont icon-16 size",
    otherItem: [],
  },
  // {
  //   id: 2,
  //   path: "collections",
  //   text: "收藏",
  //   iconClass: "iconfont icon-shoucangjia size",
  //   otherItem: [],
  // },
  {
    id: 3,
    path: "life",
    text: "生活",
    iconClass: "iconfont icon-icon size",
    otherItem: [
      {
        id: 30,
        path: "life",
        text: "日常",
        iconClass: "iconfont icon-wenzhang",
      },
      {
        id: 31,
        path: "phone",
        text: "照片",
        iconClass: "iconfont icon-xiangce",
      },
      {
        id: 32,
        path: "record",
        text: "记录",
        iconClass: "iconfont icon-shijianzhou",
      },
      {
        id: 33,
        path: "lover",
        text: "她",
        iconClass: "iconfont icon-aiqingniao",
      },
    ],
  },
  {
    id: 4,
    path: "message",
    text: "留言",
    iconClass: "iconfont icon-liuyanfill size",
    otherItem: [],
  },
  {
    id: 5,
    path: "about",
    text: "关于",
    iconClass: "iconfont icon-guanyu size",
    otherItem: [],
  },
]);

function goTo(path) {
  if (route.path === "/" + path) {
    Message({ type: "warn", text: "已在当目标面！" });
  } else {
    router.push({
      path: "/" + path,
      query: {
        toPath: path,
      },
    });
  }
}

// 监听滚动导航消失
let isHidden = ref(false);
let { scrollTop } = useScroll();
watch(scrollTop, (newValue) => {
  if (newValue > 100) {
    isHidden.value = true;
  } else {
    isHidden.value = false;
  }
});

// 触发小屏组件事件
const smallPanelRef = ref(null);
function expand() {
  smallPanelRef.value.expand();
}
</script>

<style lang="less" scoped>
.top-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: space-between;
  z-index: 99;

  h1 {
    margin: 0;
    padding-left: 20px;
    color: aliceblue;
  }

  .nav {
    height: 60px;
    padding-right: 20px;
    display: flex;

    .nav-item {
      position: relative;
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 80px;
      border: 2px solid rgb(125, 122, 122);
      margin: 5px 5px;
      // padding: 0 5px;
      color: aliceblue;
      &:hover {
        .other {
          // visibility: visible;
          display: flex;
        }
      }

      .other {
        position: absolute;
        top: 46px;
        width: 100px;
        color: white;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        background: rgba(176, 174, 174, 0.5);
        display: none;

        .other-item {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 30px;
          width: 100px;
          transition: all 0.5s;
          overflow: hidden;
          i {
            margin-right: 5px;
          }
          &:hover {
            background: rgba(176, 174, 174, 0.8);
            color: #7d7a7a;
            transform: scale(1.2);
          }
          &:last-child {
            &:hover {
              font-weight: bold;
              color: #ed758d;
              transition: all 0.2s;
              animation: lover ease-in 1s infinite;
            }
            @keyframes lover {
              0% {
                transform: scale(1);
              }
              100% {
                transform: scale(1.2);
              }
            }
          }
        }
      }
      i {
        font-size: 25px;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
  .small-nav {
    i {
      font-size: 40px;
      color: white;
      margin-right: 10px;
    }
  }
}

.active {
  border: 5px solid rgb(125, 122, 122) !important;
}

.navbar-enter-from,
.navbar-leave-to {
  transform: translateY(-60px);
  opacity: 0;
}

.navbar-enter-to,
.navbar-leave-from {
  opacity: 1;
  transform: translateY(0px);
}

.navbar-enter-active,
.navbar-leave-active {
  transition: all 2s ease;
}
</style>
