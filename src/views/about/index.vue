<template>
  <transition name="initial">
    <div class="about" v-show="isShow">
      <NavBar />
      <WebHeader :title="title" :sentense="sentense" :bgImgUrl="bgImgUrl" />
      <div class="second-floor">
        <button @click="messageClick">点击挂载</button>
        <!-- <base-message /> -->
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";
import Message from "../../components/base-message/message";
import WebHeader from "../../components/web-header/index.vue";

const title = "关于";
const sentense = "须知少时凌云志，曾许人间第一流!";
const bgImgUrl = "https://libertys.oss-cn-chengdu.aliyuncs.com/blog/bg3.jpg";
const isShow = ref(false);

const instance = getCurrentInstance();
onMounted(() => {
  isShow.value = true;
  // instance.proxy.$message({type: "warn", text: "djfsla"})
});
function messageClick() {
  // instance.proxy.$message({ type: "warn", text: "djfsla" });
  Message({ type: "warn", text: "djfsla" });
}
</script>

<style lang="less" scoped></style>
