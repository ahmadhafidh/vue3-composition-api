import { createRouter, createWebHistory } from "vue-router";
import Segitiga from "@/views/Segitiga.vue";
import BelahKetupat from "@/views/BelahKetupat.vue";
import Trapesium from "@/views/Trapesium.vue";
import JajarGenjang from "@/views/JajarGenjang.vue";

const routes = [
  {
    path: "/",
    name: "Segitiga",
    component: Segitiga,
  },
  {
    path: "/belah-ketupat",
    name: "BelahKetupat",
    component: BelahKetupat,
  },
  {
    path: "/trapesium",
    name: "Trapesium",
    component: Trapesium,
  },
  {
    path: "/jajar-genjang",
    name: "JajarGenjang",
    component: JajarGenjang,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
