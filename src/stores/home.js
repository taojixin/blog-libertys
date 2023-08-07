import { defineStore } from "pinia";
import { getArticles } from "../services";

const useHomeStore = defineStore("home", {
  state: () => ({
    aritcleList: [],
    loadHidden: true,
  }),
  actions: {
    async fetchRecommendArticles(count, offset) {
      await getArticles(count, offset).then((res) => {
        if (res.data.endResult.length === 0) {
          this.loadHidden = false;
        }
        const moreArt = res.data.endResult.map((item) => {
          item.time =
            item.time.split("T")[0] +
            " " +
            item.time.split("T")[1].substr(0, 8);
          return item;
        });
        this.aritcleList.push(...moreArt);
      });
    },
  },
});

export default useHomeStore;
