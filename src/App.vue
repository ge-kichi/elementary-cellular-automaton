<template>
  <template v-if="isPortrait">
    <Main />
  </template>
  <template v-else>
    <Alert />
  </template>
</template>
<script>
import { onBeforeUnmount, onMounted, ref } from "vue";
import "dialog-polyfill/dist/dialog-polyfill.css";
import "@fontsource/press-start-2p";
import "nes.css/css/nes.min.css";
import Main from "@/components/pages/Main.vue";
import Alert from "@/components/pages/Alert.vue";
export default {
  name: "App",
  components: {
    Main,
    Alert,
  },
  setup() {
    const isPortrait = ref(true);
    const orientation = window.screen.orientation;
    const swtichScreen = () =>
      (isPortrait.value = orientation.type.indexOf("portrait") !== -1);
    onMounted(() => {
      swtichScreen();
      orientation.addEventListener("change", swtichScreen);
    });
    onBeforeUnmount(() =>
      orientation.removeEventListener("change", swtichScreen)
    );
    return {
      isPortrait,
    };
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
