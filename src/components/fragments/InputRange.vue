<template>
  <input type="range" v-bind="attrs" @input="oninput" />
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
