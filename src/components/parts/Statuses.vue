<template>
  <header class="Statuses is-dark">
    <Status title="GEN" :content="gen" />
    <Status title="RULE" :content="rule" />
    <GitHubLink url="https://github.com/l1ck0h/elementary-cellular-automaton" />
  </header>
</template>
<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { key, GetterTypes } from "@/store";
import Status from "@/components/fragments/Status.vue";
import GitHubLink from "@/components/fragments/GitHubLink.vue";
export default {
  name: "Statuses",
  components: {
    Status,
    GitHubLink,
  },
  setup() {
    const store = useStore(key);
    const gen = computed(() => store.getters[GetterTypes.Gen]);
    const rule = computed(() => store.getters[GetterTypes.RuleNumber]);
    return {
      gen,
      rule,
    };
  },
};
</script>
<style>
.Statuses {
  display: flex;
  justify-content: space-around;
  align-items: baseline;
}
</style>