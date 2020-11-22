<template>
  <div id="app">
    <a-config-provider :locale="this.$store.getters.locale">
      <router-view />
    </a-config-provider>
  </div>
</template>
<script>
export default {
  data() {
      return {
      };
    },
    created(){
    }
}
</script>
