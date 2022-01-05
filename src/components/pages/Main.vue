<template>
  <div id="main" class="el-box --0" ref="main">
    <div class="el-center">
      <header class="el-box" ref="header">
        <Statuses />
      </header>
      <main class="el-box --0">
        <Playground />
        <ScrollDown />
      </main>
      <aside class="el-box --0">
        <Settings />
      </aside>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import Statuses from "@/components/parts/Statuses.vue";
import ScrollDown from "@/components/fragments/ScrollDown.vue";
import Playground from "@/components/parts/Playground.vue";
import Settings from "@/components/parts/Settings.vue";
export default {
  name: "Main",
  components: {
    Statuses,
    ScrollDown,
    Playground,
    Settings,
  },
  // eslint-disable-next-line
  setup() {
    const main = ref<HTMLElement | null>(null);
    const header = ref<HTMLElement | null>(null);
    const handleResize = () =>
      main.value?.style.setProperty(
        "--space-top",
        `${header.value?.clientHeight}px`
      );
    onMounted(() => {
      handleResize();
      window.addEventListener("resize", handleResize);
    });
    onBeforeUnmount(() => window.removeEventListener("resize", handleResize));
    return {
      main,
      header,
    };
  },
};
</script>
<style scoped>
#main {
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-padding: var(--space-top);
}
#main,
#main > .el-center {
  height: 100%;
}
#main header,
#main main,
#main aside {
  min-width: 100%;
}
#main header {
  position: sticky;
  top: 0;
  z-index: 9999;
}
#main main,
#main aside {
  position: relative;
  min-height: calc(100% - var(--space-top));
  scroll-snap-align: start;
}
</style>
