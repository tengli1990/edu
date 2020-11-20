<template>
  <div class="app-sidebar">
    <ul>
      <li
        class="item"
        :class="{ current: currentPath == route.path }"
        v-for="(route, index) in data"
        :key="index"
        @click="onSideTab(route)"
      >
        {{ route.meta.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app-sidebar",
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentPath: ""
    };
  },
  components: {},
  computed: {},
  created() {
    this.$route.path.match(/\/(\w*\d*)/g);
    this.currentPath = RegExp.$1;
  },
  methods: {
    onSideTab(route) {
      if (route.path == this.currentPath) {
        return;
      }
      this.$router.push({
        path: this.$route.path + "/" + route.path
      });
    }
  }
};
</script>

<style lang="less" scoped>
.app-sidebar {
  width: 250px;
  min-height: 250px;
  float: left;
  background: #fff;
  ul {
    li.current {
      background: #ccc;
    }
  }
}
</style>
