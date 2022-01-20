import { createRouter, createWebHistory } from "vue-router";
import Home from "../App.vue";
import BelahKetupat from "../components/FormBK.vue";
// import JajarGenjang from "@/components/ViewJG.vue";
// import Trapesium from "@/components/ViewTrapesium.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/belahketupat", name: "BelahKetupat", component: BelahKetupat },
  // { path: "/jajargenjang", name: "JajarGenjang", component: JajarGenjang },
  // { path: "/trapesium", name: "Trapesium", component: Trapesium },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
