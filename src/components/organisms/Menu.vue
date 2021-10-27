<template>
  <Container class="Menu" title="ELEMENTARY CELLULAR AUTOMATON">
    <div class="Menu-inner">
      <StateSelect />
      <RuleSelect />
    </div>
  </Container>
</template>
<script>
import Container from "@/components/atoms/Container.vue";
import StateSelect from "@/components/molecules/StateSelect.vue";
import RuleSelect from "@/components/molecules/RuleSelect.vue";
export default {
  name: "Menu",
  components: {
    Container,
    StateSelect,
    RuleSelect,
  },
};
</script>
<style scoped>
.Menu-inner {
  display: flex;
  justify-content: space-around;
}
@media screen and (max-width: 599px) {
  .Menu-inner {
    flex-direction: column;
  }
}
</style>