<template>
  <MediaQuery
    conditions="screen and (max-height:599px) and (orientation:landscape)"
  >
    <template #match>
      <Alert />
    </template>
    <template #default>
      <Main />
    </template>
  </MediaQuery>
</template>
<script lang="ts">
import "@/every-layout.css";
import "@fontsource/press-start-2p";
import "nes.css/css/nes.min.css";
import MediaQuery from "@/components/fragments/MediaQuery.vue";
import Main from "@/components/pages/Main.vue";
import Alert from "@/components/pages/Alert.vue";
export default {
  name: "App",
  components: {
    MediaQuery,
    Main,
    Alert,
  },
};
</script>
<style>
:root {
  --color-light: #ffffff;
  --color-help: #adafbc;
  --color-dark: #212529;
}
* {
  cursor: auto;
  color: var(--color-light);
  background-color: var(--color-dark);
  font-size: 1.7vh;
}
a {
  cursor: pointer;
}
ul {
  list-style: none;
  padding-left: 0;
}
#app {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
