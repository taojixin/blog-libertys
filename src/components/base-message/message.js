// 通过函数的方式调用组件，如：Message({ type: "warn", text: "警告" })
import { createVNode, render } from "vue";
import BaseMessage from "./index.vue";

// 准备一个容器放message组件并添加到body中
const div = document.createElement("div");
div.setAttribute("class", "message-container");
document.body.appendChild(div);

let timer = null;

// 函数方式导出，传入两个参数
export default ({ type, text }) => {
  // 创建虚拟节点
  const vnode = createVNode(BaseMessage, { type, text });
  // 将节点渲染到实现准备的容器中
  render(vnode, div);
  // 一定时间后移除message
  clearTimeout(timer);
  timer = setTimeout(() => {
    render(null, div);
  }, 3000);
};
