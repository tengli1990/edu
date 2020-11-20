<template>
  <div class="app-head">
    <div class="banner"></div>
    <div class="navbar">
      <ul>
        <li
          :class="{
            current: isCurrent(route.path, route)
          }"
          v-for="(route, index) in routeList"
          :key="index"
          @click="onTab(route.path, route)"
        >
          {{ route.children[0].meta.title }}
        </li>
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
  computed: {},
  methods: {
    isCurrent(parentPath, route) {
      const { path } = route.children[0];
      const fullPath = parentPath + "/" + path;
      return fullPath === this.$route.path;
    },
    onTab(parentPath, route) {
      const { path } = route.children[0];
      const fullPath = parentPath + "/" + path;
      if (this.$route.path === fullPath) {
        return;
      }
      this.$router.push({
        path: fullPath
      });
    }
  }
};
</script>

<style lang="less" scoped>
.app-head {
  height: 140px;
  background: #fff;
}
.banner {
  height: 100px;
}
.navbar {
  height: 40px;
  line-height: 40px;
  background: #3dbcc6;
}
ul {
  width: 1200px;
  margin: 0 auto;
}
ul li {
  cursor: pointer;
  display: inline-block;
  margin: 0 10px;
  padding: 0 20px;
  color: #fff;
  &.current {
    background: #128b94;
  }
}
</style>
