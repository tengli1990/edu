import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    redirect:'/login',
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login"),
    meta: { title: "登陆" }
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
      }
    ]
  },
  {
    path: "/report",
    component: Layout,
    children: [
      {
        path: "form",
        name: "ReportForm",
        component: () => import("@/views/report/form.vue"),
        meta: { title: "报名表单" },
        
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
