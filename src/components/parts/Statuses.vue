<template>
  <div id="statuses" class="el-cluster">
    <Status v-bind="gen" />
    <Status v-bind="state" />
    <Status v-bind="rule" />
  </div>
</template>
<script lang="ts">
import { reactive, computed } from "vue";
import { useStore } from "vuex";
import { key, GetterTypes, MutationTypes } from "@/store";
import Status from "@/components/fragments/Status.vue";
export default {
  name: "ECA",
  components: { Status },
  // eslint-disable-next-line
  setup() {
    const store = useStore(key);
    const gen = reactive({
      title: "GEN",
      content: computed(() => store.getters[GetterTypes.Gen]),
    });
    const state = reactive({
      title: "STATE",
      content: computed(() =>
        store.getters[GetterTypes.InitialState].toUpperCase()
      ),
      highlight: computed(
        () => store.getters[GetterTypes.OpenDialog] === "state"
      ),
      onclick: () => store.commit(MutationTypes.OpenDialog, "state"),
    });
    const rule = reactive({
      title: "RULE",
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
