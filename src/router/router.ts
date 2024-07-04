import { createMemoryHistory, createRouter } from "vue-router";

import home from "@/view/home.vue";

const router = createRouter({
  history: createMemoryHistory(),
  routes: [{ path: "/", component: home }],
});

export default router;
