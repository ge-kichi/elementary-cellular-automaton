<template>
  <div
    id="app__container"
    class="el-cover el-cover--space:ms-1 el-cover--minHeight:100%"
  >
    <header>
      <TheHeaderChild />
    </header>
    <canvas
      ref="sketchIn"
      class="sketchIn el-cover__centered el-center el-center--gutters:0"
    />
    <footer>
      <TheFooterChild />
    </footer>
  </div>
  <TheDialogRule />
</template>
<script lang="ts">
import TheHeaderChild from "@/components/TheHeaderChild.vue";
import TheFooterChild from "@/components/TheFooterChild.vue";
import TheDialogRule from "@/components/TheDialogRule.vue";
import { useCanvas } from "@/hooks";
export default {
  name: "App",
  components: { TheHeaderChild, TheFooterChild, TheDialogRule },
  setup() {
    return useCanvas();
  },
};
</script>
<style>
:root {
  --color-transparent: rgba(0, 0, 0, 0);
  --color-light: rgb(255, 255, 255);
  --color-neutral: rgb(182, 182, 183);
  --color-dark: rgb(33, 37, 41);
  --color-dark-opacity: rgba(33, 37, 41, 0.8);
  --zIndex-highlight: 1000;
  --zIndex-overlay: 999;
}
* {
  cursor: auto;
  color: var(--color-light);
  background-color: var(--color-dark);
}
html {
  touch-action: manipulation;
}
html,
body,
#app,
#app__container,
.sketchIn {
  width: 100%;
  height: 100%;
}
.sketchIn {
  cursor: pointer;
  border: solid thin white;
}
/* utilities */
.app-util-clickable {
  cursor: pointer !important;
}
</style>
