<template>
  <div class="app-wrapper">
    <app-head />
    <!-- <div>当前位置：{{ current }}</div> -->
    <div class="app-content">
      {{ sideList }}
      <Sidebar :data="sideList" />
      <app-main ref="name" />
    </div>
  </div>
</template>

<script>
import { AppHead, Sidebar, AppMain } from "./components";
import { routes } from "@router";

export default {
  name: "Layout",
  components: {
    AppHead,
    Sidebar,
    AppMain
  },
  data() {
    return {
      current: "",
      sideList: [],
      routeList: routes
    };
  },
  watch: {
    $route: {
      handler(newVal) {
        console.log(newVal);
        this.initSideList(newVal);
      }
    }
  },
  computed: {},
  mounted() {
    this.current = this.$route.meta.title;
    console.log(this.$route);
    this.initSideList(this.$route);
  },
  methods: {
    initSideList(newVal) {
      routes.forEach(route => {
        const routeChild = route.children[0];
        newVal.path.match(/\/(\w*\d*)/g);
        if (
          routeChild.name === newVal.name ||
          routeChild.name + RegExp.$1 === newVal.name
        ) {
          this.$set(this, "sideList", route.children[0].children || []);
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.app-content {
  width: 1200px;
  margin: 10px auto 0;
}
</style>
