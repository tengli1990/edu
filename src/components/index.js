import utils from '@/utils'

import CommonJs from '@/utils/common'
import AppSidebar from './sidebar'
import AppMainTitle from './main-title'

const components = [
  AppSidebar,
  AppMainTitle
]


function install (Vue) {
  if (install.installed) {
    return
  }
  install.installed = true
  components.forEach(Component => {
    Component.install(Vue)
  })

  for (let key in CommonJs) {
    Vue.prototype[key] = CommonJs[key]
  }
}

const GlobalComponent = {
  /* eslint-disable no-undef */
  install
}

components.forEach((Component) => {
  const name = utils.processComponentName(Component, {
    firstUpperCase: true
  })
  GlobalComponent[name] = Component
})

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default GlobalComponent


