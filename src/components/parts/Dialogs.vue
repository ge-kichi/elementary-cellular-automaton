<template>
  <template v-if="openDialog === 'rule'">
    <Dialog @close="close">
      <Setting
        title="RULE"
        name="rule-select"
        :items="ruleItems"
        v-model="rulePicked"
      >
        <InputRange :attrs="writeinAttrs" v-model="writeinInput" />
      </Setting>
    </Dialog>
  </template>
</template>
<script lang="ts">
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import { key, GetterTypes, MutationTypes } from "@/store";
import DialogComponent from "@/components/fragments/Dialog.vue";
import InputRange from "@/components/fragments/InputRange.vue";
import Setting from "@/components/fragments/Setting.vue";
export default {
  name: "Dialogs",
  components: { Dialog: DialogComponent, InputRange, Setting },
  // eslint-disable-next-line
  setup() {
    const store = useStore(key);
    const openDialog = computed(() => store.getters[GetterTypes.OpenDialog]);
    const close = () => store.commit(MutationTypes.OpenDialog, "none");

    const ruleItems = reactive([
      { value: "RANDOM" },
      {
        value: "INPUT",
        writeIn: true,
      },
    ]);
    const rulePicked = computed({
      get: () => store.getters[GetterTypes.RuleType].toUpperCase(),
      set: (value: string) =>
        store.commit(MutationTypes.UpdateRuleType, value.toLowerCase()),
    });

    const writeinAttrs = reactive({
      min: "0",
      max: "255",
      disabled: computed(
        () => store.getters[GetterTypes.RuleType] === "random"
      ),
    });
    const writeinInput = computed({
      get: () => store.getters[GetterTypes.RuleNumber],
      set: (value: string) =>
        store.commit(MutationTypes.InputRuleNumber, value),
    });

    return {
      openDialog,
      close,
      ruleItems,
      rulePicked,
      writeinAttrs,
      writeinInput,
    };
  },
};
</script>
