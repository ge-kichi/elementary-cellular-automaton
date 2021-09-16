<template>
  <label>
    <input
      type="radio"
      class="nes-radio is-dark"
      :name="name"
      :value="value"
      :checked="checked"
      @click="() => $emit('click')"
    />
    <span>{{ label }}</span>
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
.nes-radio + span {
  cursor: pointer;
}
.nes-radio:checked + span::before {
  top: -6px;
}
</style>