<template>
  <span id="rule" class="nes-text">
    <div>RULE</div>
    <div id="rule-value">{{ rule }}</div>
  </span>
</template>
<script>
export default {
  name: "Rule",
  computed: {
    rule() {
      return this.$store.getters.getRule;
    },
  },
};
</script>
<style scoped>
#rule {
  text-align: center;
}
</style>