<template>
  <span class="Status nes-text">
    <div>{{ title }}</div>
    <div>{{ content }}</div>
  </span>
</template>
<script lang="ts">
export default {
  name: "Status",
  props: {
    title: String,
    content: String,
  },
};
</script>
<style scoped>
.Status {
  text-align: center;
  color: #fff;
  width: 48px;
}
</style>
