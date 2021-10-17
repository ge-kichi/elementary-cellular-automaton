<template>
  <div class="Main">
    <Status />
    <Sketch />
    <Menu />
  </div>
</template>
<script>
import Status from "@/components/organisms/Status.vue";
import Sketch from "@/components/organisms/Sketch.vue";
import Menu from "@/components/organisms/Menu.vue";

export default {
  name: "Main",
  components: {
    Status,
    Sketch,
    Menu,
  },
};
</script>
<style scoped>
.Main {
  width: 600px;
  height: var(--height);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media screen and (max-width: 599px) {
  .Main {
    width: 320px;
  }
}
</style>
