import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { create, ECA, InitialState } from "@/modules/ECA";

export const key: InjectionKey<Store<State>> = Symbol();

type RuleType = "random" | "input";
type Dialog = "state" | "none";

export type State = {
  ruleType: RuleType;
  ruleNumber: string;
  initialState: InitialState;
  openDialog: Dialog;
};

export const GetterTypes: {
  RuleType: "RuleType";
  RuleNumber: "RuleNumber";
  InitialState: "InitialState";
  OpenDialog: "OpenDialog";
} = {
  RuleType: "RuleType",
  RuleNumber: "RuleNumber",
  InitialState: "InitialState",
  OpenDialog: "OpenDialog",
};

export const MutationTypes: {
  UpdateRuleType: "UpdateRuleType";
  InputRuleNumber: "InputRuleNumber";
  UpdateInitialState: "UpdateInitialState";
  OpenDialog: "OpenDialog";
} = {
  UpdateRuleType: "UpdateRuleType",
  InputRuleNumber: "InputRuleNumber",
  UpdateInitialState: "UpdateInitialState",
  OpenDialog: "OpenDialog",
};

export const ActionTypes: { Sketch: "Sketch" } = { Sketch: "Sketch" };

export const store = createStore<State>({
  state: {
    ruleType: "random",
    ruleNumber: "30",
    initialState: "single",
    openDialog: "none",
  },
  getters: {
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
    async [ActionTypes.Sketch]({ commit, state }, node: HTMLCanvasElement) {
      const cellRatio = 8;
      // eslint-disable-next-line
      let context: any;
      let canvasWidth: number;
      let canvasHeight: number;
      let spaceSize: number;
      let maxGen: number;
      let eca: ECA;
      let timeoutID: number;

      const init = () => {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
          clear();
          const clientWidth = node.clientWidth;
          const clientHeight = node.clientHeight;
          spaceSize = Math.floor(clientWidth / cellRatio);
          maxGen = Math.floor(clientHeight / cellRatio) - 1;
          canvasWidth = spaceSize * 8;
          canvasHeight = maxGen * 8;
          node.setAttribute("width", canvasWidth.toString());
          node.setAttribute("height", canvasHeight.toString());
        }, 500);
      };

      const clear = () => context.clearRect(0, 0, canvasWidth, canvasHeight);

      const visualizer = (state: Int8Array, gen: number) => {
        state.forEach((cell, cellIndex) => {
          if (cell !== 1) return;
          context.fillStyle = "#00933B";
          context.fillRect(
            cellIndex * cellRatio,
            (gen - 1) * cellRatio,
            cellRatio * 0.95,
            cellRatio * 0.95
          );
        });
      };

      node.addEventListener("click", () => {
        clear();
        if (state.ruleType === "random") {
          commit(
            MutationTypes.InputRuleNumber,
            Math.floor(Math.random() * 256).toString()
          );
        }
        eca = create(Number(state.ruleNumber), spaceSize, state.initialState);
        visualizer(eca.state, eca.gen);
        while (!(eca.gen > maxGen)) {
          eca = eca.generate();
          visualizer(eca.state, eca.gen);
        }
      });
      context = node.getContext("2d");
      window.addEventListener("resize", init);
      init();
    },
  },
  modules: {},
});
