<template>
  <Text title="RULE" :content="rule" />
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Text from "@/components/atoms/Text.vue";
import { Rule } from "@/store/getterTypes";
export default {
  name: "Rule",
  components: {
    Text,
  },
  setup() {
    const store = useStore();
    const rule = computed(() => store.getters[Rule]);
    return {
      rule,
    };
  },
};
</script>