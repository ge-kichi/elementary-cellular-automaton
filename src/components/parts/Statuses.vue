<template>
  <div class="statuses el-cluster">
    <Status title="GEN" v-bind="gen" />
    <Status title="STATE" v-bind="state" />
    <Status title="RULE" v-bind="rule" />
  </div>
</template>
<script lang="ts">
import { reactive, computed } from "vue";
import { useStore } from "vuex";
import { key, GetterTypes, MutationTypes } from "@/store";
import Status from "@/components/fragments/Status.vue";
export default {
  name: "Statuses",
  components: { Status },
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
      onclick: () => store.commit(MutationTypes.OpenDialog, "rule"),
    });
    return { state, gen, rule };
  },
};
</script>
<style scoped>
.statuses {
  margin: 0 0 0 auto;
}
</style>
