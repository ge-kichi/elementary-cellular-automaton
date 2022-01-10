<template>
  <span
    class="status el-box el-box--padding:0 nes-text"
    :style="highlight ? 'z-index: var(--zIndex-highlight)' : ''"
  >
    <div
      class="el-center el-center--gutters:s-1"
      :style="clickable ? 'cursor: pointer' : ''"
      @click="$emit('onclick')"
    >
      <div>{{ title }}</div>
      <div>{{ content }}</div>
    </div>
  </span>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  name: "Status",
  emits: ["onclick"],
  props: {
    title: String,
    content: String,
    highlight: Boolean,
  },
  // eslint-disable-next-line
  setup(_: unknown, { attrs }: { attrs: any }) {
    return { clickable: ref(attrs.onclick !== undefined) };
  },
};
</script>
<style scoped>
.status {
  font-size: var(--s-1);
}
.status * {
  cursor: inherit;
}
</style>
