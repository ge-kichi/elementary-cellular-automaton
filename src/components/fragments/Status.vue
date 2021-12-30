<template>
  <span id="status" class="el-box --0 nes-text">
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
#status {
  text-align: center;
}
</style>
