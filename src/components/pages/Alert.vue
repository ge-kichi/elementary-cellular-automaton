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
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
