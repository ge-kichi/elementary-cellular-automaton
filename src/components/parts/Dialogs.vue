<template>
  <template v-if="openDialog === 'rule'">
    <Dialog @close="close">
      <Setting v-bind="ruleGroup">
        <InputRange v-bind="writeIn" />
      </Setting>
    </Dialog>
  </template>
  <template v-if="openDialog === 'state'">
    <Dialog @close="close">
      <Setting v-bind="stateGroup" />
    </Dialog>
  </template>
</template>
<script lang="ts">
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import { key, GetterTypes, MutationTypes } from "@/store";
import Dialog from "@/components/fragments/Dialog.vue";
import InputRange from "@/components/fragments/InputRange.vue";
import Setting from "@/components/fragments/Setting.vue";
export default {
  name: "Dialogs",
  components: { Dialog, InputRange, Setting },
  // eslint-disable-next-line
  setup() {
    const store = useStore(key);
    const openDialog = computed(() => store.getters[GetterTypes.OpenDialog]);
    const close = () => store.commit(MutationTypes.OpenDialog, "none");
    const ruleGroup = reactive({
      title: "RULE",
      name: "rule-select",
      items: [
        {
          value: "RANDOM",
          checked: computed(
            () => store.getters[GetterTypes.RuleType] === "random"
          ),
        },
        {
          value: "INPUT",
          checked: computed(
            () => store.getters[GetterTypes.RuleType] === "input"
          ),
          writeIn: true,
        },
      ],
      // eslint-disable-next-line
      onchange: (e: any) => {
        const value: string = e.target.value;
        store.commit(MutationTypes.UpdateRuleType, value.toLowerCase());
      },
    });
    const writeIn = reactive({
      attrs: {
        min: "0",
        max: "255",
        disabled: computed(
          () => store.getters[GetterTypes.RuleType] === "random"
        ),
        value: computed(() => store.getters[GetterTypes.RuleNumber]),
      },
      // eslint-disable-next-line
      oninput: (e: any) =>
        store.commit(MutationTypes.InputRuleNumber, e.target.value),
    });
    const stateGroup = reactive({
      title: "STATE",
      name: "state-select",
      items: [
        {
          value: "SINGLE",
          checked: computed(
            () => store.getters[GetterTypes.InitialState] === "single"
          ),
        },
        {
          value: "RANDOM",
          checked: computed(
            () => store.getters[GetterTypes.InitialState] === "random"
          ),
          writeIn: false,
        },
      ],
      // eslint-disable-next-line
      onchange: (e: any) => {
        const value: string = e.target.value;
        store.commit(MutationTypes.UpdateInitialState, value.toLowerCase());
      },
    });
    return { openDialog, close, ruleGroup, writeIn, stateGroup };
  },
};
</script>
