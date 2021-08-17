<template>
  <span id="step" class="nes-text">
    <div>STEP</div>
    <div>{{ step }}</div>
  </span>
</template>
<script>
import { getStep } from "../js/cellularAutomaton";
export default {
  name: "Step",
  data() {
    return {
      step: 0,
    };
  },
  mounted() {
    setInterval(() => (this.step = getStep()), 0);
  },
};
</script>
<style scoped>
#step {
  text-align: center;
}
</style>