<template>
  <div class="app-sidebar">
    <ul>
      <template v-for="(item, index) in data">
        <li class="module-title" :key="index" v-if="item.module">
          {{item.title}}
        </li>
        <li class="item" :key="index" @click="onSideTab(item)" v-else>
          {{item.name}}
        </li>
      </template>
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
    onSideTab(item) {
      this.$router.push({
        path: item.path
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

    li.module-title{
      background:linear-gradient(#ddd,#f6f6f6);
      font-weight: bold;
      padding:0 15px;
      line-height: 40px;
    }

    li.item{
      padding:0 15px;
      border-bottom:1px dotted #d8d8d8;
      line-height: 40px;
    }
  }
}
</style>
