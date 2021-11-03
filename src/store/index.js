import { createStore } from "vuex";
import {
  RegisterDialog,
  ShowModal,
  CloseModal,
  RandomMode,
  InputMode,
  UpdateRule,
  UpdateGen,
  Sketch,
} from "@/store/actionTypes";
import {
  IsMainShow,
  IsRuleRandom,
  IsRuleInput,
  Rule,
  Gen,
} from "@/store/getterTypes";

const pixelSize = 2;
const startSelectors = "input[name='state-select']";
const RULE_RANDOM = "RANDOM";
const RULE_INPUT = "INPUT";

export default createStore({
  state: {
    isMainShow: true,
    dialogElem: undefined,
    mode: RULE_RANDOM,
    rule: 30,
    gen: 0,
  },
  getters: {
    [IsMainShow](state) {
      return state.isMainShow;
    },
    [IsRuleRandom](state) {
      return state.mode === RULE_RANDOM;
    },
    [IsRuleInput](state) {
      return state.mode === RULE_INPUT;
    },
    [Rule](state) {
      return state.rule;
    },
    [Gen](state) {
      return state.gen;
    },
  },
  mutations: {
    isMainShow(state) {
      state.isMainShow = !state.isMainShow;
    },
    registerDialog(state, dialogElem) {
      state.dialogElem = dialogElem;
    },
    setMode(state, mode) {
      state.mode = mode;
    },
    updateRule(state, rule) {
      state.rule = Number(rule ? rule : state.rule);
    },
    updateGen(state, gen) {
      state.gen = gen;
    },
  },
  actions: {
    async [RegisterDialog]({ commit }, { dialogElem, cancelHandler }) {
      const dialogPolyfill = await (await import("dialog-polyfill")).default;
      dialogPolyfill.registerDialog(dialogElem);
      commit("registerDialog", dialogElem);
      dialogElem.addEventListener("cancel", (e) => {
        e.preventDefault();
        cancelHandler(e);
      });
    },
    [ShowModal]({ commit, state }) {
      commit("isMainShow");
      state.dialogElem.showModal();
    },
    [CloseModal]({ commit, state }, rule = undefined) {
      commit("setMode", rule ? RULE_INPUT : RULE_RANDOM);
      commit("updateRule", rule);
      commit("isMainShow");
      state.dialogElem.close();
    },
    [RandomMode]({ commit }) {
      commit("setMode", RULE_RANDOM);
    },
    [InputMode]({ commit }) {
      commit("setMode", RULE_INPUT);
    },
    [UpdateRule]({ commit }, rule) {
      commit("updateRule", rule);
    },
    [UpdateGen]({ commit }, gen) {
      commit("updateGen", gen);
    },
    async [Sketch]({ commit, state }, node) {
      const sketch = (p) => {
        let spaceSize = 0;
        let maxGen = 0;
        let eca = undefined;

        const randomRule = () => Math.floor(Math.random() * 256);

        const visualizer = (state, gen) => {
          state.forEach((pixel, pixelIndex) => {
            if (pixel !== 1) return;
            p.fill("#58f898");
            p.rect(
              pixelIndex * pixelSize,
              (gen - 1) * pixelSize,
              pixelSize,
              pixelSize
            );
          });
        };

        const init = () => {
          const { clientWidth: canvasWidth, clientHeight: canvasHeight } = node;
          spaceSize = canvasWidth / pixelSize;
          maxGen = p.round(canvasHeight / pixelSize);
          return [canvasWidth, canvasHeight];
        };

        const start = async (e) => {
          p.clear();
          const { createECA } = await import("@/js/ECA");
          const isRandom = e.target.value === "RANDOM";

          if (state.mode === RULE_RANDOM) {
            commit("updateRule", randomRule());
          }
          const rule = state.rule;

          eca = createECA(rule, spaceSize, { random: isRandom });
          visualizer(eca.state, eca.gen);
          commit("updateGen", eca.gen);
          p.loop();
        };

        p.setup = () => {
          const [canvasWidth, canvasHeight] = init();
          const cv = p.createCanvas(canvasWidth, canvasHeight);
          cv.style("display", "block");
          p.selectAll(startSelectors).forEach((selector) =>
            selector.mouseClicked(start)
          );
        };

        p.draw = () => {
          if (!eca || eca.gen > maxGen) return p.noLoop();
          eca = eca.generate();
          visualizer(eca.state, eca.gen);
          commit("updateGen", eca.gen);
        };

        p.windowResized = () => {
          p.noLoop();
          p.clear();
          p.noCanvas();
          const [canvasWidth, canvasHeight] = init();
          p.createCanvas(canvasWidth, canvasHeight);
          commit("updateGen", 0);
        };
      };
      const P5 = await (await import("p5")).default;
      new P5(sketch, node);
    },
  },
  modules: {},
});
