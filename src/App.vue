<template>
  <ScreenRotation maxHeight="599px">
    <template #default>
      <Main />
    </template>
    <template #mobileLandscape>
      <Alert />
    </template>
  </ScreenRotation>
</template>
<script lang="ts">
import "@fontsource/press-start-2p";
import "nes.css/css/nes.min.css";
import ScreenRotation from "@/components/templates/ScreenRotation.vue";
import Main from "@/components/pages/Main.vue";
import Alert from "@/components/pages/Alert.vue";
export default {
  name: "App",
  components: {
    ScreenRotation,
    Main,
    Alert,
  },
};
</script>
<style>
* {
  cursor: auto;
  font-size: x-small;
}
html,
body,
#app {
  background-color: #212529;
}
ul {
  padding: 0;
}
li {
  list-style: none;
}
#app {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
