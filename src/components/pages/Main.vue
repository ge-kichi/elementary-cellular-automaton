<template>
  <div id="main" class="el-box --0">
    <header class="el-box">
      <Statuses />
    </header>
    <main class="el-box">
      <Playground />
      <ScrollGuide />
    </main>
    <aside class="el-box">
      <Settings />
    </aside>
  </div>
</template>
<script lang="ts">
import Statuses from "@/components/parts/Statuses.vue";
import ScrollGuide from "@/components/fragments/ScrollDown.vue";
import Playground from "@/components/parts/Playground.vue";
import Settings from "@/components/parts/Settings.vue";
export default {
  name: "Main",
  components: {
    Statuses,
    ScrollGuide,
    Playground,
    Settings,
  },
};
</script>
<style scoped>
#main {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-padding: var(--space-top);
}
#main > * {
  margin: 0 auto;
}
#main > header {
  position: sticky;
  display: flex;
  top: 0;
  height: var(--space-top);
  justify-content: space-around;
  align-items: center;
  z-index: 9999;
}
#main > main,
#main > aside {
  position: relative;
  height: calc(100% - var(--space-top));
  scroll-snap-align: start;
}
#main > aside {
  margin-top: var(--space-top);
}
</style>
