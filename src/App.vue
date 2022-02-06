<template>
  <header class="el-box el-box--invert" ref="header">
    <div class="el-center">
      <div
        class="el-cluster el-cluster--justify:space-between"
        style="width: 100%"
      >
        <h1>ECA</h1>
        <Statuses />
      </div>
    </div>
  </header>
  <main class="el-center">
    <SketchIn />
  </main>
  <footer class="footer el-box el-box--invert el-box--padding:s-1" ref="footer">
    <div class="el-center">
      <small
        ><a
          href="https://github.com/l1ck0h/elementary-cellular-automaton"
          target="_blank"
          rel="noopener noreferrer"
          >GitHub</a
        >
        version {{ version }}</small
      >
      <small>&copy; 2022 l1ck0h</small>
    </div>
  </footer>
  <Dialogs />
</template>
<script lang="ts">
import { version } from "../package.json";
import "@/every-layout.css";
import "@fontsource/press-start-2p";
import "nes.css/css/nes.min.css";
import { ref, onBeforeUnmount, onMounted } from "vue";
import Statuses from "@/components/parts/Statuses.vue";
import SketchIn from "@/components/parts/SketchIn.vue";
import Dialogs from "@/components/parts/Dialogs.vue";
export default {
  name: "App",
  components: { Statuses, SketchIn, Dialogs },
  // eslint-disable-next-line
  setup() {
    const header = ref<HTMLElement | null>(null);
    const app = document.getElementById("app");
    const footer = ref<HTMLElement | null>(null);
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
    return { header, footer, version: version };
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
/* .footer {
  font-size: var(--s-1);
} */
</style>
