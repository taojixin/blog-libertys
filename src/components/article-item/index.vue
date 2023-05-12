<template>
  <div
    class="article-item shadow-box"
    id="asd"
    @click="articleDetails(articleItem.id)"
    ref="itemRef"
  >
    <template v-if="(artNum + 1) % 2 !== 0">
      <div class="side">
        <div class="bgimage" :style="{backgroundImage: imgUrl}"></div>
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
        <div class="bgimage" :style="{backgroundImage: imgUrl}"></div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

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
const imgUrl = ref("url(https://img.libertys.cn/blog/load1.gif)")
const itemRef = ref();
onMounted(() => {
  const observer = new IntersectionObserver(
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        observer.unobserve(itemRef.value);
        imgUrl.value = "url(" + props.articleItem.imgUrl + ")"
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
  display: flex;
  // border: 1px solid black;
  border-radius: 10px;
  margin: 50px 0;
  overflow: hidden;
  cursor: pointer;
  box-sizing: border-box;
  transition: all 0.2s;

  &:hover {
    border: 5px solid #c18fef;
    .side {
      .bgimage {
        transform: scale(1.2);
      }
    }
  }

  .side {
    flex: 5;
    overflow: hidden;
    z-index: -10;
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
    z-index: -10;

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
        font-size: 1px;
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
        -webkit-line-clamp: 4; // 最多显示四行
        -webkit-box-orient: vertical;
      }
      .labels {
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        .label-item {
          margin: 5px;
          padding: 5px;
          color: #8a51c0;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #dbc2f4;
        }
      }
    }
  }
}

@media (min-width: 750px) {
}
@media (max-width: 749px) {
  .article-item {
    flex-direction: column;
    height: 400px;
    .side {
      flex: 3;
    }
  }
}
</style>
