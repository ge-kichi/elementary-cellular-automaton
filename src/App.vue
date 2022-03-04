<template>
  <header ref="header" class="el-box el-box--invert el-box--padding:ms-1">
    <TheHeaderChild />
  </header>
  <main id="sketchIn__wrapper" class="el-center">
    <div id="sketchIn" ref="sketchIn"></div>
  </main>
  <footer ref="footer" class="el-box el-box--invert el-box--padding:ms-1">
    <TheFooterChild />
  </footer>
  <TheDialogRule />
</template>
<script lang="ts">
import { ref, onBeforeUnmount, onMounted } from "vue";
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
    const header = ref<HTMLElement | null>(null);
    const sketchIn = ref<HTMLElement | null>(null);
    const footer = ref<HTMLElement | null>(null);
    const app = document.getElementById("app");

    const setAppCssProp = (property: string, value: string | null) =>
      app?.style.setProperty(property, value);

    const handleResize = () => {
      setAppCssProp("--vh", `${window.innerHeight * 0.01}px`);
      setAppCssProp("--space-top", `${header.value?.clientHeight}px`);
      setAppCssProp("--space-bottom", `${footer.value?.clientHeight}px`);
    };

    onMounted(() => {
      window.addEventListener("resize", handleResize);
      setTimeout(() => {
        handleResize();
        store.dispatch(ActionTypes.Sketch, sketchIn.value);
      });
    });

    onBeforeUnmount(() => window.removeEventListener("resize", handleResize));

    return { header, sketchIn, footer };
  },
};
</script>
<style>
:root {
  --color-transparent: rgba(0, 0, 0, 0);
  --color-light: rgb(255, 255, 255);
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
#sketchIn__wrapper {
  position: relative;
  height: calc(
    calc(var(--vh) * 100) - (var(--space-top) + var(--space-bottom))
  );
}
#sketchIn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
