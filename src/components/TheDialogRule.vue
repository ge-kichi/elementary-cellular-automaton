<template>
  <template v-if="openDialog === 'rule'">
    <BaseDialog @close="close">
      <BaseSetting
        v-model="rulePicked"
        title="RULE"
        name="rule-select"
        :items="ruleItems"
      >
        <BaseInputRange v-model="writeinInput" :attrs="writeinAttrs" />
      </BaseSetting>
    </BaseDialog>
  </template>
</template>
<script lang="ts">
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import BaseDialog from "@/components/BaseDialog.vue";
import BaseInputRange from "@/components/BaseInputRange.vue";
import BaseSetting from "@/components/BaseSetting.vue";
import { key, GetterTypes, MutationTypes } from "@/store";
export default {
  name: "TheDialogRule",
  components: { BaseDialog, BaseInputRange, BaseSetting },
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
