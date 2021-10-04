<template>
  <Text title="STEP" :content="step" />
</template>
<script>
import Text from "@/components/atoms/Text.vue";
export default {
  name: "Step",
  components: {
    Text,
  },
  computed: {
    step() {
      return this.$store.getters.getStep;
    },
  },
};
</script>