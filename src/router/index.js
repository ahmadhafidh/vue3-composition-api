import { createRouter, createWebHistory } from "vue-router";
import Home from "../App.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/belahketupat", name: "BelahKetupat", component: () => import("@/components/BKview.vue") },
  // { path: "/jajargenjang", name: "JajarGenjang", component: JajarGenjang },
  // { path: "/trapesium", name: "Trapesium", component: Trapesium },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
