<template>
  <Dialog>
    <Setting v-bind="ruleGroup">
      <InputRange v-bind="writeIn" />
    </Setting>
  </Dialog>
</template>
<script lang="ts">
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import { key, GetterTypes, MutationTypes } from "@/store";
import Dialog from "@/components/fragments/Dialog.vue";
import InputRange from "@/components/fragments/InputRange.vue";
import Setting from "@/components/fragments/Setting.vue";
export default {
  name: "CogRule",
  components: { Dialog, InputRange, Setting },
  // eslint-disable-next-line
  setup() {
    const store = useStore(key);
    const ruleGroup = reactive({
      title: "RULE",
      name: "rule-select",
      items: [
        { value: "RANDOM", checked: true },
        { value: "INPUT", checked: false, writeIn: true },
      ],
      // eslint-disable-next-line
      onchange: (e: any) => {
        const value: string = e.target.value;
        store.commit(MutationTypes.UpdateRuleType, value.toLowerCase());
      },
    });
    const isRandom = computed(
      () => store.getters[GetterTypes.RuleType] === "random"
    );
    const ruleNumber = computed(() => store.getters[GetterTypes.RuleNumber]);
    const writeIn = reactive({
      attrs: {
        min: "0",
        max: "255",
        disabled: isRandom,
        value: ruleNumber,
      },
      // eslint-disable-next-line
      oninput: (e: any) =>
        store.commit(MutationTypes.InputRuleNumber, e.target.value),
    });
    return { ruleGroup, writeIn };
  },
};
</script>
