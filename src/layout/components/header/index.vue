<template>
  <div class="app-head">
    <div class="site">
      <div class="site-main">
        <a href="">某某人</a>
        <a @click="onLogin">登陆</a>
        <a class="" href="">退出登录</a>
      </div>
    </div>
    <div class="banner"></div>
    <div class="navbar">
      <ul class="navul">
        <template v-for="(route, index) in routeList">
          <li
            class="navli"
            :class="{
              current: isCurrent(route.path, route)
            }"
            :key="index"
            @click="onTab(route.path, route)"
            v-if="route.children"
          >
            {{ route.children[0].meta.title }}
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import { routes } from "@router";
export default {
  name: "app-head",
  components: {},
  data() {
    return {
      routeList: routes
    };
  },
  methods: {
    isCurrent(parentPath, route) {
      const { path } = route.children[0];
      const fullPath = parentPath + "/" + path;
      return fullPath === this.$route.path;
    },
    onTab(parentPath, route) {
      if (!route.children) {
        return false;
      }
      const { path } = route.children[0];
      const fullPath = parentPath + "/" + path;
      if (this.$route.path === fullPath) {
        return;
      }
      this.$router.push({
        path: fullPath
      });
    },
    onLogin(){
      this.$router.push({
        path:'/login',
        query:{
          redirect:encodeURIComponent(this.$route.fullPath)
        }
      })
    }
  }
};
</script>

