<script setup>
import { useUserStore } from "../stores/user";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

function handleLogin() {
  userStore.login("Tom");
  router.push("/home");
}
</script>

<template>
  <div>
    <h2>登录页</h2>
    <button @click="handleLogin">模拟登录</button>
  </div>
</template>

