import { reactive, computed } from "vue";
import { useStore } from "vuex";
import { key, GetterTypes, MutationTypes } from "@/store";

const { InitState, OpenedDialog, RuleNumber } = GetterTypes;
const { OpenDialog, UpdateInitState } = MutationTypes;

const useStatuses = () => {
  const { getters, commit } = useStore(key);

  const state = reactive({
    content: computed(() => getters[InitState].toUpperCase()),
    highlight: computed(() => getters[OpenedDialog] === "state"),
    onclick: () => commit(UpdateInitState),
  });

  const rule = reactive({
    content: computed(() => getters[RuleNumber]),
    highlight: computed(() => getters[OpenedDialog] === "rule"),
    onclick: () =>
      commit(OpenDialog, getters[OpenedDialog] !== "rule" ? "rule" : "none"),
  });

  return { state, rule };
};

export default useStatuses;
