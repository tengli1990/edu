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
         <div class="card">
           <h3>个人信息</h3>
         
            <a-form-model-item  label="姓名">
              <a-input />
            </a-form-model-item>

            <a-form-model-item  label="英文名（汉语拼音）">
              <a-input />
            </a-form-model-item>

            <a-form-model-item label="头像">
              <a-upload
                name="avatar"
                list-type="picture-card"
                class="avatar-uploader"
                :show-upload-list="false"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                :before-upload="beforeUpload"
                @change="handleChange"
              >
                <img v-if="form.imageUrl" :src="form.imageUrl" alt="avatar" />
                <a-icon v-else size="large" :type="loading ?  'loading' : 'user-add'" style="font-size:35px;color:#999;" />
              </a-upload>
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
          </div>


          <div class="card">
            <h3>个人信息</h3>
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
          </div>

          <div class="card">
            <h3>个人信息</h3>
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
          </div>

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
// import enUS from 'ant-design-vue/lib/locale-provider/en_US';
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
          sm: { span: 8},
        },
        wrapperCol: {
          xs: { span: 12 },
          sm: { span: 12 },
        },
      },
      form: {
       
      },
      rules: {
      
      },
      loading:false,

      
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
    },
    handleChange(info) {
      if (info.file.status === 'uploading') {
        this.loading = true;
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        this.$getImgBase64(info.file.originFileObj, imageUrl => {
          this.form.imageUrl = imageUrl;
          this.loading = false;
          console.log(this.form.imageUrl)
        });
      }
    },
    beforeUpload(file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.$message.error('You can only upload JPG file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error('Image must smaller than 2MB!');
      }
      return isJpgOrPng && isLt2M;
    },
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

.avatar-uploader {
  margin-top: 10px;
  margin-bottom: -20px;
}

.card{
  padding:20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
}
</style>
