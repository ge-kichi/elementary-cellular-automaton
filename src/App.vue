<template>
  <ECA />
</template>
<script lang="ts">
import "@fontsource/press-start-2p";
import "nes.css/css/nes.min.css";
import ECA from "@/components/pages/ECA.vue";
export default {
  name: "App",
  components: { ECA },
};
</script>
<style>
:root {
  --color-transparent:rgba(255, 255, 255, 0);
  --color-light: rgb(255, 255, 255);
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
h1 {
  margin: 0;
}
a {
  cursor: pointer;
}
ul {
  list-style: none;
  padding-left: 0;
}
html,
body,
#app {
  height: 100%;
}
</style>
