import { createRouter, createWebHistory } from "vue-router";

import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import WebHome from "../views/web/WebHome.vue";
import AdminLayout from "../layout/AdminLayout.vue";
import { useUserStore } from "../stores/user";

const routes = [
  // 🌐 普通前端（不需要登录）
  {
    path: "/web",
    component: WebHome,
  },

  // 🔐 后台登录
  {
    path: "/login",
    component: Login,
  },

  // 🧩 后台 Layout
  {
    path: "/",
    component: AdminLayout,
    children: [
      {
        path: "home",
        component: Home,
      },
    ],
  },

  // 🏠 默认入口
  {
    path: "/",
    redirect: "/web",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 路由守卫
router.beforeEach((to) => {
  const userStore = useUserStore();

  if (!userStore.isLogin && to.path === "/home") {
    return "/login";
  }

  if (userStore.isLogin && to.path === "/login") {
    return "/home";
  }
});

export default router;
