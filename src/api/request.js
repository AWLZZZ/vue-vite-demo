import axios from "axios";

const service = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 这里将来可以统一加 token
    // const token = localStorage.getItem("token");
    // if (token) config.headers.Authorization = token;

    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 只返回 data，页面更干净
    return response.data;
  },
  (error) => {
    console.error("请求错误：", error);
    return Promise.reject(error);
  }
);

export default service;
