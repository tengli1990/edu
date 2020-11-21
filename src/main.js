import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "./assets/style/global.less";
import GlobalComponent from './components'

Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(GlobalComponent)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
