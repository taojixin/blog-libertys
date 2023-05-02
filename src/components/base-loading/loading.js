import { createApp } from "vue";
import Loading from './index.vue'

let relativeCls = 'g-relative'

const loadingDirective = {
  // 在绑定元素的父组件及他自己的所有子节点都挂载完成后调用
  // 参数：el：指定绑定到的元素，这可以用于直接操作DOM
  //       binding.arg：传递给指令的参数 如：v-loading:foo，则foo为参数
  //       binding.value：传递给指令的值 如：v-loading="true"，则值为true
  mounted(el, binding) {
    const app = createApp(Loading)
    const instance = app.mount(document.createElement('div'))
    el.instance = instance
    // 文字
    // const title = binding.arg
    // if (typeof title !== 'undefined') {
    //   instance.setTitle(title)
    // }
    // 如果为真，则将loading组件挂载到el上
    if (binding.value) {
      append(el)
    }
  },
  // 在绑定元素的父组件及他自己的所有子节点都挂载完成后调用
  updated(el, binding) {
    // const title = binding.arg
    // if (typeof title !== 'undefined') {
    //   el.instance.setTitle(title)
    // }
    if (binding.value !== binding.oldVaue) {
      binding.value ? append(el) : remove(el)
    }
  }
}

// 添加loading
function append(el) {
  const style = getComputedStyle(el)
  // 如果el没有以下三个中的一个，则添加新的className(添加属性position:absolute)
  if (['absolute', 'fixed', 'relative'].indexOf(style.position) === -1) {
    addClass(el, relativeCls)
  }
  // el是需要挂载loading的组件，el.instance.$el是loading组件
  el.appendChild(el.instance.$el)
}
// 移除loading
function remove(el) {
  removeClass(el, relativeCls)
  el.removeChild(el.instance.$el)
}
// 添加className
function addClass(el, className) {
  if (!el.classList.contains(className)) {
    el.classList.add(className)
  }
}
//移除className
function removeClass(el, className) {
  el.classList.remove(className)
}

export default loadingDirective