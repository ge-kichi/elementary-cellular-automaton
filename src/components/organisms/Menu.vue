<template>
  <Container id="menu" :title="title">
    <div id="container-outer">
      <PlaySelect />
      <RuleSelect />
      <div id="container-inner">
        <Step />
        <Rule />
      </div>
    </div>
  </Container>
</template>
<script>
import Container from "@/components/atoms/Container.vue";
import PlaySelect from "@/components/molecules/PlaySelect.vue";
import RuleSelect from "@/components/molecules/RuleSelect.vue";
import Step from "@/components/molecules/Step.vue";
import Rule from "@/components/molecules/Rule.vue";
import { version } from "../../../package.json";
export default {
  name: "Menu",
  components: {
    Container,
    PlaySelect,
    RuleSelect,
    Step,
    Rule,
  },
  data() {
    return {
      title: "CELLULAR AUTOMATON VER. " + version,
    };
  },
};
</script>
<style scoped>
#menu {
  width: 600px;
  margin: 0 auto 0 auto;
}
#container-outer {
  display: flex;
  justify-content: space-between;
}
#container-inner {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
@media screen and (min-width: 320px) and (max-width: 599px) {
  #menu {
    width: var(--width);
  }
  #container-outer {
    flex-direction: column;
    justify-content: space-around;
  }
  #container-inner {
    flex-direction: row;
  }
}
</style>