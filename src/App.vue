<template>
  <header>
    <TheHeaderChild />
  </header>
  <canvas ref="sketchIn" class="sketchIn el-cover__centered" />
  <footer>
    <TheFooterChild />
  </footer>
  <TheDialogRule />
</template>
<script lang="ts">
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { key, ActionTypes } from "@/store";
import TheHeaderChild from "@/components/TheHeaderChild.vue";
import TheFooterChild from "@/components/TheFooterChild.vue";
import TheDialogRule from "@/components/TheDialogRule.vue";
export default {
  name: "App",
  components: { TheHeaderChild, TheFooterChild, TheDialogRule },
  // eslint-disable-next-line
  setup() {
    const store = useStore(key);
    const sketchIn = ref();
    onMounted(() => store.dispatch(ActionTypes.Sketch, sketchIn.value));
    return { sketchIn };
  },
};
</script>
<style>
:root {
  --color-transparent: rgba(0, 0, 0, 0);
  --color-light: rgb(255, 255, 255);
  --color-neutral: rgb(182, 182, 183);
  --color-dark: rgb(33, 37, 41);
  --color-dark-opacity: rgba(33, 37, 41, 0.8);
  --zIndex-highlight: 1000;
  --zIndex-overlay: 999;
}
* {
  cursor: auto;
  color: var(--color-light);
  background-color: var(--color-dark);
}
html {
  overflow: hidden;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
.sketchIn {
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border: solid thin white;
}
</style>
