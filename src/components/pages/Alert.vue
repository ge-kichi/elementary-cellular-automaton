<template>
  <div class="Alert">
    <strong class="Alert-text nes-text is-warning">
      Sorry! Please rotate your device from landscape to portrait!
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
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
