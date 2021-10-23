<template>
  <Text title="RULE" :content="rule" />
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Text from "@/components/atoms/Text.vue";
export default {
  name: "Rule",
  components: {
    Text,
  },
  setup(){
    const store = useStore();
    const rule = computed(()=>store.getters.getRule);
    return {
      rule
    }
  }
};
</script>