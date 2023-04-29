import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Host from "../pages/Host/index.vue";
import About from "../pages/About.vue";
import Vans from "../pages/Vans.vue";
import VanItem from "../pages/VanItem.vue";

//Nested Host Routes
import Dashboard from "../pages/Host/Dashboard.vue";
import Income from "../pages/Host/Income.vue";
import Reviews from "../pages/Host/Reviews.vue";
import HostVanItem from "../pages/Host/HostVans/HostVanItem.vue";
import HostVans from "../pages/Host/HostVans/HostVans.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home, children: [] },
    {
      path: "/host/",
      name: "Host",
      component: Host,
      children: [
        { path: "dashboard", name: "Dashboard", component: Dashboard },
        { path: "income", name: "Income", component: Income },
        { path: "vans", name: "HostVans", component: HostVans },
        {
          path: "vans/:id",
          name: "HostVanItem",
          component: HostVanItem,
          props: route => route.query,
        },
        { path: "reviews", name: "Reviews", component: Reviews },
      ],
    },
    {
      path: "/about/",
      name: "About",
      component: About,
    },
    {
      path: "/vans/",
      name: "Vans",
      component: Vans,
    },
    {
      path: "/vans/:id",
      name: "VanItem",
      component: VanItem,
    },
  ],
});

export default router;
