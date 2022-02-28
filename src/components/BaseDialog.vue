<template>
  <div class="base-dialog__overlay" @click.self="$emit('close')">
    <div class="el-imposter">
      <div class="base-dialog" @click.self="$emit('close')">
        <i
          class="base-dialog__close nes-icon close is-small"
          @click="$emit('close')"
        ></i>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "BaseDialog",
  emits: ["close"],
};
</script>
<style scoped>
.base-dialog {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.el-imposter,
.base-dialog {
  background-color: transparent;
}
.base-dialog > * {
  background-color: var(--color-dark);
}
.base-dialog__close {
  display: inline-block;
  cursor: pointer;
}
.base-dialog__close::before {
  color: var(--color-light);
}
.base-dialog__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-dark-opacity);
  z-index: var(--zIndex-overlay);
}
</style>
