<template>
  <div class="report-resume-page">
    <div class="g-main">
        <app-main-title title="报名填表"></app-main-title>
        <a-form-model 
          ref="ruleForm"
          :model="form"
          :rules="rules"  
          v-bind="formItemLayout"
         >
          <a-form-model-item  label="姓名">
            <a-input />
          </a-form-model-item>

          <a-form-model-item  label="英文名（汉语拼音）">
            <a-input />
          </a-form-model-item>

          <a-form-model-item label="性别">
            <a-radio-group>
              <a-radio value="a">
                男
              </a-radio>
              <a-radio value="b">
                女
              </a-radio>
            </a-radio-group>
          </a-form-model-item>

          <a-form-model-item label="出生日期">
            <a-date-picker />
          </a-form-model-item>


          <a-form-model-item label="联系电话（含区号）">
            <a-input /> 
          </a-form-model-item>

          <a-form-model-item label="手机号码">
            <a-input /> 
          </a-form-model-item>

          <a-form-model-item label="身份证号">
            <a-input /> 
          </a-form-model-item>

          <a-form-model-item label="现工作单位">
            <a-input /> 
          </a-form-model-item>

          <a-form-model-item label="学历">
            <a-input /> 
          </a-form-model-item>

          <a-form-model-item label="职务">
            <a-input /> 
          </a-form-model-item>

          <a-form-model-item label="职称">
            <a-input /> 
          </a-form-model-item>

          <a-form-model-item label="参加工作时间">
            <a-date-picker />
          </a-form-model-item>

          <a-form-model-item  label="E-mail">
            <a-input />
          </a-form-model-item>

          <a-form-model-item  label="出生地">
            <a-input />
          </a-form-model-item>

          <a-form-model-item  label="通信地址（邮编）">
            <a-input />
          </a-form-model-item>

          <a-form-model-item  label="本科学历">
            <a-input />
          </a-form-model-item>

          <a-form-model-item  label="学士学位">
            <a-input />
          </a-form-model-item>

          <a-form-model-item  label="英语水平">
            <a-input />
          </a-form-model-item>

           <a-form-model-item  label="托福或雅思成绩">
            <a-input />
          </a-form-model-item>

           <a-form-model-item  label="在何地何部门任何职（从大学开始写）">
            <a-input />
          </a-form-model-item>

          <a-form-model-item  label="起止年月">
            <a-input />
          </a-form-model-item>

          <a-form-model-item  label="备注">
            <a-textarea />
          </a-form-model-item>

          <a-form-model-item >
            <div class="submit-button">
              <a-button type="primary" size="large" @click="onSubmit">
                提交报名
              </a-button>
            </div>
          </a-form-model-item>
         
        </a-form-model>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarList:[
        {
          module: "xxxx",
          title:"111"
        }
      ],
      formItemLayout: {
        labelCol: {
          xs: { span: 12 },
          sm: { span: 7},
        },
        wrapperCol: {
          xs: { span: 12 },
          sm: { span: 12 },
        },
      },
      form: {
       
      },
      rules: {

      }
      
    }
  },
  methods: {
    onSubmit(){
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.ant-form-item{
  margin-bottom: 0px;
}

.submit-button{
  margin-top: 15px;
  text-align: right;
}
</style>
