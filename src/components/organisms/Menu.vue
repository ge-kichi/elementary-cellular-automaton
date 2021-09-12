<template>
  <Container id="menu" :title="title">
    <div class="container">
      <PlaySelect />
      <RuleSelect />
    </div>
  </Container>
</template>
<script>
import Container from "@/components/atoms/Container.vue";
import PlaySelect from "@/components/molecules/PlaySelect.vue";
import RuleSelect from "@/components/molecules/RuleSelect.vue";
import { version } from "../../../package.json";
export default {
  name: "Menu",
  components: {
    Container,
    PlaySelect,
    RuleSelect,
  },
  data() {
    return {
      title: "CELLULAR AUTOMATON VER. " + version,
    };
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
@media screen and (max-width: 599px) {
  .container {
    flex-direction: column-reverse;
  }
}
</style>