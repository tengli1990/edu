
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import enUS from 'ant-design-vue/lib/locale-provider/en_US';

const state = {
  locale: zhCN
}

const mutations = {
  LOCALE_US: (state) => {
    state.locale = enUS
  },
}

const actions = {
  setLocaleUS({ commit }) {
    commit('LOCALE_US')
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
