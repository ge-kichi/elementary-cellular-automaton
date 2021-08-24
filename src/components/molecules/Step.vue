<template>
  <Text id="step" :title="title" :content="step" />
</template>
<script>
import { getStep } from "@/js/cellularAutomaton";
import Text from "@/components/atoms/Text.vue";
export default {
  name: "Step",
  components: {
    Text,
  },
  data() {
    return {
      title: "STEP",
      step: 0,
    };
  },
  mounted() {
    setInterval(() => (this.step = getStep()), 0);
  },
};
</script>
<style scoped>
</style>