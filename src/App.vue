<template>
  <template v-if="!isMobileLandscape">
    <Main />
  </template>
  <template v-else>
    <Alert />
  </template>
</template>
<script lang="ts">
import "dialog-polyfill/dist/dialog-polyfill.css";
import "@fontsource/press-start-2p";
import "nes.css/css/nes.min.css";
import "nes.icons/css/nes-icons.min.css";
import { onMounted, ref } from "vue";
import Main from "@/components/templates/Main.vue";
import Alert from "@/components/templates/Alert.vue";
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
    const handleMediaQuery = (mq: MediaQueryList | MediaQueryListEvent) =>
      (isMobileLandscape.value = mq.matches);
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
li {
  list-style: none;
}
#app {
  position: absolute;
  width: var(--width);
  height: var(--height);
  background-color: var(--background-color);
}
</style>
