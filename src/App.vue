<template>
  <div id="main">
    <Status />
    <Sketch />
    <Menu />
    <RuleDialog />
  </div>
</template>
<script>
import "dialog-polyfill/dist/dialog-polyfill.css";
import "@fontsource/press-start-2p";
import "nes.css/css/nes.min.css";
import Status from "@/components/organisms/Status.vue";
import Sketch from "@/components/organisms/Sketch.vue";
import Menu from "@/components/organisms/Menu.vue";
import RuleDialog from "@/components/organisms/RuleDialog.vue";
export default {
  name: "App",
  components: {
    Status,
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
#app {
  position: absolute;
  width: var(--width);
  height: var(--height);
  background-color: var(--background-color);
}
#main {
  width: 600px;
  height: var(--height);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
@media screen and (max-width: 599px) {
  * {
    font-size: xx-small;
  }
  #main {
    width: 320px;
  }
}
</style>
