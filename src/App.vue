<template>
  <ScreenRotation maxHeight="599px">
    <template #default>
      <ScrollSnap>
        <template #section-1>
          <Main />
        </template>
        <template #section-2>
          <Settings />
        </template>
      </ScrollSnap>
    </template>
    <template #mobileLandscape>
      <Alert />
    </template>
  </ScreenRotation>
</template>
<script lang="ts">
import "@fontsource/press-start-2p";
import "nes.css/css/nes.min.css";
import "nes.icons/css/nes-icons.min.css";
import ScreenRotation from "@/components/fragments/ScreenRotation.vue";
import ScrollSnap from "@/components/fragments/ScrollSnap.vue";
import Main from "@/components/pages/Main.vue";
import Settings from "@/components/pages/Settings.vue";
import Alert from "@/components/pages/Alert.vue";
export default {
  name: "App",
  components: {
    ScreenRotation,
    ScrollSnap,
    Main,
    Settings,
    Alert,
  },
};
</script>
<style>
:root {
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
  width: 100%;
  height: 100vh;
  background-color: var(--background-color);
}
</style>
