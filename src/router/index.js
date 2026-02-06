import { createRouter, createWebHistory } from "vue-router";

import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import WebHome from "../views/web/WebHome.vue";
import AdminLayout from "../layout/AdminLayout.vue";
import { useUserStore } from "../stores/user";

const routes = [
  // 🌐 普通前端
  {
    path: "/web",
    component: WebHome,
  },

  // 🔐 后台登录
  {
    path: "/login",
    component: Login,
  },

  // 🧩 后台（明确用 /admin）
  {
    path: "/admin",
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

router.beforeEach((to) => {
  const userStore = useUserStore();

  // 未登录禁止进后台
  if (!userStore.isLogin && to.path.startsWith("/admin")) {
    return "/login";
  }

  // 已登录禁止回登录页
  if (userStore.isLogin && to.path === "/login") {
    return "/admin/home";
  }
});

export default router;
