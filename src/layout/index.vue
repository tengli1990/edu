<template>
  <div class="app-wrapper">
    <app-head />
    <!-- <div>当前位置：{{ current }}</div> -->

    <div class="app-content">
      <app-main ref="name" />
    </div>

    <app-foot />
  </div>
</template>

<script>
import { AppHead, AppMain, AppFoot } from "./components";
import { routes } from "@router";

export default {
  name: "Layout",
  components: {
    AppHead,
    AppMain,
    AppFoot
  },
  data() {
    return {
      current: "",
      routeList: routes,
    };
  },
  mounted() {
    this.current = this.$route.meta.title;
  },
  methods: {
    initSideList() {
      
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
