import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    errorText: ''
  },
  mutations: {
    setErrorText(state, errorText: string) {
      state.errorText = errorText;
    }
  },
  actions: {}
});
