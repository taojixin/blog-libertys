<template>
  <div class="introduction hvr-wobble-skew shadow-box">
    <img src="../../../assets/avatar.jpg" class="hvr-buzz-out"/>
    <div class="author">Libertys</div>
    <div class="info">
      <div class="info-item">
        <span>文章</span>
        <span>61</span>
      </div>
      <div class="info-item">
        <span>标签</span>
        <span>28</span>
      </div>
    </div>
    <div class="contact">
      <i class="iconfont icon-QQ-circle-fill"></i>
      <a href="https://github.com/taojixin" target="_blank"><i class="iconfont icon-github-fill"></i></a>
      <i class="iconfont icon-weixin2"></i>
      <i class="iconfont icon-csdn1"></i>
    </div>
    <img class="grass" src="https://img.libertys.cn/blog/grass.gif" alt="" srcset="">
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.introduction {
  height: 300px;
  width: 300px;
  margin-bottom: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin: 20px 0 10px 0;
  }
  .author {
    font-size: 25px;
    font-weight: bold;
    color: gray;
  }
  .info {
    display: flex;

    .info-item {
      font-size: 14px;
      color: rgb(101, 87, 87);
      margin: 20px 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      span {
        color: rgb(94, 80, 80);
      }
      span:last-child {
        margin-top: 5px;
        font-weight: bold;
      }
    }
  }
  .contact {
    z-index: 99;
    i {
      font-size: 30px;
      margin: 0 10px;
      color: rgb(68, 84, 84);
    }
  }
  .grass {
    width: 300px;
    height: 300px;
    position: absolute;
    bottom: -136px;
  }
}
</style>
