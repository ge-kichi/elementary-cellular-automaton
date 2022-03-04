<template>
  <div class="the-header-child el-center">
    <div
      class="el-cluster el-cluster--justify:space-between"
      style="width: 100%"
    >
      <h1>ECA</h1>
      <div class="the-header-child__statuses el-cluster">
        <BaseStatus title="GEN" v-bind="gen" />
        <BaseStatus title="STATE" v-bind="state" />
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

    const gen = reactive({
      content: computed(() => store.getters[GetterTypes.Gen]),
    });

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

    return { state, gen, rule };
  },
};
</script>
<style scoped>
.the-header-child__statuses {
  margin: 0 0 0 auto;
}
</style>
