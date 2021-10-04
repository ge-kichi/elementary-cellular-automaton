<template>
  <Text title="RULE" :content="rule" />
</template>
<script>
import Text from "@/components/atoms/Text.vue";
export default {
  name: "Rule",
  components: {
    Text,
  },
  computed: {
    rule() {
      return this.$store.getters.getRule;
    },
  },
};
</script>