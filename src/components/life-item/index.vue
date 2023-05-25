<template>
  <div class="life-item">
    <div class="first-floor">
      <div class="left">
        <img src="../../assets/avatar.jpg" alt="" srcset="" />
      </div>
      <div class="right">
        <div class="content">
          <p>
            {{ lifeItem.content }}
          </p>
          <template v-for="(child, index) in lifeItem.imgUrl" :key="index">
            <img :src="child" alt="" />
          </template>
        </div>
        <div class="bottom">
          <div class="time">
            <i class="iconfont icon-shijian"></i>
            <div>{{ lifeItem.time }}</div>
          </div>
          <div class="like">
            <i class="iconfont icon-icon1"></i>
            <div>({{ lifeItem.like }})</div>
          </div>
          <div class="comment" @click="comment(lifeItem.id)">
            <i class="iconfont icon-liuyan"></i>
          </div>
          <div class="fold" @click="comment(lifeItem.id)">
            {{ fold }}
          </div>
        </div>
      </div>
    </div>
    <div class="second-floor" v-show="isShow === lifeItem.id">
      <ReplyPanel
        :title="'评论'"
        :replyType="'life'"
        :reply="false"
        :replyId="0"
      />
      <ReplyDetails :replyType="'life'" :message="[]" :total="0" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ReplyPanel from "../reply-panel/index.vue";
import ReplyDetails from "../reply-details/index.vue";
defineProps({
  lifeItem: {
    type: Object,
  },
});

const fold = ref("展开");
const isShow = ref(0);
function comment(id) {
  if (id === isShow.value) {
    isShow.value = 0;
    fold.value = "展开";
  } else {
    fold.value = "收起";
    isShow.value = id;
  }
}
</script>

<style lang="less" scoped>
.life-item {
  width: 100%;
  padding: 5px 10px 40px;
  margin: 10px 0;
  background-color: #f2f2f2;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .first-floor {
    position: relative;
    display: flex;
    .left {
      width: 150px;
      height: 100%;
      display: flex;
      justify-content: center;
      img {
        width: 80px;
        height: 80px;
        border-radius: 20px;
        margin: 0 auto;
        border: 3px solid skyblue;
      }
    }
    .right {
      position: relative;
      flex: 1;
      .content {
        min-height: 130px;
        position: relative;
        border-radius: 20px;
        background-color: skyblue;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 5px 10px;
        p {
          text-indent: 2em;
          color: rgb(119, 115, 115);
        }
        img {
          width: 150px;
          height: 150px;
          border: 3px solid white;
        }
        &::before {
          content: "";
          position: absolute;
          top: 20px;
          left: -28px;
          border-top: 15px solid transparent;
          border-bottom: 15px solid transparent;
          border-left: 15px solid transparent;
          border-right: 15px solid skyblue;
        }
      }
      .bottom {
        height: 30px;
        width: 100%;
        position: absolute;
        bottom: -35px;
        left: 5px;
        display: flex;
        align-items: center;
        .time {
          display: flex;
          justify-content: center;
          align-content: center;
          i {
            font-size: 30px;
            margin-right: 5px;
          }
          div {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        .like {
          right: 100px;
          display: flex;
          justify-content: center;
          align-content: center;
          i {
            margin-right: 3px;
          }
        }
        .comment {
          right: 54px;
        }
        .fold {
          right: 10px;
          border-bottom: 3px solid gray;
        }
        .like,
        .comment,
        .fold {
          position: absolute;
          transition: all 0.5s;
          div {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          i {
            font-size: 30px;
          }
          &:hover {
            transform: scale(1.2);
            cursor: pointer;
          }
        }
      }
    }
  }
  .second-floor {
    margin-top: 40px;
    // border: 1px solid red;
    border-top: 5px dotted skyblue;
    // transform: scale(.8);
  }
}
@media (max-width: 500px) {
  .life-item {
    .first-floor {
      .left {
        width: 80px;
        img {
          width: 70px;
          height: 70px;
        }
      }
      .right {
        padding: 0 5px;
        .content {
          img {
            width: 100px;
            height: 100px;
          }
          &::before {
            left: -13px;
            border-top: 7px solid transparent;
            border-bottom: 7px solid transparent;
            border-left: 7px solid transparent;
            border-right: 7px solid skyblue;
          }
        }
        .bottom {
          .time {
            div {
              font-size: 12px;
            }
            i {
              margin-right: 3px;
              font-size: 14px;
            }
          }
          .like {
            right: 88px;
            font-size: 12px;
          }
          .like,
          .comment,
          .fold {
            i {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
