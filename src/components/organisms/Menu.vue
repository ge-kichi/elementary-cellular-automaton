<template>
  <Container
    class="Menu"
    :title="title"
  >
    <div class="Menu-inner">
      <PlaySelect />
      <RuleSelect />
    </div>
  </Container>
</template>
<script>
import { ref } from "vue";
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
  setup(){
    const title = ref("CELLULAR AUTOMATON VER. " + version);
    return {
      title
    }
  }
};
</script>
<style scoped>
.Menu-inner {
  display: flex;
  justify-content: space-around;
}
@media screen and (max-width: 599px) {
  .Menu-inner {
    flex-direction: column-reverse;
  }
}
</style>