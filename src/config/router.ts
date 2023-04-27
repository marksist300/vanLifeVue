import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Vans from "../pages/Vans.vue";
import VanItem from "../pages/VanItem.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/vans",
      name: "Vans",
      component: Vans,
    },
    {
      path: "/vans/:id",
      name: "VansItem",
      component: VanItem,
    },
  ],
});

export default router;
