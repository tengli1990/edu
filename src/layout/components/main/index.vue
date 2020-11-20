<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </section>
</template>

<script>
export default {
  name: "app-main",
  components: {},
  data() {
    return {
      page: "首页",
      signOff: "退出登录"
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang="less" scoped>
.app-main {
  margin-left: 260px;
  min-height: 200px;
  background: #fff;
}
</style>
