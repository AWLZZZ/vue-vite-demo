import { createRouter, createWebHistory } from "vue-router";

import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import AdminLayout from "../layout/AdminLayout.vue";
import { useUserStore } from "../stores/user";

const routes = [
  {
    path: "/login",
    component: Login,
  },

  // 后台 Layout
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

  // 访问根路径时的默认行为
  {
    path: "/",
    redirect: "/login",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 路由守卫（保持你原来的逻辑）
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

