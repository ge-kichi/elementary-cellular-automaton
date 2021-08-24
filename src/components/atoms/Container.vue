<template>
  <div class="nes-container is-rounded is-dark with-title">
    <span class="title">{{ title }}</span>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Container",
  props: {
    title: String,
  },
};
</script>
<style scoped>
</style>