import { createApp } from "vue";
import "@/style/index.scss";
import App from "./App.vue";
import router from "@/router/router";
import VueLazyload from "vue-lazyload"; // 引入

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";

createApp(App).use(router).use(VueLazyload).mount("#app");
// register Swiper custom elements
register();
