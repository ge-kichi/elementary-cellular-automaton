<template>
  <template v-if="!isMobileLandscape">
    <Main />
  </template>
  <template v-else>
    <Alert />
  </template>
</template>
<script>
import { onMounted, ref } from "vue";
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
    const isMobileLandscape = ref(false);
    const mediaQuery = window.matchMedia(
      "(max-height: 599px) and (orientation:landscape)"
    );
    const handleMediaQuery = (e) => (isMobileLandscape.value = e.matches);
    onMounted(() => {
      handleMediaQuery(mediaQuery);
      mediaQuery.addEventListener("change", handleMediaQuery);
    });
    return {
      isMobileLandscape,
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
@media screen and (max-width: 599px) and (orientation: portrait) {
  dialog {
    transform: translateY(-25%);
  }
}
</style>
