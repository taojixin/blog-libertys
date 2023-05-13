// export default {
//   install(app) {
//     app.directive("lazyload", {
//       mounted(el, bindings) {
//         // el - dom元素，bindings - 指令的值
//         const observer = new IntersectionObserver(
//           ([{ isIntersecting }]) => {
//             if (isIntersecting) {
//               observer.unobserve(el);
//               // 表示绑定的 dom 进入可视区域
//               el.src = bindings.value;
//               // 图片加载出错时，显示默认图片
//               el.onerror = () => {
//                 el.src = 'https://img.libertys.cn/blog/load1.gif';
//               };
//             }
//           },
//           {
//             threshold: 0,
//           }
//         );
//         // 监视 dom
//         observer.observe(el);
//       },
//     });
//   },
// };

const loadLazyDirective = {
  mounted(el, bindings) {
    // el - dom元素，bindings - 指令的值
    const observer = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          // 停止监听dom
          observer.unobserve(el);
          el.src = bindings.value;
          // 图片加载出错时，显示默认图片
          el.onerror = () => {
            el.src = 'https://img.libertys.cn/blog/load1.gif';
          };
        }
      },
      {
        threshold: 0,
      }
    );
    // 监视 dom
    observer.observe(el);
  },
}

export default loadLazyDirective
