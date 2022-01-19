import { createRouter, createWebHistory } from "vue-router";
import BelahKetupat from "@/components/BelahKetupat.vue";
import JajarGenjang from "@/components/JajarGenjang.vue";
import Trapesium from "@/components/Trapesium.vue";

const routes = [
  { path: "/belahketupat", name: "BelahKetupat", component: BelahKetupat },
  { path: "/jajargenjang", name: "JajarGenjang", component: JajarGenjang },
  { path: "/trapesium", name: "Trapesium", component: Trapesium },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
