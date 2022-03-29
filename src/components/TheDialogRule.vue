<template>
  <template v-if="openedDialog === 'rule'">
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
import BaseDialog from "@/components/BaseDialog.vue";
import BaseInputRange from "@/components/BaseInputRange.vue";
import BaseSetting from "@/components/BaseSetting.vue";
import { useSetting } from "@/hooks";
export default {
  name: "TheDialogRule",
  components: { BaseDialog, BaseInputRange, BaseSetting },
  // eslint-disable-next-line
  setup() {
    const {
      openedDialog,
      close,
      ruleItems,
      rulePicked,
      writeinAttrs,
      writeinInput,
    } = useSetting();

    return {
      openedDialog,
      close,
      ruleItems,
      rulePicked,
      writeinAttrs,
      writeinInput,
    };
  },
};
</script>
