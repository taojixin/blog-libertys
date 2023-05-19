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

      <div class="small-panel" @click="expand" :class="expandCss">
        <div class="panel-box">
          <div class="first-floor">
            <div class="left">
              <img src="../../assets/avatar.jpg" alt="" />
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
            <template v-for="item in navList" :key="item.id">
              <div
                class="nav-item"
                @click="smallGoTo(item.path)"
                :class="{ life: item.text === '生活' }"
              >
                <i class="iconfont" :class="item.iconClass"></i>
                <span>{{ item.text }}</span>
                <div class="other" v-if="item.otherItem.length !== 0">
                  <template v-for="child in item.otherItem" :key="child.id">
                    <div class="other-item" @click.stop="goTo(child.path)">
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
    </div>
  </transition>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, watch, onMounted } from "vue";
import useScreenStore from "../../stores/screen";
import useScroll from "../../hooks/useScroll";

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
  {
    id: 2,
    path: "collections",
    text: "收藏",
    iconClass: "iconfont icon-shoucangjia size",
    otherItem: [],
  },
  {
    id: 3,
    path: "life",
    text: "生活",
    iconClass: "iconfont icon-icon size",
    otherItem: [
      {
        id: 30,
        path: "daily",
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
        path: "music",
        text: "音乐",
        iconClass: "iconfont icon-yinle",
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
  router.push({
    path: "/" + path,
    query: {
      toPath: path,
    },
  });
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
        top: 50px;
        width: 100px;
        color: white;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        background: rgba(176, 174, 174, 0.5);
        // visibility: hidden;
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

        .other {
          // display: block;
        }
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

  .small-panel {
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    // background-color: rgba(128, 128, 128, 0.5);
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
.expand {
  transform: translate(0, 0);
}
.collapse {
  transform: translate(100%, 0);
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
