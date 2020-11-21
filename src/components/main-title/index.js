import AppMainTitle from './index.vue'

AppMainTitle.install = function(Vue){
  Vue.component(AppMainTitle.name,AppMainTitle)
}
export default AppMainTitle