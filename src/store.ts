import Vue from "vue";
import Vuex from "vuex";
import { Resources } from "@/shared/resources";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    errorMessage: "",
    titanium: 0,
    fuel: 0,
    energy: 0
  },
  mutations: {
    setErrorMessage(state, errorMessage: string) {
      state.errorMessage = errorMessage;
    },
    clearErrorMessage(state) {
      state.errorMessage = "";
    },
    updateResources(state, resources: Resources) {
      state.titanium = resources.titanium;
      state.fuel = resources.fuel;
      state.energy = resources.energy;
    }
  },
  actions: {}
});
