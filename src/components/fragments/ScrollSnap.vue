<template>
  <div class="ScrollSnap">
    <section class="ScrollSnap-section">
      <slot name="section-1"></slot>
    </section>
    <section class="ScrollSnap-section">
      <slot name="section-2"></slot>
    </section>
  </div>
</template>
<script lang="ts">
export default {
  name: "ScrollSnap",
};
</script>
<style scoped>
.ScrollSnap {
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
}
.ScrollSnap-section {
  height: 100vh;
  scroll-snap-align: start;
}
</style>