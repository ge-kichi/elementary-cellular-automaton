import { createStore } from "vuex";
import {
  RegisterDialog,
  ShowModal,
  CloseModal,
  SetRuleMode,
  UpdateRule,
  UpdateStep,
  Sketch,
} from "@/store/actionTypes";
import { RuleMode, Rule, Step } from "@/store/getterTypes";

export default createStore({
  state: {
    dialogElem: undefined,
    ruleMode: "",
    rule: 90,
    step: 0,
  },
  getters: {
    [RuleMode](state) {
      return state.ruleMode;
    },
    [Rule](state) {
      return state.rule;
    },
    [Step](state) {
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
      state.ruleMode = ruleMode.toLowerCase();
    },
    updateRule(state, rule) {
      state.rule = Number(rule !== "" ? rule : state.rule);
    },
  },
  actions: {
    [RegisterDialog]({ commit }, elem) {
      import("dialog-polyfill").then((dialogPolyfill) => {
        dialogPolyfill.default.registerDialog(elem);
        commit("registerDialog", elem);
      });
    },
    [ShowModal]({ state }) {
      state.dialogElem.showModal();
    },
    [CloseModal]({ commit, state }, rule) {
      commit("updateRule", rule);
      commit("setRuleMode", rule ? "input" : "random");
      state.dialogElem.close();
    },
    [SetRuleMode]({ commit }, ruleMode) {
      commit("setRuleMode", ruleMode);
    },
    [UpdateRule]({ commit }, rule) {
      commit("updateRule", rule);
    },
    [UpdateStep]({ commit }, step) {
      commit("updateStep", step);
    },
    [Sketch]({ commit, getters }, elm) {
      import("p5").then(
        (p5) =>
          new p5.default((p) => {
            const cellSize = 4;
            let spaceSize = 0;
            let maxStep = 0;
            let stack = [];
            let ca = undefined;

            const randomRule = () => Math.floor(Math.random() * 256);

            const visualizer = (state, step) => {
              state.forEach((cell, cellIndex) => {
                if (cell !== 1) return;
                p.fill("#58f898");
                p.rect(
                  cellIndex * cellSize,
                  (step - 1) * cellSize,
                  cellSize,
                  cellSize
                );
              });
            };

            const init = () => {
              const canvasWidth = elm.clientWidth;
              const canvasHeight = elm.clientHeight;
              spaceSize = canvasWidth / cellSize;
              maxStep = p.round(canvasHeight / cellSize);
              return [canvasWidth, canvasHeight];
            };

            const start = async (e) => {
              p.clear();
              const CellularAutomaton = await import("@/js/cellularAutomaton");
              const initialState = e.target.value;

              if (getters[RuleMode] === "random") {
                commit("updateRule", randomRule());
              }
              const rule = getters[Rule];

              ca = new CellularAutomaton.default(
                rule,
                initialState,
                spaceSize,
                visualizer
              );
              stack = [];
              p.append(stack, ca.state);
              commit("updateStep", ca.step);
              p.loop();
            };

            p.setup = () => {
              const [canvasWidth, canvasHeight] = init();
              const cv = p.createCanvas(canvasWidth, canvasHeight);
              cv.style("display", "block");
              p.selectAll("input[name='play-select']").forEach((selector) =>
                selector.mouseClicked(start)
              );
            };

            p.draw = () => {
              if (!ca || stack.length > maxStep) return p.noLoop();
              ca.generate();
              commit("updateStep", ca.step);
              p.append(stack, ca.state);
            };

            p.windowResized = () => {
              p.noLoop();
              const [canvasWidth, canvasHeight] = init();
              p.resizeCanvas(canvasWidth, canvasHeight);
              p.clear();
              commit("updateStep", 0);
            };
          }, elm)
      );
    },
  },
  modules: {},
});
