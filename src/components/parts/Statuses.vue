<template>
  <header class="Statuses">
    <Status v-bind="gen" />
    <Status v-bind="rule" />
    <GitHubLink url="https://github.com/l1ck0h/elementary-cellular-automaton" />
  </header>
</template>
<script lang="ts">
import { reactive, computed } from "vue";
import { useStore } from "vuex";
import { key, GetterTypes } from "@/store";
import Status from "@/components/fragments/Status.vue";
import GitHubLink from "@/components/fragments/GitHubLink.vue";
export default {
  components: {
    Status,
    GitHubLink,
  },
  setup() {
    const store = useStore(key);
    const gen = reactive({
      title: "GEN",
      content: computed(() => store.getters[GetterTypes.Gen]),
    });
    const rule = reactive({
      title: "RULE",
      content: computed(() => store.getters[GetterTypes.RuleNumber]),
    });
    return {
      gen,
      rule,
    };
  },
};
</script>
<style scoped>
.Statuses {
  width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  margin: 10px 0;
}
</style>
