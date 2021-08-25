<template>
  <Text id="step" :title="title" :content="step" />
</template>
<script>
import Text from "@/components/atoms/Text.vue";
export default {
  name: "Step",
  components: {
    Text,
  },
  data() {
    return {
      title: "STEP",
    };
  },
  computed: {
    step() {
      return this.$store.getters.getStep;
    },
  },
};
</script>
<style scoped>
</style>