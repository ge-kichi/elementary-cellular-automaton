<template>
  <span
    class="base-status el-box el-box--invert el-box--padding:0 nes-text"
    :style="highlight ? 'z-index: var(--zIndex-highlight)' : ''"
  >
    <div
      class="el-center el-center--gutters:ms-1"
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
  name: "BaseStatus",
  emits: ["onclick"],
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    highlight: {
      type: Boolean,
      required: false,
    },
  },
  // eslint-disable-next-line
  setup(_: unknown, { attrs }: { attrs: any }) {
    return { clickable: ref(attrs.onclick !== undefined) };
  },
};
</script>
<style scoped>
.base-status {
  font-size: var(--ms-1);
}
.base-status * {
  cursor: inherit;
}
</style>
