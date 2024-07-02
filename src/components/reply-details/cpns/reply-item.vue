<template>
  <div class="reply-item">
    <div class="left-box">
      <div class="avatar" :style="setAvatar(replyItem.qq)"></div>
    </div>
    <div class="right-box">
      <div class="first-floor">
        <div class="left">
          <span class="name">{{ replyItem.name }}</span>
          <div class="floor">{{ floor + 1 }}楼</div>
          <span class="time">{{ formatTime(replyItem.time) }}</span>
        </div>
      </div>
      <div class="second-floor">
        <div class="reply">
          回复:<span>{{ replyName }}</span>
        </div>
        <p>
          {{ replyItem.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { formatTime } from "../../../utils/formatTime";
defineProps({
  replyItem: {
    type: Object,
    defaule: {},
  },
  replyName: {
    type: String,
  },
  floor: {
    type: Number,
  },
});

function setAvatar(qq) {
  if (qq.length === 0) {
    return {
      backgroundImage: `url(https://libertys.oss-cn-chengdu.aliyuncs.com/rock/%E7%A6%8F%E7%86%99%E6%B0%B4%E7%81%B5.png)`,
    };
  }
  return {
    backgroundImage: `url(https://q.qlogo.cn/headimg_dl?dst_uin=${qq}&spec=640&img_type=jpg)`,
  };
}
</script>

<style lang="less" scoped>
.reply-item {
  border-top: 2px solid rgb(179, 175, 175);
  padding-top: 10px;
  display: flex;
  justify-content: space-between;

  .left-box {
    // border: 1px solid pink;
    width: 100px;

    .avatar {
      width: 60px;
      height: 60px;
      margin: 0 auto;
      border-radius: 60px;
      background-size: cover;
      background-position: center center;
    }
  }
  .right-box {
    padding: 10px;
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
          color: var(--blueColor);
          font-size: 25px;
          font-weight: bold;
        }
        .floor {
          background-color: rgb(184, 173, 173);
          padding: 3px;
          border-radius: 3px;
          color: white;
          margin: 0 10px;
        }
        .time {
          padding-left: 10px;
          font-size: 12px;
          color: gray;
        }
      }
    }

    .second-floor {
      padding: 10px 0;
      // border: 1px solid pink;
      .reply {
        color: gray;
        font-size: 12px;
        span {
          color: skyblue;
          font-size: 20px;
        }
      }
      p {
        text-indent: 2em;
        font-size: 15px;
        background-color: #bfe1ef;
        color: rgb(92, 88, 88);
        padding: 5px 10px;
        border-radius: 10px;
        margin: 10px 0;
      }
    }
  }
}
@media (max-width: 500px) {
  .reply-item {
    // border: 1px solid red;
    .left-box {
      // border: 1px solid black;
      width: 50px;
      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 40px;
      }
    }
    .right-box {
      padding: 0;
      .first-floor {
        .left {
          margin-top: 5px;
          .name {
            width: 60px;
            font-size: 13px;
            // 文字超出省略
            overflow: hidden;
            text-overflow: ellipsis; // 产出部分省略
            display: -webkit-box;
            -webkit-line-clamp: 1; // 最多显示四行
            -webkit-box-orient: vertical;
          }
          .floor {
            font-size: 12px;
          }
        }
      }
      .second-floor {
        // border: 1px solid blue;
        padding: 5px 0;
        .reply {
          span {
            font-size: 14px;
          }
        }
        p {
          padding: 5px;
          margin: 5px 0;
        }
      }
    }
  }
}
</style>
