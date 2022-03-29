import { computed, reactive } from "vue";
import { useStore } from "vuex";
import { key, GetterTypes, MutationTypes } from "@/store";

// eslint-disable-next-line
const useSetting = () => {
  const { getters, commit } = useStore(key);
  const { OpenedDialog, RuleNumber, RuleType } = GetterTypes;
  const { OpenDialog, InputRuleNumber, UpdateRuleType } = MutationTypes;

  const openedDialog = computed(() => getters[OpenedDialog]);
  const close = () => commit(OpenDialog, "none");

  const ruleItems = reactive([
    { value: "RANDOM" },
    {
      value: "INPUT",
      writeIn: true,
    },
  ]);
  const rulePicked = computed({
    get: () => getters[RuleType].toUpperCase(),
    set: (value: string) => commit(UpdateRuleType, value.toLowerCase()),
  });

  const writeinAttrs = reactive({
    min: "0",
    max: "255",
    disabled: computed(() => getters[RuleType] === "random"),
  });
  const writeinInput = computed({
    get: () => getters[RuleNumber],
    set: (value: string) => commit(InputRuleNumber, value),
  });

  return {
    openedDialog,
    close,
    ruleItems,
    rulePicked,
    writeinAttrs,
    writeinInput,
  };
};

export default useSetting;
