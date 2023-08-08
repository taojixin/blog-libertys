import { defineStore } from "pinia";
import { getAllLabels, getArticles } from "../services";
import { randomColor } from "../utils/randomColor";
const useArticleStore = defineStore("article", {
  state: () => ({
    labels: [],
    wordData: [],
    newArticles: [],
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
    async fetchNewArticles(count, offset) {
      await getArticles(count, offset).then((res) => {
        this.newArticles = res.data.endResult.map((item) => {
          item.time =
            item.time.split("T")[0] +
            " " +
            item.time.split("T")[1].substr(0, 8);
          return item;
        });
      });
    },
  },
});

export default useArticleStore;
