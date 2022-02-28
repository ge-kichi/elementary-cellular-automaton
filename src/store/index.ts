import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import P5 from "p5";
import { create, ECA, InitialState } from "@/modules/ECA";

export const key: InjectionKey<Store<State>> = Symbol();

type RuleType = "random" | "input";
type Dialog = "state" | "none";

export type State = {
  gen: number;
  ruleType: RuleType;
  ruleNumber: string;
  initialState: InitialState;
  openDialog: Dialog;
};

export const GetterTypes: {
  Gen: "Gen";
  RuleType: "RuleType";
  RuleNumber: "RuleNumber";
  InitialState: "InitialState";
  OpenDialog: "OpenDialog";
} = {
  Gen: "Gen",
  RuleType: "RuleType",
  RuleNumber: "RuleNumber",
  InitialState: "InitialState",
  OpenDialog: "OpenDialog",
};

export const MutationTypes: {
  UpdateGen: "UpdateGen";
  UpdateRuleType: "UpdateRuleType";
  InputRuleNumber: "InputRuleNumber";
  UpdateInitialState: "UpdateInitialState";
  OpenDialog: "OpenDialog";
} = {
  UpdateGen: "UpdateGen",
  UpdateRuleType: "UpdateRuleType",
  InputRuleNumber: "InputRuleNumber",
  UpdateInitialState: "UpdateInitialState",
  OpenDialog: "OpenDialog",
};

export const ActionTypes: { Sketch: "Sketch" } = { Sketch: "Sketch" };

export const store = createStore<State>({
  state: {
    gen: 0,
    ruleType: "random",
    ruleNumber: "30",
    initialState: "single",
    openDialog: "none",
  },
  getters: {
    [GetterTypes.Gen](state) {
      return state.gen.toString();
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
    [GetterTypes.OpenDialog](state) {
      return state.openDialog;
    },
  },
  mutations: {
    [MutationTypes.UpdateGen](state, gen: number) {
      state.gen = gen;
    },
    [MutationTypes.UpdateRuleType](state, ruleType: RuleType) {
      state.ruleType = ruleType;
    },
    [MutationTypes.InputRuleNumber](state, ruleNumber: string) {
      state.ruleNumber = ruleNumber;
    },
    [MutationTypes.UpdateInitialState](state) {
      switch (state.initialState) {
        case "single":
          state.initialState = "random";
          break;
        case "random":
          state.initialState = "single";
          break;
      }
    },
    [MutationTypes.OpenDialog](state, dialog: Dialog) {
      state.openDialog = dialog;
    },
  },
  actions: {
    async [ActionTypes.Sketch]({ commit, state }, node) {
      // eslint-disable-next-line
      new P5((p: any) => {
        const cellRatio = 8;
        let spaceSize: number;
        let maxGen: number;
        let canvas: P5.Renderer;
        let eca: ECA;

        const visualizer = (state: Int8Array, gen: number) => {
          state.forEach((cell, cellIndex) => {
            if (cell !== 1) return;
            p.fill("#00933B").rect(
              cellIndex * cellRatio,
              (gen - 1) * cellRatio,
              cellRatio,
              cellRatio
            );
          });
        };

        const init = () => {
          const { clientWidth: canvasWidth, clientHeight: canvasHeight } = node;
          spaceSize = Math.floor(canvasWidth / cellRatio);
          maxGen = Math.floor(canvasHeight / cellRatio) - 1;
          canvas = p
            .createCanvas(canvasWidth, canvasHeight)
            .style("display", "block")
            .style("z-index", "1")
            .style("opacity", "0")
            .style("cursor", "pointer");
        };

        const start = () => {
          p.clear();
          if (state.ruleType === "random") {
            commit(
              MutationTypes.InputRuleNumber,
              Math.floor(Math.random() * 256).toString()
            );
          }
          eca = create(Number(state.ruleNumber), spaceSize, state.initialState);
          visualizer(eca.state, eca.gen);
          commit(MutationTypes.UpdateGen, eca.gen);
          p.removeElements();
          canvas.style("opacity", "1");
          p.loop();
        };

        p.setup = () => {
          init();
          p.createDiv("CLICK/TOUCH HERE TO START!")
            .style("position", "absolute")
            .style("color", "var(--color-light)")
            .style("font-size", "var(--ms-1)")
            .style("text-align", "center");
          p.select(`#${node.id}`)?.mouseClicked(start);
        };

        p.draw = () => {
          if (!eca || eca.gen > maxGen) return p.noLoop();
          eca = eca.generate();
          visualizer(eca.state, eca.gen);
          commit(MutationTypes.UpdateGen, eca.gen);
        };

        p.windowResized = () => {
          setTimeout(() => {
            p.noLoop();
            p.clear();
            p.noCanvas();
            init();
            commit(MutationTypes.UpdateGen, 0);
          }, 0);
        };
      }, node);
    },
  },
  modules: {},
});
