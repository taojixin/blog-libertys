<template>
  <transition name="navbar">
    <div class="top-navbar" v-show="!isHidden">
      <h1>Libertys</h1>
      <div class="nav" v-if="!useScreen.isSmall">
        <template v-for="item in navList" :key="item.id">
          <span
            class="nav-item hvr-overline-reveal hvr-wobble-bottom"
            @click="goTo(item.path, item.id)"
            :class="{ active: item.isActive }"
          >
            <i :class="item.iconClass"></i>
            {{ item.text }}
          </span>
        </template>
      </div>
      <div class="samll-nav" v-else>
        <i class="iconfont icon-xiangxia"></i>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, watch, onMounted} from "vue";
import useScreenStore from "../../stores/screen";
import useScroll from "../../hooks/useScroll";

const useScreen = useScreenStore();
const router = useRouter();

// 导航列表
const navList = ref([
  {
    id: 0,
    path: "home",
    text: "首页",
    iconClass: "iconfont icon-shouyefill size",
    isActive: false,
  },
  {
    id: 1,
    path: "articles",
    text: "文章",
    iconClass: "iconfont icon-16 size",
    isActive: false,
  },
  {
    id: 2,
    path: "collections",
    text: "收藏",
    iconClass: "iconfont icon-shoucangjia size",
    isActive: false,
  },
  {
    id: 3,
    path: "life",
    text: "生活",
    iconClass: "iconfont icon-icon size",
    isActive: false,
  },
  {
    id: 4,
    path: "message",
    text: "留言",
    iconClass: "iconfont icon-liuyanfill size",
    isActive: false,
  },
  {
    id: 5,
    path: "about",
    text: "关于",
    iconClass: "iconfont icon-guanyu size",
    isActive: false,
  },
]);

function goTo(path, id) {
  navList.value = navList.value.map((item) => {
    if (item.id === id) {
      item.isActive = true;
    } else {
      item.isActive = false;
    }
    return item;
  });
  router.push("/" + path);
}

// 监听滚动导航消失
let isHidden = ref(false);
let { scrollTop } = useScroll();
watch(scrollTop, (newValue) => {
  if (newValue > 500) {
    isHidden.value = true;
  } else {
    isHidden.value = false;
  }
});
</script>

<style lang="less" scoped>
.top-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  line-height: 60px;
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

      .other {
        position: absolute;
        bottom: -105px;
        width: 100px;
        height: 100px;
        border: 1px solid palegreen;
        background: gray;
        // display: none;
        .other-item {
          height: 20px;
          border: 1px solid pink;
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
}

.active {
  border: 5px solid rgb(125, 122, 122) !important;
}

.navbar-enter-from,
.navbar-leave-to {
  transform: translateX(300px);
  opacity: 0;
}

.navbar-enter-to,
.navbar-leave-from {
  opacity: 1;
  transform: translateX(0px);
}

.navbar-enter-active,
.navbar-leave-active {
  transition: all 2s ease;
}
</style>
