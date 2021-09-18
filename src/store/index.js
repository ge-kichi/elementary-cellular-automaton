import { createStore } from "vuex";

export default createStore({
  state: {
    dialogElem: undefined,
    ruleMode: "",
    rule: 90,
    step: 0,
    isMenuVisible: true,
  },
  getters: {
    getRuleMode(state) {
      return state.ruleMode;
    },
    getRule(state) {
      return state.rule;
    },
    getStep(state) {
      return state.step;
    },
    isMenuVisible(state) {
      return state.isMenuVisible;
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
      state.ruleMode = ruleMode.toLowerCase();
    },
    updateRule(state, rule) {
      state.rule = Number(rule !== "" ? rule : state.rule);
    },
    setMenuVisible(state, isMenuVisible) {
      state.isMenuVisible = isMenuVisible;
    },
  },
  actions: {
    registerDialog({ commit }, elem) {
      import("dialog-polyfill").then((dialogPolyfill) => {
        dialogPolyfill.default.registerDialog(elem);
        commit("registerDialog", elem);
      });
    },
    showModal({ commit, state }) {
      state.dialogElem.showModal();
      commit("setMenuVisible", false);
    },
    closeModal({ commit, state }) {
      commit("setMenuVisible", true);
      state.dialogElem.close();
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
