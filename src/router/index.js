import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login"),
    meta: { title: "登陆", autoLoad: false }
  },
  {
    path: "/center",
    component: Layout,
    children: [
      {
        path: "index",
        name: "CenterIndex",
        component: () => import("@/views/center/index.vue"),
        meta: { title: "个人中心" }
      },
      {
        path: "index1",
        name: "CenterIndex1",
        component: () => import("@/views/center/index.vue"),
        meta: { title: "个人中心1" }
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
            path: "i4",
            name: "ReportHomei4",
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

router.beforeEach((form, to, next) => {
  next();
});

export default router;
