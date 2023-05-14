import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./config/router";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUser, faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarOutline } from "@fortawesome/free-solid-svg-icons";

window.addEventListener("storage", () => {});
/* add icons to the library */
library.add(faUser, faStar, faStarOutline);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
