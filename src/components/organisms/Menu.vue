<template>
  <Container id="menu" :title="title">
    <div class="container-outer">
      <PlaySelect />
      <RuleSelect />
      <MediaQuery query="(min-width: 600px)">
        <div class="container-inner">
          <Step />
          <Rule />
        </div>
        <div class="container-inner link">
          <GitHubLink />
        </div>
      </MediaQuery>
      <MediaQuery query="(max-width: 599px)">
        <div class="container-inner">
          <Step />
          <Rule />
          <GitHubLink />
        </div>
      </MediaQuery>
    </div>
  </Container>
</template>
<script>
import Container from "@/components/atoms/Container.vue";
import PlaySelect from "@/components/molecules/PlaySelect.vue";
import RuleSelect from "@/components/molecules/RuleSelect.vue";
import Step from "@/components/molecules/Step.vue";
import Rule from "@/components/molecules/Rule.vue";
import GitHubLink from "@/components/atoms/GitHubLink.vue";
import MediaQuery from "@/components/atoms/MediaQuery.vue";
import { version } from "../../../package.json";
export default {
  name: "Menu",
  components: {
    Container,
    PlaySelect,
    RuleSelect,
    Step,
    Rule,
    GitHubLink,
    MediaQuery,
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
  margin: 0 auto;
}
.container-outer {
  display: flex;
  justify-content: space-between;
}
.container-inner {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.container-inner.link {
  flex-direction: column;
}
@media screen and (max-width: 599px) {
  #menu {
    width: 320px;
  }
  .container-outer {
    flex-direction: column;
    justify-content: space-around;
  }
  .container-inner {
    flex-direction: row;
  }
}
</style>