<template>
  <dialog class="nes-dialog is-dark is-rounded" id="dialog-dark-rounded">
    <form method="dialog">
      <p class="title">Dark and Rounded dialog</p>
      <p>Alert: this is a dialog.</p>
      <menu class="dialog-menu">
        <button class="nes-btn">Cancel</button>
        <button class="nes-btn is-primary">Confirm</button>
      </menu>
    </form>
  </dialog>
</template>
<script lang="ts">
export default {
  name: "Dialog",
};
</script>
<style>
dialog {
  position: fixed;
  top: 50%;
  transform: translate(0, -50%);
}
dialog::backdrop,
dialog + .backdrop {
  background-color: green;
}
</style>