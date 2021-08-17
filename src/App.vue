<template>
  <div class="nes-container is-rounded is-dark with-title">
    <span class="title">CELLULAR AUTOMATON VER. {{ ver }}</span>
    <div id="container-outer">
      <PlaySelect />
      <RuleSelect />
      <div id="container-inner">
        <Step />
        <Rule />
      </div>
    </div>
  </div>
  <Sketch />
  <RuleDialog />
</template>

<script>
import "dialog-polyfill/dist/dialog-polyfill.css";
import "@fontsource/press-start-2p";
import "nes.css/css/nes.min.css";
import PlaySelect from "./components/PlaySelect.vue";
import RuleSelect from "./components/RuleSelect.vue";
import Step from "./components/Step.vue";
import Rule from "./components/Rule.vue";
import Sketch from "./components/Sketch.vue";
import RuleDialog from "./components/RuleDialog.vue";
import { version } from "../package.json";
export default {
  name: "App",
  data() {
    return {
      ver: version,
    };
  },
  components: {
    PlaySelect,
    RuleSelect,
    Step,
    Rule,
    Sketch,
    RuleDialog,
  },
};
</script>

<style>
:root {
  --width: 512px;
  --height: 480px;
}
* {
  cursor: auto;
  font-size: x-small !important;
}
body {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
dialog {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
dialog::backdrop,
dialog + .backdrop {
  position: absolute;
  width: var(--width);
  height: var(--height);
}
.nes-radio + span,
.nes-btn {
  cursor: pointer;
}
#app {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #212529;
  width: var(--width);
  height: var(--height);
}
#container-outer {
  display: flex;
  justify-content: space-between;
}
#container-inner {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
