<template>
  <div id="main" class="el-box --0">
    <div id="main-wrapper" class="el-center">
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
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
  /* scroll-padding: var(--space-top); */
  scroll-padding: auto;
}
#main,
#main-wrapper {
  height: 100%;
}
#main-wrapper > header {
  position: sticky;
  display: flex;
  top: 0;
  justify-content: space-around;
  align-items: center;
  z-index: 9999;
  min-width: 100%;
}
#main-wrapper > main,
#main-wrapper > aside {
  position: relative;
  width: 100%;
  /* min-height: calc(100% - var(--space-top)); */
  min-height: 100%;
  scroll-snap-align: start;
}
</style>
