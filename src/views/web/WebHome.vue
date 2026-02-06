<template>
  <div class="page">
    <header class="header">
      <h1>My Product</h1>
      <nav>
        <a href="#features">功能</a>
        <a href="#pricing">价格</a>
        <a href="/login">后台</a>
      </nav>
    </header>

    <section class="hero">
      <h2>一个示例产品</h2>
      <p>这是一个用 Vue + Vite 构建的产品型前端页面</p>
      <button @click="goAdmin">进入后台</button>
    </section>

    <section class="features" id="features">
      <h3>核心功能</h3>
      <ul>
        <li v-for="item in features" :key="item">
          {{ item }}
        </li>
      </ul>
    </section>

    <section class="cards">
      <div
        class="card"
        v-for="product in products"
        :key="product.id"
      >
        <h4>{{ product.name }}</h4>
        <p>{{ product.desc }}</p>
      </div>
    </section>

    <footer class="footer">
      © 2026 My Product
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const features = [
  "前后端分离",
  "后台管理系统",
  "权限控制",
  "快速部署",
];

const products = [
  { id: 1, name: "标准版", desc: "适合个人用户" },
  { id: 2, name: "专业版", desc: "适合小团队" },
  { id: 3, name: "企业版", desc: "适合企业客户" },
];

const goAdmin = () => {
  router.push("/login");
};
</script>

<style scoped>
.page {
  font-family: system-ui, -apple-system, BlinkMacSystemFont;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  border-bottom: 1px solid #eee;
}

.header nav a {
  margin-left: 16px;
  text-decoration: none;
  color: #333;
}

.hero {
  padding: 80px 40px;
  background: #f5f7fa;
}

.hero button {
  margin-top: 16px;
  padding: 10px 20px;
}

.features {
  padding: 40px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 40px;
}

.card {
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 6px;
}

.footer {
  text-align: center;
  padding: 20px;
  color: #888;
}
</style>
