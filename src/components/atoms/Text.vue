<template>
  <span class="Text nes-text">
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
.Text {
  text-align: center;
  color: #fff;
}
</style>