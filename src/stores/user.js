import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    isLogin: localStorage.getItem("isLogin") === "true",
    username: localStorage.getItem("username") || "",
  }),

  actions: {
    login(name) {
      this.isLogin = true;
      this.username = name;

      localStorage.setItem("isLogin", "true");
      localStorage.setItem("username", name);
    },

    logout() {
      this.isLogin = false;
      this.username = "";

      localStorage.removeItem("isLogin");
      localStorage.removeItem("username");
    },
  },
});
