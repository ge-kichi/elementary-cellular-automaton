<template>
  <div id="sketch"></div>
</template>
<script>
import p5 from "p5";
import { sketch } from "@/js/sketch";
export default {
  name: "Sketch",
  data() {
    return {
      p5: undefined,
    };
  },
  mounted() {
    window.addEventListener("resize", this.resizeSketch);
    this.sketch();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.resizeSketch);
  },
  methods: {
    sketch() {
      const appClientHeight = document.getElementById("app").clientHeight;
      const menuOffsetHeight = document.getElementById("menu").offsetHeight;
      const sketchClientWidth = this.$el.clientWidth;
      new p5(
        sketch({
          startSelectors: "input[name='play-select']",
          width: sketchClientWidth,
          height: appClientHeight - menuOffsetHeight - 4,
          getRule: () => this.$store.getters.getRule,
          setStep: (step) => this.$store.dispatch("updateStep", step),
        }),
        this.$el
      );
    },
    resizeSketch() {
      this.$store.dispatch("updateStep", 0);
      document.querySelector("canvas").remove();
      this.sketch();
    },
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
    width: 320px;
  }
}
</style>