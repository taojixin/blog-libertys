<template>
  <transition name="panel">
    <!-- 留言面板 -->
    <div class="reply-panle">
      <div class="msg">
        <i class="iconfont icon-liuyan"></i>
        <span>{{ title }}</span>
      </div>
      <div class="msg-box">
        <!-- 留言身份信息 -->
        <div class="first-floor">
          <div class="name">
            <div>昵称</div>
            <input type="text" placeholder="(必填)" v-model.trim="name" />
          </div>
          <div class="qq">
            <div>QQ号</div>
            <input type="text" placeholder="(可选)" v-model.trim="qq" />
          </div>
        </div>
        <!-- 留言内容 -->
        <div class="second-floor">
          <div class="text">
            <textarea
              spellcheck="false"
              placeholder="若填写了QQ号，自动获取QQ昵称和头像；若未填写则评论头像随机。"
              v-model.trim="content"
            ></textarea>
            <div class="count">{{ content.length }}/400</div>
          </div>
        </div>
        <!-- 留言按钮 -->
        <div class="third-floor">
          <div class="right-third">
            <div class="send" @click="sendMsg">发 送</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";
import { sendMessage, commentArtMsg } from "../../services/index";
import Message from "../../components/base-message/message";

const emit = defineEmits(["updateMessage"]);
const props = defineProps({
  replyType: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: () => "",
  },
  reply: {
    type: Boolean,
    required: true,
  },
  replyId: {
    type: Number,
    required: true,
  },
  articleId: {
    type: Number,
  },
});

let name = ref("");
let qq = ref("");
let content = ref("");

function sendMsg() {
  // 1.判断内容是否符合要求
  if (
    name.value.length > 12 ||
    name.value.length === 0 ||
    content.value.length === 0 ||
    content.value.length > 400 ||
    qq.value.length > 10
  ) {
    return Message({
      type: "error",
      text: "昵称长度为1~12， 内容长度为1~400，QQ号为数字且不能超过10位！",
    });
  }
  // 2.内容符合要求后判断回复类型是哪种类型：message:留言 article:文章的评论
  if (props.replyType === "message") {
    // 2.1：类型为message
    sendMessage(
      name.value,
      content.value,
      qq.value,
      props.reply,
      props.replyId
    ).then((res) => {
      if (res.code === 200) {
        Message({ type: "success", text: "留言成功！" });
        emit("updateMessage");
      } else {
        console.log(res);
        Message({ type: "error", text: "留言失败！请检查内容" });
      }
    });
  } else if (props.replyType === "article") {
    // 2.2：类型为article
    commentArtMsg(
      name.value,
      qq.value,
      content.value,
      props.articleId,
      props.reply,
      props.replyId
    ).then((res) => {
      console.log(res, "artId", props.articleId);
      if (res.code === 200) {
        Message({ type: "success", text: "评论成功！" });
        emit("updateMessage");
      } else {
        console.log(res);
        Message({ type: "error", text: "评论失败！请检查内容" });
      }
    });
  } else {
    Message({ type: "error", text: "评论失败！请联系站长！" });
  }
  // 3.清空内容
  name.value = "";
  qq.value = "";
  content.value = "";
}
</script>

<style lang="less" scoped>
.reply-panle {
  border-bottom: 5px dotted var(--purpleColor);
  .msg {
    height: 60px;
    .iconfont {
      font-size: 50px;
      font-weight: bold;
      color: var(--purpleColor);
    }
    span {
      font-size: 30px;
      font-weight: bold;
      color: var(--purpleColor);
    }
  }

  .msg-box {
    display: flex;
    flex-direction: column;
    align-items: center;

    // border: 1px solid black;
    padding: 10px 30px;

    .first-floor {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .name,
      .qq {
        height: 40px;
        width: 100%;
        margin: 5px 10px;
        border-radius: 5px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        flex: 1;
        overflow: hidden;
        min-width: 300px;

        div {
          height: 38px;
          padding: 0 20px;
          line-height: 38px;
          background-color: var(--purpleBg);
          color: var(--purpleColor);
        }

        input {
          flex: 1;
          height: 37px;
          border: none;
          padding: 0 5px;
          // border-left: 1px solid gray;
          outline: none;
          color: #7b5f97;
          font-weight: bold;
        }
      }
    }
    .second-floor {
      width: 100%;
      .text {
        position: relative;
        .count {
          position: absolute;
          bottom: 10px;
          right: 10px;
          color: var(--purpleBg);
        }
        textarea {
          width: 100%;
          height: 200px;
          padding: 10px;
          color: var(--purpleColor);
          border: 3px solid var(--purpleBorder);
          outline: none;
          resize: none;
          box-sizing: border-box;
        }
      }
    }
    .third-floor {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;

      .right-third {
        width: 100%;
        .send {
          width: 100px;
          height: 40px;
          line-height: 40px;
          margin-top: 8px;
          float: right;
          text-align: center;
          border-radius: 3px;
          user-select: none;
          &:hover {
            cursor: pointer;
          }
        }
        .send {
          color: var(--purpleColor);
          background-color: var(--purpleBg);
          transition: all 0.5s;
          &:hover {
            font-weight: bold;
            font-size: 20px;
            background-color: #c69cf0;
          }
        }
      }
    }
  }
}


@media (max-width: 500px) {
  .reply-panle {
    .msg-box {
      padding: 0;
      .first-floor {
        .name,.qq {
          margin: 5px 0;
          font-size: 14px;
        }

      }
      .second-floor {
        .text {
          textarea {
            font-size: 14px;
          }
        }
      }
      .third-floor {
        .right-third {
          .send {
            width: 70px;
            height: 40px;
            line-height: 40px;
            margin-right: 10px;
          }
        }
      }
    }
  }
  
}


.panel-enter-from,
.panel-leave-to {
  filter: blur(10px);
  opacity: 0.5;
}

.panel-enter-to,
.panel-leave-from {
  filter: blur(0px);
  opacity: 1;
}

.panel-enter-active,
.message-leave-active {
  transition: all 1s ease;
}
</style>
