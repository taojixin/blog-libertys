import { defineStore } from "pinia";

const useScreenStore = defineStore("screen", {
  state: () => ({
    // 屏幕宽度
    clientWidth: 0,
    // 屏幕高度
    clientHeight: 0,
    // 屏幕宽度是否小于749
    isSmall: false
  }),
  actions: {
  },
});

export default useScreenStore;
