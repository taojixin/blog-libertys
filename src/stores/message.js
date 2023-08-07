import { defineStore } from "pinia";
import { getMessage } from "../services/index";

const useMessageStore = defineStore("message", {
  state: () => ({
    total: 0,
    messageDetails: [],
    offset: 0,
    count: 10,
  }),
  actions: {
    async fetchMessageDetails() {
      await getMessage(this.count, this.offset).then((res) => {
        this.total = res.data.total;
        this.messageDetails = res.data.result;
      });
    },
    async getMoreMessage() {},
  },
});

export default useMessageStore;
