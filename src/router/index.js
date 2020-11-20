import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/center",
    component: Layout,
    children: [
      {
        path: "index",
        name: "CenterIndex",
        component: () => import("@/views/center/index.vue"),
        meta: { title: "个人中心" },
        children: [
          {
            path: "i1",
            name: "CenterIndexi1",
            component: () => import("@/views/center/index.vue"),
            meta: { title: "个人中心1" }
          }
        ]
      }
    ]
  },
  {
    path: "/report",
    component: Layout,
    children: [
      {
        path: "form",
        name: "ReportHome",
        component: () => import("@/views/report/form.vue"),
        meta: { title: "报名表单" },
        children: [
          {
            path: "form",
            name: "ReportHome",
            component: () => import("@/views/report/form.vue"),
            meta: { title: "报名表单" }
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
