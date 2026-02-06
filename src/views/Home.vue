import { getUserList } from "../api/user";
<script setup>
import { ref, onMounted } from "vue";
import { useUserStore } from "../stores/user";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

// 列表数据
const list = ref([]);
// loading 状态
const loading = ref(true);

onMounted(async () => {
  try {
    const data = await getUserList();
    list.value = data;
  } catch (err) {
    console.error("请求失败", err);
  } finally {
    loading.value = false;
  }
});

function handleLogout() {
  userStore.logout();
  router.push("/login");
}
</script>

<template>
  <div>
    <h2>首页</h2>
    <p>当前用户：{{ userStore.username }}</p>
    <button @click="handleLogout">退出登录</button>

    <hr />

    <p v-if="loading">加载中...</p>

    <ul v-else>
      <li v-for="item in list" :key="item.id">
        {{ item.name }} - {{ item.email }}
      </li>
    </ul>
  </div>
</template>


