import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import P5 from "p5";
import { InitialState, Pattern, create } from "@/js/ECA";

export const key: InjectionKey<Store<State>> = Symbol();

export type State = {
  gen: string;
  ruleType: "random" | "input";
  ruleNumber: string;
  initialState: InitialState;
  pattern: Pattern;
};

export const GetterTypes: {
  Gen: "Gen";
  RuleType: "RuleType";
  RuleNumber: "RuleNumber";
  InitialState: "InitialState";
  Pattern: "Pattern";
} = {
  Gen: "Gen",
  RuleType: "RuleType",
  RuleNumber: "RuleNumber",
  InitialState: "InitialState",
  Pattern: "Pattern",
};

export const MutationTypes: {
  UpdateGen: "UpdateGen";
  UpdateRuleType: "UpdateRuleType";
  InputRuleNumber: "InputRuleNumber";
  UpdateInitialState: "UpdateInitialState";
  UpdatePattern: "UpdatePattern";
} = {
  UpdateGen: "UpdateGen",
  UpdateRuleType: "UpdateRuleType",
  InputRuleNumber: "InputRuleNumber",
  UpdateInitialState: "UpdateInitialState",
  UpdatePattern: "UpdatePattern",
};

export const ActionTypes: {
  Sketch: "Sketch";
} = {
  Sketch: "Sketch",
};

const pixelSize = 2;
const playSelectors = ".Sketch";

export const store = createStore<State>({
  state: {
    gen: "0",
    ruleType: "random",
    ruleNumber: "30",
    initialState: "single",
    pattern: "periodic",
  },
  getters: {
    [GetterTypes.Gen](state) {
      return state.gen;
    },
    [GetterTypes.RuleType](state) {
      return state.ruleType;
    },
    [GetterTypes.RuleNumber](state) {
      return state.ruleNumber;
    },
    [GetterTypes.InitialState](state) {
      return state.initialState;
    },
    [GetterTypes.Pattern](state) {
      return state.pattern;
    },
  },
  mutations: {
    [MutationTypes.UpdateGen](state, gen: number) {
      state.gen = gen.toString();
    },
    [MutationTypes.UpdateRuleType](state, ruleType: "random" | "input") {
      state.ruleType = ruleType;
    },
    [MutationTypes.InputRuleNumber](state, ruleNumber: string) {
      state.ruleNumber = ruleNumber;
    },
    [MutationTypes.UpdateInitialState](state, initialState: InitialState) {
      state.initialState = initialState;
    },
    [MutationTypes.UpdatePattern](state, pattern: Pattern) {
      state.pattern = pattern;
    },
  },
  actions: {
    [ActionTypes.Sketch]({ commit, state }, node) {
      const sketch = (p: P5) => {
        let spaceSize = 0;
        let maxGen = 0;
        let eca: any;

        const visualizer = (state: Int8Array, gen: number) => {
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

        const start = (e: any) => {
          p.clear();
          if (state.ruleType === "random") {
            commit(
              MutationTypes.InputRuleNumber,
              Math.floor(Math.random() * 256).toString()
            );
          }

          eca = create(Number(state.ruleNumber), spaceSize, {
            initialState: state.initialState,
            pattern: state.pattern,
          });
          visualizer(eca.state, eca.gen);
          commit(MutationTypes.UpdateGen, eca.gen);
          p.loop();
        };

        p.setup = () => {
          const [canvasWidth, canvasHeight] = init();
          const cv = p.createCanvas(canvasWidth, canvasHeight);
          cv.style("display", "block");
          p.selectAll(playSelectors).forEach((selector: P5.Element) =>
            selector.mouseClicked(start)
          );
        };

        p.draw = () => {
          if (!eca || eca.gen > maxGen) return p.noLoop();
          eca = eca.generate();
          visualizer(eca.state, eca.gen);
          commit(MutationTypes.UpdateGen, eca.gen);
        };

        p.windowResized = () => {
          p.noLoop();
          p.clear();
          p.noCanvas();
          const [canvasWidth, canvasHeight] = init();
          p.createCanvas(canvasWidth, canvasHeight);
          commit(MutationTypes.UpdateGen, 0);
        };
      };
      new P5(sketch, node);
    },
  },
  modules: {},
});
