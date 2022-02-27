<template>
  <input
    class="input-range"
    type="range"
    v-bind="attrs"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
<script lang="ts">
export default {
  name: "InputRange",
  emits: ["update:modelValue"],
  props: {
    attrs: {
      type: Object,
      required: false,
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
};
</script>
