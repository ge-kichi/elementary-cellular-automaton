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
  --font-color: #ffffff;
  --background-color: #212529;
}
* {
  cursor: auto;
  font-size: 12px;
}
ul {
  list-style: none;
  padding-left: 0;
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
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
}
/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
}
</style>
