<template>
  <div class="website-info shadow-box">
    <div class="website-title">
      <i class="iconfont icon-guanyu2"></i>
      <span>关于本站</span>
    </div>
    <div class="content">
      <div class="article-num">文章数目：<span>51</span></div>
      <div class="label-num">标签数目：<span>16</span></div>
      <div class="visitor-num">总访客量：<span>241</span></div>
      <div class="visitor-num">最近更新：<span>2023-04-11</span></div>
      <div class="exist-time">运行时间：<span>1000+小时</span></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.website-info {
  width: 300px;
  height: 270px;
  box-sizing: border-box;
  padding: 20px;
  margin-bottom: 40px;

  .website-title {
    display: flex;
    align-items: center;
    i {
      font-size: 30px;
      color: rgb(17, 166, 225);
      font-weight: bold;
    }
    span {
      margin-left: 5px;
      font-weight: bold;
      color: rgb(119, 131, 142);
    }
  }
  .content {
    div {
      font-weight: bold;
      color: rgb(152, 85, 85);
      margin: 20px 20px;

      span {
        font-size: 14px;
        color: gray;
      }
    }
  }
}
</style>
