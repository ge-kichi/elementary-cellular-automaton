<template>
  <Text :title="title" :content="rule" />
</template>
<script>
import Text from "@/components/atoms/Text.vue";
export default {
  name: "Rule",
  components: {
    Text,
  },
  data() {
    return {
      title: "RULE",
    };
  },
  computed: {
    rule() {
      return this.$store.getters.getRule;
    },
  },
};
</script>
<style scoped>
</style>