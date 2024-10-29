import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import ArgonDashboard from "./argon-dashboard";

createApp(App)
  .use(store)
  .use(router)
  .use(ArgonDashboard)
  .mount("#app");
