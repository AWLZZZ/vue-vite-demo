<template>
  <el-container style="height: 100vh">
    <!-- 左侧菜单 -->
    <el-aside width="200px">
      <el-menu
        :default-active="$route.path"
        router
      >
        <el-menu-item index="/home">
          用户列表
        </el-menu-item>
      </el-menu>
    </el-aside>

    <!-- 右侧内容 -->
    <el-container>
      <!-- 顶部栏 -->
      <el-header
        style="display:flex; justify-content: space-between; align-items:center"
      >
        <span>后台管理系统</span>
        <el-button
          type="danger"
          size="small"
          @click="handleLogout"
        >
          退出登录
        </el-button>
      </el-header>

      <!-- 主内容区 -->
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { useUserStore } from "../stores/user";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

function handleLogout() {
  userStore.logout();
  router.push("/login");
}
</script>
