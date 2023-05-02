<template>
  <div class="announcement shadow-box">
    <div class="ann-title">
      <i class="iconfont icon-gonggao"></i>
      <span>公告</span>
    </div>
    <div class="content">
      <p>
        大家好，这里是我的个人博客，是一位计算机软件工程专业即将面临找工作的大三学生！
      </p>
      <p>此博客博主打算长期维护与改进，欢迎大家留言发表自己的意见！</p>
      <p>邮箱：491675919@qq.com</p>
    </div>
    <img class="grass" src="http://img.libertys.cn/blog/grass.gif" alt="" srcset="">
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.announcement {
  height: 300px;
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;

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
