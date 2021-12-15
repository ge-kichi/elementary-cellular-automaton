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
import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";
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
  --font-color: #ffffff;
  --background-color: #212529;
}
* {
  cursor: auto;
  font-size: 12px;
}
html,
body,
#app {
  background-color: var(--background-color);
}
#app {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
