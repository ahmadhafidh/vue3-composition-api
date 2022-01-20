import { createRouter, createWebHistory } from "vue-router";
import Home from "../App.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/belahketupat",
    name: "BelahKetupat",
    component: () => import("@/views/BelahKetupat.vue"),
  },
  {
    path: "/trapesium",
    name: "Trapesium",
    component: () => import("@/views/Trapesium.vue"),
  },
  {
    path: "/jajargenjang",
    name: "JajarGenjang",
    component: () => import("@/views/JajarGenjang.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
