<template>
  <div class="center-page">
    <!-- <app-sidebar :data="sidebarList"></app-sidebar> -->
    <div class="resume-main g-main">
      <app-main-title title="个人信息"></app-main-title>
      <table class="table-box">
        <tbody class="first-module">
          <tr>
            <td>
              <ul class="li-table">
                <li class="w50"><span>姓名</span></li>
                <li class="w150"><span>sfsd</span></li>
                <li><span>英文名（汉语拼音）</span></li>
                <li class="w200"><span>xxx</span></li>
                <li class="w50"><span>性别</span></li>
                <li class="w50"><span>女</span></li>
              </ul>
            </td>
            <td class="head-portrait" rowspan="5">
              <img  src="https://lh3.googleusercontent.com/proxy/mwlt_XUtiXIPYePcCayaQJatntFJkAyPZxeaDY9VSJSuT9Y9wkn-KLxBWwhY8afId1aRuFsV4opWjN-3LHdgxzxsdzB-pUA16g" alt="">
            </td>
          </tr>
          <tr>
            <td>
              <div class="second-line">
                 <ul class="li-table">
                  <li class="w50 m50">出生<br>日期</li>
                  <li class="w35b">sfsd</li>
                  <li class="w30b">
                    <div class="child-table">
                      <div class="item">联系电话（含区号）</div>
                      <div class="item">手机号码</div>
                    </div>
                  </li>
                  <li class="w30b">
                    <div class="child-table">
                      <div class="item">联系电话（含区号）</div>
                      <div class="item">手机号码</div>
                    </div>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <ul class="li-table">
                <li class="w100">身份证件号码</li>
                <li class="w5b" v-for="(n,index) in id" :key="index">{{n}}</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <ul class="li-table">
                <li class="w100"><span>现工作单位</span></li>
                <li class="w90b a-l"><span>1231312</span></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
            <ul class="li-table">
              <li class="w60"><span>学历</span></li>
              <li class="w30b"><span>本科</span></li>
              <li class="w10b"><span>职务</span></li>
              <li class="w30b "><span>助理员</span></li>
              <li class="w10b "><span>职称</span></li>
              <li class="w30b "><span>高教师</span></li>
            </ul>
            </td>
          </tr>
        </tbody>

        <tbody>
          
          <tr>
            <td>
              <ul class="li-table">
                <li class="w150"><span>参加工作时间</span></li>
                <li class="w30b"><span>xxxx</span></li>
                <li class="w150"><span>E-mail地址</span></li>
                <li class="w30b"><span>xxxx</span></li>
                <li class="w100"><span>出生地</span></li>
              </ul>
            </td>
            <td>
              <ul class="li-table">
                <li><span>xxxx</span></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <ul class="li-table">
                <li class="w150"><span>通信地址（邮编）</span></li>
                <li class="w90b a-l"><span>xxxx</span></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <ul class="li-table">
                <li class="w80"><span>本科学历</span></li>
                <li class="w90b a-l"><span>1231312</span></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <ul class="li-table">
                <li class="w80"><span>学士学位</span></li>
                <li class="w40b a-l"><span>xxxx</span></li>
                <li class="w150"><span>获学士以上学位时间</span></li>
                <li class="w40b a-l"><span>xxxx</span></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <ul class="li-table">
                    <li class="w80"><span>英语水平</span></li>
                    <li class="w40b a-l"><span>xxxx</span></li>
                    <li class="w150"><span>托福或雅思成绩</span></li>
                    <li class="w40b a-l"><span>xxxx</span></li>
                </ul>
            </td>
          </tr>
          
        </tbody>

        <tr>
          <td colspan="2">
             <ul class="li-table">
               <li class="w30"><span>个人简介</span></li>
               <li class="w50b">
                  <div class="child-table">
                    <div class="item h30">联系电话（含区号）</div>
                    <div class="item a-l"><span>手机号码</span></div>
                  </div>
               </li>
               <li class="w50b">
                 <div class="child-table">
                    <div class="item h30">xxxx</div>
                    <div class="item a-l"><span>xxxx</span></div>
                  </div>
               </li>
             </ul>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <ul class="li-table">
              <li class="w150"><span>备&ensp;&ensp;注</span></li>
              <li class="w90b a-l"><span>xxxx</span></li>
            </ul>
          </td>
        </tr>

        <tr>
          <td colspan="2" align="center">以上各项由参考人填写</td>
        </tr>

        <tr>
          <td colspan="2">
             <div class="examine">
                审核意见：
                <div class="seal">
                  <p>招生单位盖章</p>
                  <p>2020年11月20日</p>
                </div>
             </div>
          </td>
        </tr>

        <tr>
          <td colspan="2">
            <div class="text">报名编号（xxxx）</div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      id:'110224199012223817',
      sidebarList:[
        {
          module:true,
          title:'个人中心',
        },{
          path:'/report/form',
          name:'个人中心'
        }
      ]
    }
  },
  created(){
  },
  methods:{
    
  }
};
</script>

<style lang="less" scoped>
.table-box,
.table-box tr td {
  border: 1px solid #333;
  line-height: 40px;
  padding:0;
  .text{
    padding:5px 15px;
  }
}

.table-box {
  width: 100%;
  border-collapse: collapse;
}

.first-module {
  width: 100%;
}
.head-portrait {
  width: 180px;
}

.li-table{
  height: 100%;
  width: 100%;
  display: table;
  & :first-child{
    border: none;
  }
  li{
    display:table-cell;
    padding:0px;
    text-align: center;
    border-left:1px solid #333;
    height:100%;
    line-height: 30px;
    vertical-align: middle;
    span{
      display: inline-block;
      padding:5px 10px;
      line-height: 24px;
    }
    
    &.vt{
      vertical-align:top;
    }
  }
  .child-table{
    width: 100%;
    height:100%;
    display:table;
    & .item:first-child{
      border: none;
    }
    .item{
      border-collapse: collapse;
      display:table-row;
      vertical-align:middle;
      border-top:1px solid #333;
      &.h30{
        height: 30px;
      }
    } 
  }  
}

// 审核意见
.examine{
  position: relative;
  padding: 5px 15px;
  min-height: 150px;
  .seal{
    position: absolute;
    bottom:10px;
    right: 60px;
    line-height: 24px;
  }
}

.head-portrait{
  height:100%;
  img{
    width:181px;
    height:198px;
  }
}
</style>
