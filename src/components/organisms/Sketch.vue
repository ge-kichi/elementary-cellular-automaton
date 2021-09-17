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
      const cellSize = 4;
      let spaceSize = 0;
      let maxStep = 0;
      let stack = [];
      let ca = undefined;

      const randomRule = () => Math.floor(Math.random() * 256);

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
        const canvasWidth = this.$el.clientWidth;
        const canvasHeight = this.$el.clientHeight;
        spaceSize = canvasWidth / cellSize;
        maxStep = p.round(canvasHeight / cellSize);
        return [canvasWidth, canvasHeight];
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
        const [canvasWidth, canvasHeight] = init();
        const cv = p.createCanvas(canvasWidth, canvasHeight);
        cv.style("display", "block");
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
        const [canvasWidth, canvasHeight] = init();
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
  height: 100%;
}
</style>