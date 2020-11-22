<template>
  <div class="app-footer">
    <section class="footer-content">
       <div class="friend-links">
         <a href="">A公司</a>
         <a href="">B公司</a>
         <a class="single" href="">备案号：123LSF-SFDf</a>
       </div>
       <div class="record-no">
         备案号：123LSF-SFDf
       </div>
    </section>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less" scoped>
  .app-footer{
    margin-top: 10px;
    padding: 15px 0;
    background:#333;
    // height:120px;
  }

  .footer-content{
    width: 1200px;
    margin: 0 auto;
    color: #fff;
  }

  .friend-links{
    text-align: center;
    & :first-child:before{
      display:none;
    }
    a{
      position: relative;
      display:inline-block;
      color:#fff;
      padding:0 10px;
      &:before{
        content:'';
        position:absolute;
        right:100%;
        top:50%;
        width:1px;
        height:10px;
        margin-top: -5px;
        background:#fff;
      }
    }
    a.single{
      margin-left: 30px;
      &:before{
        display: none;
      }
    }
  }
  .record-no{
    padding-top: 10px;
    color:#fff;
    text-align: center;
  }
</style>