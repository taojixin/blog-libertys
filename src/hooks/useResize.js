import { onMounted, onUnmounted, ref } from "vue";
import useScreenStore from "../stores/screen";

export default function useResize() {
  const clientWidth = ref(document.documentElement.clientWidth);
  const clientHeight = ref(document.documentElement.clientHeight);
  
  // 记录屏幕的状态
  const useScreen = useScreenStore();
  useScreen.clientWidth = clientWidth.value;
  useScreen.clientHeighta = clientHeight.value;

  // 页面第一次加载或刷新页面后 进行一次判断
  if (clientWidth.value < 700) useScreen.isSmall = true

  // 监听window创建的滚动
  const resizeListenerHandler = () => {
    clientWidth.value = document.documentElement.clientWidth;
    clientHeight.value = document.documentElement.clientHeight;

    useScreen.clientWidth = clientWidth.value;
    useScreen.clientHeight = clientHeight.value;

    if (clientWidth.value < 700) {
      useScreen.isSmall = true
    } else {
      useScreen.isSmall = false
    }
  };

  // 挂载的时候添加监听
  onMounted(() => {
    window.addEventListener("resize", resizeListenerHandler);
  });
  // 卸载的时候移除监听
  onUnmounted(() => {
    window.removeEventListener("resize", resizeListenerHandler);
  });

  return { clientHeight, clientWidth };
}
