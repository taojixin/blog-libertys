<template>
  <div class="article-item shadow-box" @click="articleDetails(articleItem.id)">
    <template v-if="(artNum + 1) % 2 !== 0">
      <div class="side">
        <div class="bgimage" :style="bgImage(articleItem.imgUrl)"></div>
      </div>
      <div class="other-side">
        <div class="article-msg">
          <div class="title">{{ articleItem.title }}</div>
          <div class="art-about">{{ articleItem.time }}</div>
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
          <div class="art-about">{{ articleItem.time }}</div>
          <div class="description">{{ articleItem.description }}</div>
          <div class="labels">
            <template v-for="item in articleItem.labels" :key="item.id">
              <div class="label-item">{{ item.label }}</div>
            </template>
          </div>
        </div>
      </div>
      <div class="side">
        <div class="bgimage" :style="bgImage(articleItem.imgUrl)"></div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
defineProps({
  articleItem: {
    type: Object,
    required: true,
    defalut: () => {},
  },
  artNum: {
    type: Number
  }
});
function bgImage(src) {
  return {
    backgroundImage: `url(${src})`,
  };
}
function articleDetails(articleId) {
  router.push({path:`/articledetails/${articleId}`})
}
</script>

<style lang="less" scoped>
.article-item {
  height: 250px;
  display: flex;
  border: 1px solid black;
  border-radius: 10px;
  margin: 50px 0;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    .side {
      .bgimage {
        transform: scale(1.2);
      }
    }
  }

  .side {
    flex: 5;
    overflow: hidden;
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
    // height: 250px;
    // border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;

    .article-msg {
      position: relative;
      // min-width: 550px;
      height: 200px;
      width: 100%;
      padding: 20px;
      // border: 1px solid black;

      .title {
        font-size: 20px;
        font-weight: bold;
        color: rgb(94, 76, 76);
      }

      .art-about {
        margin: 15px 0;
        font-size: 1px;
        color: gray;
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
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        border: 1px solid red;
        bottom: 0;
        .label-item {
          color: gray;
          margin: 5px 20px;
          background-color: #c0cd7a;
          border-radius: 10px;
          overflow: hidden;
          padding: 3px;
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
