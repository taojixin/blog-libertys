<template>
  <div class="reply-details" v-if="total !== 0">
    <!-- 总共多少评论 -->
    <div class="count">
      共 <span style="color: #cc52dc">{{ total }}</span> 条评论
    </div>
    <!-- 遍历渲染每一条评论 -->
    <template v-for="item in message" :key="item.id">
      <div class="one-item">
        <!-- 左侧头像 -->
        <div class="left-box">
          <div class="avatar" :style="setAvatar(item.qq)"></div>
        </div>
        <!-- 右侧详情 -->
        <div class="right-box">
          <!-- 第一层：昵称，时间等信息 -->
          <div class="first-floor">
            <div class="left">
              <span class="name">{{ item.name }}</span>
              <span class="time">{{ formatTime(item.time) }}</span>
            </div>
            <div class="right">
              <i class="iconfont icon-aixin"></i>
              <div
                class="reply"
                :class="{ active: item.id === replyOtherId }"
                @click="replyOther(item.id)"
              >
                回复
              </div>
            </div>
          </div>
          <!-- 第二层：内容 -->
          <div class="second-floor">
            <p>
              {{ item.content }}
            </p>
          </div>
          <!-- 回复面板 -->
          <ReplyPanel
            v-show="item.id === replyOtherId"
            :title="'回复'"
            :reply="true"
            :replyId="item.id"
            :replyType="replyType"
            :articleId="articleId"
            @updateMessage="updateMsg"
            style="transform: scale(0.9)"
          />
          <!-- 其他人对该评论的评论 -->
          <div class="third-floor">
            <template v-for="(child,index) in item.replyMsg" :key="child.id">
              <ReplyItem :replyItem="child" :replyName="item.name" :floor="index" />
            </template>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import ReplyItem from "./cpns/reply-item.vue";
import ReplyPanel from "../reply-panel/index.vue";

import { ref } from "vue";
import useMessageStore from "../../stores/message";
import { formatTime } from "../../utils/formatTime";

const emit = defineEmits(['updateArtMsg'])
const props = defineProps({
  replyType: {
    type: String,
    required: true,
  },
  message: {
    type: Array,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  articleId: {
    type: Number,
  }
});

// 更新数据
const useMessage = useMessageStore();
function updateMsg() {
  replyOtherId.value = 0
  if (props.replyType === "message") {
    useMessage.fetchMessageDetails();
  } else if (props.replyType === 'article') {
    emit('updateArtMsg')
  }
}

// 设置头像
function setAvatar(qq) {
  if (qq.length === 0) {
    return {
      backgroundImage: `url(https://img.libertys.cn/rock/%E7%A6%8F%E7%86%99%E6%B0%B4%E7%81%B5.png)`,
    };
  }
  return {
    backgroundImage: `url(https://q.qlogo.cn/headimg_dl?dst_uin=${qq}&spec=640&img_type=jpg)`,
  };
}

// 回复按钮高亮
const isActive = ref(false);
const replyOtherId = ref(0);
function replyOther(replyId) {
  if (replyOtherId.value === replyId) {
    replyOtherId.value = 0;
    isActive.value = false;
  } else {
    replyOtherId.value = replyId;
    isActive.value = true;
  }
}
</script>

<style lang="less" scoped>
.reply-details {
  .count {
    font-size: 30px;
    font-weight: bold;
    color: rgb(133, 133, 222);
    border-bottom: 1px dotted skyblue;
    padding: 20px 0 10px 0;
  }

  .one-item {
    border-bottom: 2px solid var(--blueBg);
    margin: 5px 0;
    display: flex;
    justify-content: space-between;

    .left-box {
      width: 100px;

      .avatar {
        width: 70px;
        height: 70px;
        border-radius: 70px;
        margin: 0 auto;
        background-size: cover;
        background-position: center center;
      }
    }
    .right-box {
      padding: 10px 10px;
      // border: 1px solid pink;
      flex: 1;

      .first-floor {
        // border: 1px solid black;
        display: flex;
        justify-content: space-between;
        .left {
          display: flex;
          align-items: center;
          .name {
            color: #2096c5;
            font-size: 30px;
            font-weight: bold;
          }
          .time {
            padding-left: 10px;
            font-size: 14px;
            color: gray;
          }
        }
        .right {
          display: flex;
          .reply {
            width: 50px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #8cd3f0;
            color: #0f85b4;
            border-radius: 5px;
            transition: all 0.5s;

            &:hover {
              cursor: pointer;
              background-color: #23ade4;
              color: gray;
              // transform: scale(1.3);
              // margin: 0 10px;
            }
          }
        }
      }

      .second-floor {
        // padding: 30px 0;
        // border-bottom: 2px solid rgb(176, 173, 173);
        margin-bottom: 10px;
        .reply {
          span {
            color: skyblue;
          }
        }
        p {
          text-indent: 2em;
          font-size: 20px;
          font-weight: bold;
          background-color: var(--blueBg);
          border-radius: 10px;
          margin: 5px 10px;
          padding: 5px 10px;
        }
      }

      .third-floor {
        // border: 1px solid red;
      }
    }
  }
}
.active {
  background-color: #23ade4 !important;
  color: gray !important;
  transform: scale(1.3);
  margin: 0 10px;
}
</style>
