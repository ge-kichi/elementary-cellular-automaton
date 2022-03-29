import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { InitialState } from "@/modules/ECA";

export const key: InjectionKey<Store<State>> = Symbol();

type RuleType = "random" | "input";
type Dialog = "state" | "none";

export type State = {
  ruleType: RuleType;
  ruleNumber: string;
  initState: InitialState;
  openedDialog: Dialog;
};

export const GetterTypes: {
  RuleType: "RuleType";
  RuleNumber: "RuleNumber";
  InitState: "InitState";
  OpenedDialog: "OpenedDialog";
} = {
  RuleType: "RuleType",
  RuleNumber: "RuleNumber",
  InitState: "InitState",
  OpenedDialog: "OpenedDialog",
};

export const MutationTypes: {
  UpdateRuleType: "UpdateRuleType";
  InputRuleNumber: "InputRuleNumber";
  UpdateInitState: "UpdateInitState";
  OpenDialog: "OpenDialog";
} = {
  UpdateRuleType: "UpdateRuleType",
  InputRuleNumber: "InputRuleNumber",
  UpdateInitState: "UpdateInitState",
  OpenDialog: "OpenDialog",
};

export const ActionTypes: { Sketch: "Sketch" } = { Sketch: "Sketch" };

export const store = createStore<State>({
  state: {
    ruleType: "random",
    ruleNumber: "30",
    initState: "single",
    openedDialog: "none",
  },
  getters: {
    [GetterTypes.RuleType](state) {
      return state.ruleType;
    },
    [GetterTypes.RuleNumber](state) {
      return state.ruleNumber;
    },
    [GetterTypes.InitState](state) {
      return state.initState;
    },
    [GetterTypes.OpenedDialog](state) {
      return state.openedDialog;
    },
  },
  mutations: {
    [MutationTypes.UpdateRuleType](state, ruleType: RuleType) {
      state.ruleType = ruleType;
    },
    [MutationTypes.InputRuleNumber](state, ruleNumber: string) {
      state.ruleNumber = ruleNumber;
    },
    [MutationTypes.UpdateInitState](state) {
      switch (state.initState) {
        case "single":
          state.initState = "random";
          break;
        case "random":
          state.initState = "single";
          break;
      }
    },
    [MutationTypes.OpenDialog](state, dialog: Dialog) {
      state.openedDialog = dialog;
    },
  },
  actions: {},
  modules: {},
});
