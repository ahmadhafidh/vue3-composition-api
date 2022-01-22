import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Segitiga.vue"),
  },
  {
    path: "/belah-ketupat",
    name: "BelahKetupat",
    component: () => import("../views/BelahKetupat.vue"),
  },
  {
    path: "/trapesium",
    name: "Trapesium",
    component: () => import("../views/Trapesium.vue"),
  },
  {
    path: "/jajar-genjang",
    name: "JajarGenjang",
    component: () => import("../views/JajarGenjang.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;