<template>
  <div class="ScrollGuide">
    <div>SCROLL TO SETTINGS SECTION</div>
    <div class="ScrollGuide-down"></div>
  </div>
</template>
<script lang="ts">
export default {
  name: "ScrollGuide",
};
</script>
<style scoped>
.ScrollGuide {
  color: var(--font-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.ScrollGuide-down::after {
  text-align: center;
  display: block;
  content: " <";
  transform: rotateZ(-90deg);
  font-size: 16px;
}
</style>
