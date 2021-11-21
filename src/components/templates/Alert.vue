<template>
  <div class="Alert">
    <strong class="nes-text is-warning">
      Sorry! Please rotate your smartphone from landscape to portrait!
    </strong>
  </div>
</template>
<script lang="ts">
export default {
  name: "Alert",
};
</script>
<style scoped>
.Alert {
  display: flex;
  width: var(--width);
  height: var(--height);
  justify-content: center;
  align-items: center;
}
</style>