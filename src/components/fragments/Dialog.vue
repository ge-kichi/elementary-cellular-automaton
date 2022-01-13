<template>
  <div class="overlay" @click.self="$emit('close')">
    <div class="el-imposter">
      <div class="dialog" @click.self="$emit('close')">
        <i class="nes-icon close is-small" @click="$emit('close')"></i>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "Dialog",
  emits: ["close"],
};
</script>
<style scoped>
.dialog {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.el-imposter,
.dialog {
  background-color: transparent;
}
.dialog > * {
  background-color: var(--color-dark);
}
.close {
  display: inline-block;
  cursor: pointer;
}
.close::before {
  color: white;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-dark-opacity);
  z-index: var(--zIndex-overlay);
}
</style>
