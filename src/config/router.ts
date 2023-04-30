import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Host from "../pages/Host/Host.vue";
import About from "../pages/About.vue";
import Vans from "../pages/Vans.vue";
import VanItem from "../pages/VanItem.vue";

//Nested Host Routes
import Dashboard from "../pages/Host/Dashboard.vue";
import Income from "../pages/Host/Income.vue";
import Reviews from "../pages/Host/Reviews.vue";
import HostVanItem from "../pages/Host/HostVans/HostVanItem.vue";
import HostVans from "../pages/Host/HostVans/HostVans.vue";
//Nested Host Host Van specific details
import HostVanDetails from "@/pages/Host/HostVans/HostVanDetails/HostVanDetails.vue";
import HostVanPricing from "@/pages/Host/HostVans/HostVanDetails/HostVanPricing.vue";
import HostVanPhotos from "@/pages/Host/HostVans/HostVanDetails/HostVanPhotos.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    {
      path: "/host/",
      name: "Host",
      component: Host,
      children: [
        {
          path: "",
          redirect: { name: "Dashboard" },
        },
        {
          path: "dashboard",
          name: "Dashboard",
          component: Dashboard,
          alias: "dashboard",
        },
        { path: "income", name: "Income", component: Income },
        {
          path: "vans/",
          children: [
            {
              path: "",
              name: "HostVans",
              component: HostVans,
            },
            {
              path: ":id/",
              name: "HostVanItem",
              component: HostVanItem,
              props: route => route.query,
              children: [
                {
                  path: "",
                  name: "HostVanDetails",
                  component: HostVanDetails,
                  props: route => route.query,
                },
                {
                  path: "pricing",
                  name: "HostVanPricing",
                  component: HostVanPricing,
                  props: route => route.query,
                },
                {
                  path: "photos",
                  name: "HostVanPhotos",
                  component: HostVanPhotos,
                  props: route => route.query,
                },
              ],
            },
          ],
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
