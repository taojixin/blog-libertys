<template>
  <div class="announcement hvr-rotate shadow-box">
    <div class="ann-title">
      <i class="iconfont icon-gonggao"></i>
      <span>公告</span>
    </div>
    <div class="content">
      <p>{{ announcement.firstP }}</p>
      <p>{{ announcement.secondP }}</p>
      <p>邮箱：{{ announcement.email }}</p>
    </div>
    <img
      class="grass"
      src="https://libertys.oss-cn-chengdu.aliyuncs.com/blog/grass.gif"
    />
  </div>
</template>

<script setup>
import { reactive } from "vue";
const announcement = reactive({
  firstP:
    "大家好，这里是我的个人博客，是一位计算机软件工程专业今年毕业的学生！此博客为第一份实习前的项目，由于实习后没有足够的时间来开发，该博客还未完成。一年左右的实习都是使用vue开发的，因此这个博客网站将不再使用vue继续开发，想使用不同的技术进行开发，后续将使用React重构该博客并增加新的功能，欢迎大家留言发表自己的意见！",
  secondP: "",
  email: "491675919@qq.com",
});
</script>

<style lang="less" scoped>
.announcement {
  height: 300px;
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow: hidden;

  .ann-title {
    display: flex;
    align-items: center;
    i {
      font-size: 30px;
      color: red;
      font-weight: bold;
    }
    span {
      margin-left: 5px;
      font-weight: bold;
      color: rgb(119, 131, 142);
    }
  }
  .content {
    p {
      padding: 0;
      margin: 0;
      text-indent: 2em;
      color: rgb(113, 82, 82);
    }
    p:last-child {
      font-weight: bold;
    }
  }
  .grass {
    width: 300px;
    height: 300px;
    position: absolute;
    bottom: -126px;
    left: 0;
  }
}
</style>
