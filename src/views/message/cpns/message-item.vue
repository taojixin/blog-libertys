<template>
  <div class="message-item">
    <div class="count">47条评论</div>
    <template v-for="item in message" :key="item.id">
      <div class="one-item">
        <div class="left-box">
          <img src="http://libertys.cn/img/yuansheng/qin.png" />
        </div>
        <div class="right-box">
          <div class="first-floor">
            <div class="left">
              <span class="name">{{ item.name }}</span>
              <span class="time">{{ item.time }}</span>
            </div>
            <div class="riht">
              <i class="iconfont icon-aixin"></i>
              回复
            </div>
          </div>
          <div class="second-floor">
            <p>
              {{ item.content }}
            </p>
          </div>
          <div class="third-floor">
            <template v-for="child in item.replyMsg" :key="child.id">
              <ReplyItem :replyItem="child" />
            </template>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import ReplyItem from "./reply-item.vue";
import { onMounted, ref } from "vue";
import { getMessage } from "../../../services";

let message = ref([])
// 获取数据
onMounted(async () => {
  await getMessage(10, 0).then((res) => {
    message.value = res.data.result;
  });
});
console.log(message.value);

</script>

<style lang="less" scoped>
.message-item {
  .count {
    font-size: 30px;
    font-weight: bold;
    color: gray;
    border-bottom: 1px dotted skyblue;
    padding: 20px 0 10px 0;
  }

  .one-item {
    display: flex;
    justify-content: space-between;

    .left-box {
      border: 1px solid pink;
      width: 100px;

      img {
        width: 80px;
        height: 50px;
      }
    }
    .right-box {
      padding: 10px 10px;
      border: 1px solid pink;
      flex: 1;

      .first-floor {
        border: 1px solid black;
        display: flex;
        justify-content: space-between;
        .left {
          display: flex;
          align-items: center;
          .name {
            color: orangered;
            font-size: 30px;
            font-weight: bold;
          }
          .time {
            padding-left: 10px;
            font-size: 14px;
            color: gray;
          }
        }
      }

      .second-floor {
        padding: 30px 0;
        border: 1px solid pink;
        .reply {
          span {
            color: skyblue;
          }
        }
        p {
          text-indent: 2em;
          font-size: 20px;
          font-weight: bold;
        }
      }

      .third-floor {
        border: 1px solid red;
      }
    }
  }
}
</style>
