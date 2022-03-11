<template>
  <span
    class="base-status el-box el-box--invert el-box--padding:0 nes-text"
    :class="{ 'app-ul-highlight': highlight }"
  >
    <div
      class="el-center el-center--gutters:ms-1"
      :class="{ 'app-ul-clickable': isClickable }"
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
    return { isClickable: ref(attrs.onclick) };
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
