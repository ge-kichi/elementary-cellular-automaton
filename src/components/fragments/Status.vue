<template>
  <span
    class="status el-box el-box--padding:0 nes-text"
    :style="clickable ? 'z-index: var(--zIndex-highlight)' : ''"
  >
    <div
      class="el-center el-center--gutters:s-1"
      :style="clickable ? 'cursor: pointer' : ''"
      @click="onclick"
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
  },
  // eslint-disable-next-line
  setup(_: unknown, { attrs, emit }: { attrs: any; emit: any }) {
    const clickable = ref(attrs.onclick !== undefined);
    const onclick = (e: Event) => emit("onclick", e);
    return {
      clickable,
      onclick,
    };
  },
};
</script>
<style scoped>
.status * {
  cursor: inherit;
}
</style>