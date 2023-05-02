<template>
  <div class="reply-item">
    <div class="left-box">
      <img src="http://libertys.cn/img/yuansheng/qin.png" />
    </div>
    <div class="right-box">
      <div class="first-floor">
        <div class="left">
          <span class="name">{{ replyItem.name }}</span>
          <span class="time">{{ replyItem.time }}</span>
        </div>
        <div class="riht">
          <i class="iconfont icon-aixin"></i>
          <i class="iconfont icon-16"></i>
        </div>
      </div>
      <div class="second-floor">
        <div class="reply">
          回复:<span>{{ replyItem.name }}</span>
        </div>
        <p>
          {{ replyItem.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  replyItem: {
    type: Object,
    defaule: {},
  },
});
</script>

<style lang="less" scoped>
.reply-item {
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
          font-size: 25px;
          font-weight: bold;
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
      border: 1px solid pink;
      .reply {
        span {
          color: skyblue;
        }
      }
      p {
        text-indent: 2em;
        font-size: 15px;
      }
    }
  }
}
</style>
