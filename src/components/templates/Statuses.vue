<template>
  <Status v-bind="gen" />
  <Status v-bind="rule" />
  <GitHubLink url="https://github.com/l1ck0h/elementary-cellular-automaton" />
</template>
<script lang="ts">
import { reactive, computed } from "vue";
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
  // eslint-disable-next-line
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
