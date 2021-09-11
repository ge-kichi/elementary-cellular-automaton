<template>
  <div id="sketch"></div>
</template>
<script>
import p5 from "p5";
import CellularAutomaton from "@/js/cellularAutomaton";
export default {
  name: "Sketch",
  mounted() {
    new p5(this.sketch, this.$el);
  },
  methods: {
    sketch(p) {
      let canvasWidth = 0;
      let canvasHeight = 0;
      let cellSize = 4;
      let spaceSize = 0;
      let maxStep = 0;
      let rule = 0;
      let ca = undefined;
      let stack = [];

      const visualizer = (state, step) => {
        state.forEach((cell, cellIndex) => {
          if (cell !== 1) return;
          p.rect(cellIndex * cellSize, step * cellSize, cellSize, cellSize);
          p.fill("#58f898");
        });
      };

      const init = () => {
        canvasWidth = this.$el.clientWidth;
        canvasHeight = p.select("#app").height - p.select("#menu").height - 4;
        spaceSize = canvasWidth / cellSize;
        maxStep = p.round(canvasHeight / cellSize);
      };

      const start = (e) => {
        p.clear();
        rule = this.$store.getters.getRule;
        ca = new CellularAutomaton(rule, e.target.value, spaceSize, visualizer);
        stack = [];
        p.append(stack, ca.state);
        this.$store.dispatch("updateStep", ca.step);
        p.loop();
      };

      p.setup = () => {
        init();
        p.createCanvas(canvasWidth, canvasHeight);
        p.selectAll("input[name='play-select']").forEach((selector) =>
          selector.mouseClicked(start)
        );
      };

      p.draw = () => {
        if (!ca || stack.length >= maxStep) return p.noLoop();
        ca.generate();
        this.$store.dispatch("updateStep", ca.step);
        p.append(stack, ca.state);
      };

      p.windowResized = () => {
        p.noLoop();
        init();
        p.resizeCanvas(canvasWidth, canvasHeight);
        p.clear();
        this.$store.dispatch("updateStep", 0);
      };
    },
  },
};
</script>
<style scoped>
#sketch {
  width: 600px;
  margin: 0 auto;
}
@media screen and (max-width: 599px) {
  #sketch {
    width: 320px;
  }
}
</style>