import { defineStore } from "pinia";
import { getAllLabels } from "../services";
import { randomColor } from "../utils/randomColor";
const useArticleStore = defineStore("article", {
  state: () => ({
    labels: [],
    wordData: [],
  }),
  actions: {
    async fetchLabels() {
      await getAllLabels().then((res) => {
        const result = res.data.result.map((item) => {
          const randColor = randomColor();
          return {
            id: item.id,
            label: item.label,
            color: randColor.color,
            bgColor: randColor.bgColor,
            articleCount: item.articleCount,
          };
        });
        this.labels = result;
        this.wordData = result.map((item) => {
          let arr = [];
          arr.push(item.label);
          arr.push(item.articleCount);
          return arr;
        });
      });
    },
  },
});

export default useArticleStore;
