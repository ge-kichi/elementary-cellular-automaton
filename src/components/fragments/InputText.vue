<template>
  <input
    type="text"
    class="nes-input"
    :class="hasError ? 'is-error' : 'is-dark'"
    :inputmode="inputmode"
    :minlength="minlength"
    :maxlength="maxlength"
    :pattern="pattern"
    :required="required"
    :disabled="disabled"
    :value="value"
    @input="input"
  />
</template>
<script lang="ts">
export default {
  name: "InputText",
  emits: ["input"],
  props: {
    hasError: {
      type: Boolean,
      default: false,
    },
    inputmode: String,
    minlength: Number,
    maxlength: Number,
    pattern: String,
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      required: true,
    },
  },
  setup(_: unknown, { emit }: { emit: any }) {
    const input = (e: any) => emit("input", e);
    return {
      input,
    };
  },
};
</script>
<style>
</style>