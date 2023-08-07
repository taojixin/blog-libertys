<template>
  <footer class="footer">
    <a href="https://beian.miit.gov.cn" target="_blank"
      >蜀ICP备2022007017号-1</a
    >
  </footer>
</template>

<script setup></script>

<style lang="less" scoped>
.footer {
  height: 30px;
  padding: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: #5796e3;
    font-size: 20px;
  }
}
@media (max-width: 749px) {
  .footer {
    height: 20px;
    a {
      font-size: 14px;
    }
  }
}
</style>
