<template>
  <div
    class="article-item shadow-box"
    @click="articleDetails(articleItem.id)"
    ref="itemRef"
  >
    <template v-if="(artNum + 1) % 2 !== 0">
      <div class="side">
        <div class="bgimage" :style="{ backgroundImage: imgUrl }"></div>
      </div>
      <div class="other-side">
        <div class="article-msg">
          <div class="title">{{ articleItem.title }}</div>
          <div class="art-about">
            <div class="top" v-if="itemIndex === 0">置顶</div>
            <i class="iconfont icon-shijian"></i>
            {{ articleItem.time }}
          </div>
          <div class="description">{{ articleItem.description }}</div>
          <div class="labels">
            <template v-for="item in articleItem.labels" :key="item.id">
              <div class="label-item">{{ item.label }}</div>
            </template>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <template v-if="!isSmall">
        <div class="other-side">
          <div class="article-msg">
            <div class="title">{{ articleItem.title }}</div>
            <div class="art-about">
              <div class="top" v-if="itemIndex === 0">置顶</div>
              <i class="iconfont icon-shijian"></i>
              {{ articleItem.time }}
            </div>
            <div class="description">{{ articleItem.description }}</div>
            <div class="labels">
              <template v-for="item in articleItem.labels" :key="item.id">
                <div class="label-item">{{ item.label }}</div>
              </template>
            </div>
          </div>
        </div>
        <div class="side">
          <div class="bgimage" :style="{ backgroundImage: imgUrl }"></div>
        </div>
      </template>
      <template v-else>
        <div class="side">
          <div class="bgimage" :style="{ backgroundImage: imgUrl }"></div>
        </div>
        <div class="other-side">
          <div class="article-msg">
            <div class="title">{{ articleItem.title }}</div>
            <div class="art-about">
              <div class="top" v-if="itemIndex === 0">置顶</div>
              <i class="iconfont icon-shijian"></i>
              {{ articleItem.time }}
            </div>
            <div class="description">{{ articleItem.description }}</div>
            <div class="labels">
              <template v-for="item in articleItem.labels" :key="item.id">
                <div class="label-item">{{ item.label }}</div>
              </template>
            </div>
          </div>
        </div>
      </template>
    </template>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import useScreenStore from "../../stores/screen";

const useScreen = useScreenStore();
const isSmall = useScreen.isSmall;

const router = useRouter();
const props = defineProps({
  articleItem: {
    type: Object,
    required: true,
    defalut: () => {},
  },
  itemIndex: {
    type: Number,
  },
  artNum: {
    type: Number,
  },
});
function bgImage(src) {
  return {
    backgroundImage: `url(${src})`,
  };
}
function articleDetails(articleId) {
  router.push({ path: `/articledetails/${articleId}` });
}

// 背景图片懒加载
const imgUrl = ref(
  "url(https://libertys.oss-cn-chengdu.aliyuncs.com/blog/load1.gif)"
);
const itemRef = ref();
onMounted(() => {
  const observer = new IntersectionObserver(
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        observer.unobserve(itemRef.value);
        imgUrl.value = "url(" + props.articleItem.imgUrl + ")";
      }
    },
    {
      threshold: 0,
    }
  );
  observer.observe(itemRef.value);
});
</script>

<style lang="less" scoped>
.article-item {
  height: 250px;
  margin: 20px 0;
  display: flex;
  border-radius: 10px;
  box-sizing: border-box;
  overflow: hidden;
  transition: all 0.2s;

  &:hover {
    border: 5px solid var(--purpleBorder);
    cursor: pointer;
    .side {
      .bgimage {
        transform: scale(1.2);
      }
    }
  }

  .side {
    flex: 5;
    overflow: hidden;
    // z-index: -10;
    .bgimage {
      width: 100%;
      height: 100%;
      transition: all 0.8s;
      background-position: no-repeat;
      background-size: cover; //  背景图片将被缩放，以填充背景区域，可能会裁剪部分图片。
      background-position: center center;
    }
  }
  .other-side {
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: aliceblue;
    // z-index: -10;

    .article-msg {
      position: relative;
      height: 200px;
      width: 100%;
      padding: 20px;

      .title {
        font-size: 20px;
        font-weight: bold;
        color: rgb(74, 50, 50);
      }

      .art-about {
        margin: 15px 0;
        font-size: 12px;
        color: rgb(130, 222, 130);
        display: flex;
        align-items: center;

        .top {
          padding: 5px;
          color: red;
          border-radius: 5px;
          background-color: rgb(242, 205, 205);
        }

        i {
          margin: 0 3px 0 10px;
          font-weight: bold;
          color: rgb(28, 206, 28);
        }
      }
      .description {
        font-size: 18px;
        text-indent: 2em;
        margin: 10px;
        color: gray;
        line-height: 20px;
        // 文字超出省略
        overflow: hidden;
        text-overflow: ellipsis; // 产出部分省略
        display: -webkit-box;
        -webkit-line-clamp: 3; // 最多显示四行
        -webkit-box-orient: vertical;
      }
      .labels {
        width: 80%;
        overflow: hidden;
        position: absolute;
        bottom: 20px;
        display: flex;
        justify-content: space-around;
        border-bottom: 3px dotted pink;
        .label-item {
          margin: 5px;
          padding: 10px;
          border-radius: 5px;
          color: var(--purpleColor);
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--purpleBg);
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .article-item {
    flex-direction: column;
    height: 300px;
    .side {
      flex: 3;
    }
    .other-side {
      flex: 3;
      .article-msg {
        padding: 5px 10px;
        height: 150px;
        .title {
          font-size: 15px;
        }
        .art-about {
          margin: 10px 0;
        }
        .labels {
          bottom: 5px;
          .label-item {
            font-size: 12px;
            border-radius: 5px;
            padding: 5px;
          }
        }
      }
    }
  }
}
</style>
