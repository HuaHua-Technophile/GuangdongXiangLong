import { createWebHistory, createRouter } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "集团简介", component: () => import("@/view/Home.vue") },
    {
      path: "/Corporate_Culture",
      name: "企业文化",
      component: () => import("@/view/Corporate_Culture.vue"),
    },
    {
      path: "/RD_System",
      name: "研发体系",
      component: () => import("@/view/RD_System.vue"),
    },
    {
      path: "/Quality_Management",
      name: "品质管理",
      component: () => import("@/view/Quality_Management.vue"),
    },
    {
      path: "/Green_Industrial_Park",
      name: "绿色产园",
      component: () => import("@/view/Green_Industrial_Park.vue"),
    },
    {
      path: "/IP",
      name: "产权专利",
      component: () => import("@/view/IP.vue"),
    },
    {
      path: "/Food_Flavoring",
      name: "食用香精",
      component: () => import("@/view/Food_Flavoring.vue"),
    },
    {
      path: "/Tobacco_Flavoring",
      name: "烟用香精",
      component: () => import("@/view/Tobacco_Flavoring.vue"),
    },
    {
      path: "/Sales_Network",
      name: "营销网络",
      component: () => import("@/view/Sales_Network.vue"),
    },
  ],
});

export default router;
