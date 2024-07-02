<template>
  <div class="article-details">
    <!-- 加载动画 -->
    <div class="loading" v-if="loading">
      <img src="https://libertys.oss-cn-chengdu.aliyuncs.com/blog/load1.gif" />
    </div>
    <!-- 顶部图片 -->
    <div class="first" :style="bgImage(artDetails.imgUrl)">
      <div class="title">{{ artDetails.title }}</div>
    </div>
    <!-- 内容 -->
    <div class="second">
      <!-- 标签、时间等信息 -->
      <div class="details">
        <div class="labels">
          <template v-for="item in artDetails.labels" :key="item.id">
            <div class="labels-item">
              {{ item.label }}
            </div>
          </template>
        </div>
        <div class="time">
          <i class="iconfont icon-shijian"></i>
          {{ time }}
        </div>
      </div>
      <!-- 详细内容 -->
      <div class="content-box markdown-body" v-html="artDetails.content"></div>
      <ReplyPanel
        :replyType="'article'"
        :title="'评论'"
        :reply="false"
        :replyId="0"
        :articleId="artDetails.id"
        v-show="!isHidden"
        @updateMessage="updateMsg"
      />
      <ReplyDetails
        :replyType="'article'"
        :message="artMessage"
        :total="total"
        :articleId="artDetails.id"
        @updateArtMsg="updateMsg"
      />
    </div>
    <!-- 快捷按钮 -->
    <ShortcutBtn />
  </div>
</template>

<script setup>
import ReplyPanel from "../reply-panel/index.vue";
import ReplyDetails from "../reply-details/index.vue";
import ShortcutBtn from "../shortcut-btn/index.vue";

import { onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import { getArtDetails, getCertainArtMsg } from "../../services/index";
import { formatTime } from "../../utils/formatTime";

const route = useRoute();
const router = useRouter();

const isHidden = ref(true);

const loading = ref(true);
const articleId = route.params.articleId;
// 文章信息
let artDetails = reactive({});
const time = ref("1970-01-01");
// 评论信息
let artMessage = ref([]);
const total = ref(0);
onMounted(async () => {
  await getArtDetails(articleId).then((res) => {
    if (res.code === -1) {
      router.back();
    } else {
      console.log(res.data.result);
      loading.value = false;
      artDetails = res.data.result[0];
    }
  });
  time.value = formatTime(artDetails.time);
  isHidden.value = false;
  // 获取评论信息
  await getCertainArtMsg(articleId).then((res) => {
    artMessage.value = res.data.result;
    total.value = res.data.total;
  });
});
function bgImage(src) {
  return {
    backgroundImage: `url(${src})`,
  };
}
function updateMsg() {
  getCertainArtMsg(articleId).then((res) => {
    artMessage.value = res.data.result;
    total.value = res.data.total;
  });
}
</script>

<style lang="less" scoped>
.article-details {
  padding-bottom: 200px;
  .loading {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    height: 100vh;
    width: 100vw;
    background-color: white;
    z-index: 99;
  }
  .first {
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(128, 128, 128, 0.8);
    font-size: 50px;
    font-weight: bold;
    height: 300px;
    background-size: cover;
    background-position: center center;
  }
  .second {
    width: 60vw;
    margin: 0 auto;
    .details {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      background-color: #ffffff;
      border-bottom: 3px dotted gray;
      .labels {
        flex: 1;
        display: flex;
        .labels-item {
          margin: 5px;
          padding: 5px;
          height: 20px;
          border-radius: 5px;
          color: var(--purpleColor);
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--purpleBg);
        }
      }
      .time {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        font-size: 14px;
        color: gray;
        i {
          font-weight: bold;
          font-size: 20px;
          margin-right: 3px;
        }
      }
    }
    .content-box {
      padding: 20px;
    }
  }
}
@media (max-width: 749px) {
  .article-details {
    .second {
      width: 100vw;
    }
  }
}
</style>
