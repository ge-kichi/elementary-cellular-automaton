<template>
  <label class="Radio">
    <input
      type="radio"
      class="Radio-input nes-radio is-dark"
      :name="name"
      :value="value"
      :checked="checked"
      @click="() => $emit('click')"
    />
    <span class="Radio-label">{{ label }}</span>
  </label>
</template>
<script>
export default {
  name: "Radio",
  emits: ["click"],
  props: {
    label: String,
    name: String,
    value: String,
    checked: Boolean,
  },
};
</script>
<style scoped>
.Radio-input,
.Radio-label {
  cursor: pointer;
}
.Radio-input:checked + .Radio-label::before {
  top: -6px;
}
</style>