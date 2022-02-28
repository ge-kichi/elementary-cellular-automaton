<template>
  <header ref="header" class="el-box el-box--invert el-box--padding:ms-1">
    <TheHeaderChild />
  </header>
  <main class="el-center">
    <TheSketchIn />
  </main>
  <footer ref="footer" class="el-box el-box--invert el-box--padding:ms-1">
    <TheFooterChild />
  </footer>
  <TheDialogRule />
</template>
<script lang="ts">
import "@l1ck0h/every-layout.css/every-layout.min.css";
import "@fontsource/press-start-2p";
import "nes.css/css/nes.min.css";
import { ref, onBeforeUnmount, onMounted } from "vue";
import TheHeaderChild from "@/components/TheHeaderChild.vue";
import TheSketchIn from "@/components/TheSketchIn.vue";
import TheFooterChild from "@/components/TheFooterChild.vue";
import TheDialogRule from "@/components/TheDialogRule.vue";
export default {
  name: "App",
  components: { TheHeaderChild, TheSketchIn, TheFooterChild, TheDialogRule },
  // eslint-disable-next-line
  setup() {
    const header = ref<HTMLElement | null>(null);
    const footer = ref<HTMLElement | null>(null);
    const app = document.getElementById("app");

    const setAppCssProp = (
      property: string,
      value: string | null,
      priority?: string | undefined
    ) => app?.style.setProperty(property, value, priority);

    const handleResize = () => {
      setAppCssProp("--vh", `${window.innerHeight * 0.01}px`);
      setAppCssProp("--space-top", `${header.value?.clientHeight}px`);
      setAppCssProp("--space-bottom", `${footer.value?.clientHeight}px`);
    };

    onMounted(() => {
      window.addEventListener("resize", handleResize);
      handleResize();
    });

    onBeforeUnmount(() => window.removeEventListener("resize", handleResize));

    return { header, footer };
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
h1 {
  margin: 0;
}
a {
  cursor: pointer;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
#app > main {
  position: relative;
  height: calc(
    calc(var(--vh) * 100) - (var(--space-top) + var(--space-bottom))
  );
}
</style>
