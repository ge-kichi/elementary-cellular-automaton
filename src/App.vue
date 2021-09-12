<template>
  <Sketch />
  <Menu />
  <RuleDialog />
</template>
<script>
import "dialog-polyfill/dist/dialog-polyfill.css";
import "@fontsource/press-start-2p";
import "nes.css/css/nes.min.css";
import Sketch from "@/components/organisms/Sketch.vue";
import Menu from "@/components/organisms/Menu.vue";
import RuleDialog from "@/components/organisms/RuleDialog.vue";
export default {
  name: "App",
  components: {
    Sketch,
    Menu,
    RuleDialog,
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
@media screen and (max-width: 599px) {
  * {
    font-size: xx-small;
  }
}
#app {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: var(--width);
  height: var(--height);
  background-color: var(--background-color);
}
</style>
