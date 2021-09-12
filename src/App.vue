<template>
  <Main />
</template>
<script>
import "dialog-polyfill/dist/dialog-polyfill.css";
import "@fontsource/press-start-2p";
import "nes.css/css/nes.min.css";
import Main from "@/components/pages/Main.vue";
export default {
  name: "App",
  components: {
    Main,
  },
};
</script>
<style>
:root {
  --width: 100%;
  --height: 100%;
  --background-color: #212529;
}
* {
  cursor: auto;
  font-size: x-small;
}
#app {
  position: absolute;
  width: var(--width);
  height: var(--height);
  background-color: var(--background-color);
}
@media screen and (max-width: 599px) {
  * {
    font-size: xx-small;
  }
}
</style>
