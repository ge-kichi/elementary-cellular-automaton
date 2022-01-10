<template>
  <div id="statuses" class="el-cluster">
    <GitHubLink url="https://github.com/l1ck0h/elementary-cellular-automaton" />
    <Status v-bind="gen" />
    <Status v-bind="state" />
    <Status v-bind="rule" />
  </div>
</template>
<script lang="ts">
import { reactive, computed } from "vue";
import { useStore } from "vuex";
import { key, GetterTypes, MutationTypes } from "@/store";
import GitHubLink from "@/components/fragments/GitHubLink.vue";
import Status from "@/components/fragments/Status.vue";
export default {
  name: "ECA",
  components: { GitHubLink, Status },
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
