<template>
  <div class="app-main-title">
    <div class="title"> {{title}}</div>
  </div>
</template>

<script>
  export default {
    name:'app-main-title',
    props: {
      title: {
        type: String,
        default:''
      },
    }
  }
</script>

<style lang="less" scoped>
.app-main-title{
  font-weight: bold;
  padding:20px 0px;
  margin-top: -30px;
  font-size:18px;
}
</style>