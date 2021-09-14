<template>
  <div id="sketch"></div>
</template>
<script>
export default {
  name: "Sketch",
  mounted() {
    import("p5").then((p5) => new p5.default(this.sketch, this.$el));
  },
  methods: {
    sketch(p) {
      let canvasWidth = 0;
      let canvasHeight = 0;
      let cellSize = 4;
      let spaceSize = 0;
      let maxStep = 0;
      let ca = undefined;
      let stack = [];

      const randomRule = () => Math.floor(Math.random() * 256);

      const addMarginTopBottom = (elem) => {
        return [
          Number(getComputedStyle(elem).marginTop.replace("px", "")),
          Number(getComputedStyle(elem).marginBottom.replace("px", "")),
        ].reduce((p, c) => p + c);
      };

      const visualizer = (state, step) => {
        state.forEach((cell, cellIndex) => {
          if (cell !== 1) return;
          p.fill("#58f898");
          p.rect(
            cellIndex * cellSize,
            (step - 1) * cellSize,
            cellSize,
            cellSize
          );
        });
      };

      const init = () => {
        canvasWidth = this.$el.clientWidth;
        const appElem = p.select("#app");
        const statusElem = p.select("#status");
        const menuElem = p.select("#menu");
        canvasHeight =
          appElem.height -
          (statusElem.height +
            menuElem.height +
            addMarginTopBottom(statusElem.elt) +
            addMarginTopBottom(menuElem.elt));
        spaceSize = canvasWidth / cellSize;
        maxStep = p.round(canvasHeight / cellSize);
      };

      const start = async (e) => {
        p.clear();
        const CellularAutomaton = await import("@/js/cellularAutomaton");
        const initialState = e.target.value;

        if (this.$store.getters.getRuleMode === "random") {
          this.$store.dispatch("updateRule", randomRule());
        }
        const rule = this.$store.getters.getRule;

        ca = new CellularAutomaton.default(
          rule,
          initialState,
          spaceSize,
          visualizer
        );
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
        if (!ca || stack.length > maxStep) return p.noLoop();
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
</style>