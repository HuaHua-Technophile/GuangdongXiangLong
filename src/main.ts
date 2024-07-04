import { createApp } from "vue";
import "@/style/index.scss";
import App from "./App.vue";
import router from "@/router/router";
createApp(App).use(router).mount("#app");

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
