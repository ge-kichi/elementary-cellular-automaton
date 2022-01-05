<template>
  <input
    type="range"
    class="el-box --0 nes-input"
    v-bind="attrs"
    @input="oninput"
  />
</template>
<script lang="ts">
export default {
  name: "InputRange",
  emits: ["oninput"],
  props: {
    attrs: {
      type: Object,
      required: false,
    },
  },
};
</script>
