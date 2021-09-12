import { createStore } from "vuex";

export default createStore({
  state: {
    dialogElem: undefined,
    rule: 0,
    step: 0,
  },
  getters: {
    getRule(state) {
      return state.rule;
    },
    getStep(state) {
      return state.step;
    },
  },
  mutations: {
    registerDialog(state, elem) {
      state.dialogElem = elem;
    },
    updateStep(state, step) {
      state.step = step;
    },
    updateRule(state, rule) {
      state.rule = Number(rule !== "" ? rule : state.rule);
    },
  },
  actions: {
    registerDialog({ commit }, elem) {
      import("dialog-polyfill").then((dialogPolyfill) => {
        dialogPolyfill.default.registerDialog(elem);
        commit("registerDialog", elem);
      });
    },
    showModal({ state }) {
      state.dialogElem.showModal();
    },
    closeModal({ state }) {
      state.dialogElem.close();
    },
    updateStep({ commit }, step) {
      commit("updateStep", step);
    },
    updateRule({ commit }, rule) {
      commit("updateRule", rule);
    },
  },
  modules: {},
});
