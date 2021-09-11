<template>
  <template v-if="isMatch">
    <slot></slot>
  </template>
</template>
<script>
export default {
  name: "MediaQuery",
  props: {
    query: String,
  },
  data() {
    return {
      isMatch: false,
    };
  },
  mounted() {
    this.isMatch = matchMedia(this.query).matches;
    matchMedia(this.query).addEventListener("change", this.isQueryMatch);
  },
  unmounted() {
    matchMedia(this.query).addEventListener("change", this.isQueryMatch);
  },
  methods: {
    isQueryMatch(e) {
      this.isMatch = e.matches;
    },
  },
};
</script>
<style scoped>
</style>