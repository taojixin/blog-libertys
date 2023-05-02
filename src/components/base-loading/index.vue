<template>
  <div class="base-loading">
    <div class="loading-content">
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     title: "正在加载。。"
  //   }
  // },
  // methods: {
  //   setTitle(title) {
  //     this.title = title
  //   }
  // }
}
</script>

<style lang="less" scoped>
.base-loading {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // border: 1px solid pink;
  .loading-content {
    height: 101px;
    // border: 1px solid red;
    position: relative;
    background-image: url(../../assets/images/gif/loading.gif);
    background-size: 145.92px 101.12px;
    background-position: 50% -150%;
    p {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 12px;
    }
  }
  img {
    width: 145.92px;
    height: 101.12px;
    border: 1px solid black;
  }
}

</style>
