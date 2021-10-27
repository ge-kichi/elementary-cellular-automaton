<template>
  <Main />
  <RuleDialog />
</template>
<script>
import "dialog-polyfill/dist/dialog-polyfill.css";
import "@fontsource/press-start-2p";
import "nes.css/css/nes.min.css";
import Main from "@/components/pages/Main.vue";
import RuleDialog from "@/components/organisms/RuleDialog.vue";
export default {
  name: "App",
  components: {
    Main,
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
  font-size: xx-small;
}
html,
body {
  background-color: var(--background-color);
}
dialog {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
dialog::backdrop,
dialog + .backdrop {
  position: fixed;
  width: var(--width);
  height: var(--height);
}
#app {
  position: absolute;
  width: var(--width);
  height: var(--height);
  background-color: var(--background-color);
}
@media screen and (max-width: 599px) {
  dialog {
    transform: translateY(-25%);
  }
}
</style>
