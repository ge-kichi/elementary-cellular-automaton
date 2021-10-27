<template>
  <div class="Status is-dark">
    <Gen />
    <Rule />
    <GitHubLink />
  </div>
</template>
<script>
import Gen from "@/components/molecules/Gen.vue";
import Rule from "@/components/molecules/Rule.vue";
import GitHubLink from "@/components/atoms/GitHubLink.vue";
export default {
  name: "Status",
  components: {
    Gen,
    Rule,
    GitHubLink,
  },
};
</script>
<style scoped>
.Status {
  margin: 5px 0;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
}
</style>