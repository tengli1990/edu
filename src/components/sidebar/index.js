import AppSidebar from './index.vue'

AppSidebar.install = function(Vue){
  Vue.component(AppSidebar.name,AppSidebar)
}
export default AppSidebar