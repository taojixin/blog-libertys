import { defineStore } from "pinia";

const usePhoneStore = defineStore("phone", {
  state: () => ({
    albumInfo: [],
  }),
  actions: {
    async fetchPhoneMsg() {
      this.albumInfo = [
        {
          id: 1,
          title: "山城重庆",
          describe: "美丽重庆!",
          phoneUrl: [
            "https://img.libertys.cn/test/%E8%AE%B0%E5%BD%95%E6%92%92%E6%97%A6%E5%8F%91%E5%B0%84%E7%82%B9.jpg",
            "https://img.libertys.cn/test/%E6%98%AF.jpg",
            "https://img.libertys.cn/test/%E5%8F%91%E7%94%9F%E7%9A%84%E7%9A%84%E6%96%B9%E5%BC%8F.jpg",
            "https://img.libertys.cn/test/test.png",
            "https://img.libertys.cn/test/df.jpg",
          ],
        },
        {
          id: 2,
          title: "洛克王国",
          describe: "洛克王国宠物!",
          phoneUrl: [
            "https://img.libertys.cn/rock/%E4%BA%91%E4%B8%BE%E7%91%B6%E9%B9%BF.png",
            "https://img.libertys.cn/rock/%E5%9C%A3%E6%B9%AE%E4%BC%8A%E8%8E%B1%E5%A8%9C.png",
            "https://img.libertys.cn/rock/%E7%A0%B4%E6%99%93%E5%87%AF%E7%91%9E%E8%80%8C.png",
            "https://img.libertys.cn/rock/%E7%A6%8F%E7%86%99%E6%B0%B4%E7%81%B5.png",
            "https://img.libertys.cn/rock/%E9%9D%92%E9%92%9F%E7%BF%BE%E7%8B%90.png",
          ],
        },
        {
          id: 3,
          title: "山城重庆",
          describe: "美丽重庆!",
          phoneUrl: [
            "https://img.libertys.cn/test/%E8%AE%B0%E5%BD%95%E6%92%92%E6%97%A6%E5%8F%91%E5%B0%84%E7%82%B9.jpg",
            "https://img.libertys.cn/test/%E6%98%AF.jpg",
            "https://img.libertys.cn/test/%E5%8F%91%E7%94%9F%E7%9A%84%E7%9A%84%E6%96%B9%E5%BC%8F.jpg",
            "https://img.libertys.cn/test/test.png",
            "https://img.libertys.cn/test/df.jpg",
          ],
        },
        {
          id: 4,
          title: "山城重庆",
          describe: "美丽重庆!",
          phoneUrl: [
            "https://img.libertys.cn/test/%E8%AE%B0%E5%BD%95%E6%92%92%E6%97%A6%E5%8F%91%E5%B0%84%E7%82%B9.jpg",
            "https://img.libertys.cn/test/%E6%98%AF.jpg",
            "https://img.libertys.cn/test/%E5%8F%91%E7%94%9F%E7%9A%84%E7%9A%84%E6%96%B9%E5%BC%8F.jpg",
            "https://img.libertys.cn/test/test.png",
            "https://img.libertys.cn/test/df.jpg",
            "https://img.libertys.cn/test/%E8%AE%B0%E5%BD%95%E6%92%92%E6%97%A6%E5%8F%91%E5%B0%84%E7%82%B9.jpg",
            "https://img.libertys.cn/test/%E6%98%AF.jpg",
            "https://img.libertys.cn/test/%E5%8F%91%E7%94%9F%E7%9A%84%E7%9A%84%E6%96%B9%E5%BC%8F.jpg",
            "https://img.libertys.cn/test/test.png",
            "https://img.libertys.cn/test/%E8%AE%B0%E5%BD%95%E6%92%92%E6%97%A6%E5%8F%91%E5%B0%84%E7%82%B9.jpg",
            "https://img.libertys.cn/test/%E6%98%AF.jpg",
            "https://img.libertys.cn/test/%E5%8F%91%E7%94%9F%E7%9A%84%E7%9A%84%E6%96%B9%E5%BC%8F.jpg",
            "https://img.libertys.cn/test/test.png",
            "https://img.libertys.cn/test/%E8%AE%B0%E5%BD%95%E6%92%92%E6%97%A6%E5%8F%91%E5%B0%84%E7%82%B9.jpg",
            "https://img.libertys.cn/test/%E6%98%AF.jpg",
            "https://img.libertys.cn/test/%E5%8F%91%E7%94%9F%E7%9A%84%E7%9A%84%E6%96%B9%E5%BC%8F.jpg",
            "https://img.libertys.cn/test/test.png",
          ],
        },
      ];
    },
  },
});

export default usePhoneStore;
