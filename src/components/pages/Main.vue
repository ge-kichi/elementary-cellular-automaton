<template>
  <div id="main">
    <Status />
    <Sketch />
    <Menu />
    <RuleDialog />
  </div>
</template>
<script>
import Status from "@/components/organisms/Status.vue";
import Sketch from "@/components/organisms/Sketch.vue";
import Menu from "@/components/organisms/Menu.vue";
import RuleDialog from "@/components/organisms/RuleDialog.vue";
export default {
  name: "Main",
  components: {
    Status,
    Sketch,
    Menu,
    RuleDialog,
  },
};
</script>
<style scoped>
#main {
  width: 600px;
  height: var(--height);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media screen and (max-width: 599px) {
  #main {
    width: 320px;
  }
}
</style>
