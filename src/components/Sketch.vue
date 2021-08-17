<template>
  <div id="sketch"></div>
</template>
<script>
import p5 from "p5";
import { sketch } from "../js/sketch";
export default {
  name: "Sketch",
  mounted() {
    new p5(
      sketch({
        startSelectors: ".play-select",
        width: 512,
        height: 288,
        cellSize: 2,
        cellColor: "#58F898",
        getRule: () => this.$store.getters.getRule,
      }),
      this.$el
    );
  },
};
</script>
<style scoped>
</style>