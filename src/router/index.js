import { createWebHistory, createRouter } from "vue-router";
import Contador from "../components/Contador.vue";

const routes = [
  {
    path: "/",
    component: Contador,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
