import { createStore } from 'vuex'
import dialogPolyfill from "dialog-polyfill";

export default createStore({
  state: {
    dialogElem: undefined,
    rule: 0
  },
  getters: {
    getRule(state) {
      return state.rule;
    }
  },
  mutations: {
    registerDialog(state, elem) {
      dialogPolyfill.registerDialog(elem);
      state.dialogElem = elem;
    },
    updateRule(state, rule) {
      state.rule = Number(rule !== "" ? rule : state.rule);
    }
  },
  actions: {
    registerDialog({ commit }, elem) {
      commit("registerDialog", elem);
    },
    showModal({ state }) {
      state.dialogElem.showModal();
    },
    closeModal({ state }) {
      state.dialogElem.close();
    },
    updateRule({ commit }, rule) {
      commit("updateRule", rule);
    }
  },
  modules: {
  }
})
