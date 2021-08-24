<template>
  <span class="nes-text">
    <div>{{ title }}</div>
    <div>{{ content }}</div>
  </span>
</template>
<script>
export default {
  name: "Text",
  props: {
    title: String,
    content: Number,
  },
};
</script>
<style scoped>
.nes-text {
  text-align: center;
}
</style>