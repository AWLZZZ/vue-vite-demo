import { createRouter, createWebHistory } from "vue-router";

import Login from "../views/Login.vue";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/",
    redirect: "/login",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
import { useUserStore } from "../stores/user";

router.beforeEach((to) => {
  const userStore = useUserStore();

  // 未登录，想去 home → 拦截
  if (!userStore.isLogin && to.path === "/home") {
    return "/login";
  }

  // 已登录，还想去 login → 拦截
  if (userStore.isLogin && to.path === "/login") {
    return "/home";
  }
});

export default router;
