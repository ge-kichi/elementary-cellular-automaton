<template>
  <div class="the-header-child el-center">
    <div
      class="the-header-child__container el-cluster el-cluster--justify:space-between"
    >
      <h1 class="the-header-child__brand">ECA</h1>
      <div class="the-header-child__statuses el-cluster">
        <BaseStatus title="INIT STATE" v-bind="state" />
        <BaseStatus title="RULE" v-bind="rule" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, computed } from "vue";
import { useStore } from "vuex";
import { key, GetterTypes, MutationTypes } from "@/store";
import BaseStatus from "@/components/BaseStatus.vue";
export default {
  name: "TheHeaderChild",
  components: { BaseStatus },
  // eslint-disable-next-line
  setup() {
    const store = useStore(key);

    const state = reactive({
      content: computed(() =>
        store.getters[GetterTypes.InitialState].toUpperCase()
      ),
      highlight: computed(
        () => store.getters[GetterTypes.OpenDialog] === "state"
      ),
      onclick: () => store.commit(MutationTypes.UpdateInitialState),
    });

    const rule = reactive({
      content: computed(() => store.getters[GetterTypes.RuleNumber]),
      highlight: computed(
        () => store.getters[GetterTypes.OpenDialog] === "rule"
      ),
      onclick: () =>
        store.commit(
          MutationTypes.OpenDialog,
          store.getters[GetterTypes.OpenDialog] !== "rule" ? "rule" : "none"
        ),
    });

    return { state, rule };
  },
};
</script>
<style scoped>
.the-header-child__container {
  width: 100%;
}
.the-header-child__brand {
  margin-bottom: 0;
}
.the-header-child__statuses {
  margin: 0 0 0 auto;
}
</style>
