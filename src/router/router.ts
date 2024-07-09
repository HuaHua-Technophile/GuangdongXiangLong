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
      path: "/Manufacturing",
      name: "生产制造",
      component: () => import("@/view/Manufacturing.vue"),
    },
    {
      path: "/Green_Industrial_Park",
      name: "绿色产园",
      component: () => import("@/view/Green_Industrial_Park.vue"),
    },
    {
      path: "/Edible_Flavors",
      name: "食用香精",
      component: () => import("@/view/Edible_Flavors.vue"),
    },
    {
      path: "/Tobacco_Flavorings",
      name: "烟用香精",
      component: () => import("@/view/Tobacco_Flavorings.vue"),
    },
    {
      path: "/Sales_Network",
      name: "营销网络",
      component: () => import("@/view/Sales_Network.vue"),
    },
  ],
});

export default router;
