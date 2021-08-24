<template>
  <label>
    <input
      type="radio"
      class="nes-radio is-dark"
      :name="name"
      :value="value"
      :checked="checked"
    />
    <span>{{ label }}</span>
  </label>
</template>
<script>
export default {
  name: "Radio",
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
</style>