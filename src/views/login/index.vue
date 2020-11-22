<template>
  <div class="login-index">
    <div class="login-form">
      <h3 class="title">手机号登陆</h3>
      <a-form :model="formInline" @submit="handleSubmit" @submit.native.prevent>
        <a-form-item>
          <a-input
            size="large"
            v-model="formInline.user"
            type="number"
            placeholder="请输入手机号"
          >
          </a-input>
        </a-form-item>
        <a-form-item>
          <div class="check">
            <div class="d1">
              <a-input
                v-model="formInline.password"
                type="number"
                size="large"
                maxlength="6"
                placeholder="请输入验证码"
              >
              </a-input>
            </div>
            <div class="">
              <a-button
                type="primary"
                :disabled="codeBtnText !== '获取验证码'"
                class="code"
                size="large"
                @click="getCode()"
              >
                {{ codeBtnText }}
              </a-button>
            </div>
          </div>
        </a-form-item>

        <a-form-item>
          <a-button
            class="submit-btn"
            type="primary"
            size="large"
            html-type="submit"
            block
            :disabled="isCanSubmit"
          >
            登陆
          </a-button>
        </a-form-item>
      </a-form>
    </div>

    <a-modal
      v-model="visible"
      width="350px"
      :maskClosable="false"
      :footer="null"
      @ok="handleOk"
    >
      <div class="model">
        <div class="title">请输入图片所示内容</div>
        <div class="model-img-code">
          <a-input
            size="large"
            v-model="modelImgCode"
            placeholder="请输入图片验证码"
          ></a-input>
          <a href=""><img
              src=""
              alt=""/>
          </a>
        </div>
        <a-button class="model-button" size="large" block type="primary">确定</a-button
        >
      </div>
    </a-modal>
  </div>
</template>

<script>
const CODE_BTN_TEXT = "获取验证码";
export default {
  components: {},
  data() {
    return {
      codeBtnText: CODE_BTN_TEXT,
      formInline: {
        user: "",
        password: ""
      },
      visible: false,
      modelImgCode: ""
    };
  },
  computed: {
    isCanSubmit() {
      return this.formInline.user === "" || this.formInline.password === "";
    }
  },
  methods: {
    getCode() {
      this.visible = true;
    },
    handleOk() {},
    handleSubmit(e) {
      console.log(e, this.formInline);
    }
  }
};
</script>

<style lang="less" scoped>
.login-index {
  height: 100%;
  overflow: hidden;
  background: url("https://coloredbrain.com/wp-content/uploads/2016/07/login-background.jpg")
    no-repeat center top / cover;
  // background: url("https://www.bird-wittenbergdental.com/wp-content/uploads/2017/01/top-line-management-login-background-1.jpg")
  //   no-repeat center top / cover;
}

.login-form {
  display: block;
  width: 380px;
  padding: 0 25px 25px;
  margin: 125px auto 0;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  .title {
    font-weight: bold;
    font-size: 18px;
    padding-top: 20px;
    margin-bottom: 20px;
  }
}

.check {
  display: flex;
  .d1 {
    flex: 1;
    padding-right: 10px;
  }
}
.model {
  background: #fff;
  .title {
    font-size: 18px;
  }
  .model-img-code {
    display: flex;
    margin-top: 20px;
    a {
      display: block;
      width: 200px;
    }
    img {
      width: 100%;
    }
  }
  .model-button {
    margin-top: 25px;
  }
}
</style>
