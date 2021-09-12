<template>
  <div id="status" class="is-dark">
    <Step />
    <Rule />
    <GitHubLink />
  </div>
</template>
<script>
import Step from "@/components/molecules/Step.vue";
import Rule from "@/components/molecules/Rule.vue";
import GitHubLink from "@/components/atoms/GitHubLink.vue";
export default {
  name: "Status",
  components: {
    Step,
    Rule,
    GitHubLink
  },
};
</script>
<style scoped>
#status {
  margin: 5px 0;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
}
</style>