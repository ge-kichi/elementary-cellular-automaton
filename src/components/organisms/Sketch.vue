<template>
  <div id="sketch"></div>
</template>
<script>
import p5 from "p5";
import { sketch } from "@/js/sketch";
export default {
  name: "Sketch",
  mounted() {
    const appElem = document.getElementById("app");
    const menuElem = document.getElementById("menu");
    const sketchElem = document.getElementById("sketch");
    new p5(
      sketch({
        startSelectors: "input[name='play-select']",
        width: sketchElem.clientWidth,
        height: appElem.clientHeight - menuElem.offsetHeight - 4,
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
#sketch {
  width: 600px;
  margin: 0 auto 0 auto;
}
@media screen and (min-width: 320px) and (max-width: 599px) {
  #sketch {
    width: var(--width);
    margin: 0;
  }
}
</style>