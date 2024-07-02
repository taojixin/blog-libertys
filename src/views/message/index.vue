<template>
  <transition name="initial">
    <div class="message" v-show="isShow">
      <NavBar />
      <WebHeader :title="title" :sentense="sentense" :bgImgUrl="bgImgUrl" />
      <div class="second-floor">
        <MessageReadme />
        <ReplyPanel
          :title="'留言'"
          :replyType="'message'"
          :reply="true"
          :replyId="0"
          @updateMessage="updateMsg"
        />
        <ReplyDetails
          :replyType="'message'"
          :message="messageDetails"
          :total="total"
        />
      </div></div
  ></transition>
</template>

<script setup>
import ReplyPanel from "../../components/reply-panel/index.vue";
import ReplyDetails from "../../components/reply-details/index.vue";
import MessageReadme from "./cpns/message-readme.vue";

import WebHeader from "../../components/web-header/index.vue";

import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";

import useMessageStore from "../../stores/message";

const title = "留言";
const sentense = "须知少时凌云志，曾许人间第一流!";
const bgImgUrl = "https://libertys.oss-cn-chengdu.aliyuncs.com/blog/bg4.jpg";

const isShow = ref(false);
onMounted(() => {
  isShow.value = true;
});

// 获取评论信息
const messageStore = useMessageStore();
messageStore.fetchMessageDetails();
const { messageDetails, total } = storeToRefs(messageStore);

// 评论后更新评论列表
function updateMsg() {
  messageStore.fetchMessageDetails();
}
</script>

<style lang="less" scoped>
.message {
  .second-floor {
    width: 80vw;
    // border: 1px solid black;
    margin: 20px auto;
    padding: 20px 20px;
  }
}

@media (max-width: 500px) {
  .message {
    .second-floor {
      width: 95vw;
      // border: 1px solid red;
      margin: 10px 10px;
      padding: 10px 0;
    }
  }
}
</style>
