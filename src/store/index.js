import { createStore } from "vuex";

export default createStore({
  state: {
    dialogElem: undefined,
    ruleMode: "",
    rule: 0,
    step: 0,
  },
  getters: {
    getRuleMode(state) {
      return state.ruleMode.toLowerCase();
    },
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
    setRuleMode(state, ruleMode) {
      state.ruleMode = ruleMode;
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
    closeModal({ dispatch, state }) {
      state.dialogElem.close();
      dispatch("setRuleMode", "input");
    },
    setRuleMode({ commit }, ruleMode) {
      commit("setRuleMode", ruleMode);
    },
    updateRule({ commit }, rule) {
      commit("updateRule", rule);
    },
    updateStep({ commit }, step) {
      commit("updateStep", step);
    },
  },
  modules: {},
});
