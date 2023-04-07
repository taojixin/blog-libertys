import { onMounted, onUnmounted, reactive, ref, toRefs } from "vue";

export default function useScroll(refEl) {
  let el = window;

  const isReachBottem = ref(false);
  const clientHeight = ref(0);
  const scrollTop = ref(0);
  const scrollHeight = ref(0);
  
  const scrollValue = reactive({
    clientHeight: 0,
    scrollTop: 0,
    scrollHeight: 0
  })
  // 监听元素创建的滚动
  const resizeListenerHandler = () => {
    if (el === window) {
      clientHeight.value = document.documentElement.clientHeight;
      scrollTop.value = document.documentElement.scrollTop;
      scrollHeight.value = document.documentElement.scrollHeight;

      scrollValue.clientHeight = document.documentElement.clientHeight;
      scrollValue.scrollTop = document.documentElement.scrollTop;
      scrollValue.scrollHeight = document.documentElement.scrollHeight;
    } else {
      clientHeight.value = el.clientHeight;
      scrollTop.value = el.scrollTop;
      scrollHeight.value = el.scrollHeight;
    }

    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      isReachBottem.value = true;
      console.log("到达底部");
    }
    console.log("sdf");
  };

  // 挂载的时候添加监听
  onMounted(() => {
    if (refEl) el = refEl.value;
    el.addEventListener("scroll", resizeListenerHandler);
  });
  // 卸载的时候移除监听
  onUnmounted(() => {
    el.removeEventListener("scroll", resizeListenerHandler);
  });

  return toRefs(scrollValue);
}
