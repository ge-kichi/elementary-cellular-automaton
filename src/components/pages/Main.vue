<template>
  <div class="Main">
    <header class="Main-header">
      <Statuses />
    </header>
    <section class="Main-section">
      <Playground />
      <ScrollGuide />
    </section>
    <section class="Main-section">
      <Settings />
    </section>
  </div>
</template>
<script lang="ts">
import Statuses from "@/components/templates/Statuses.vue";
import ScrollGuide from "@/components/fragments/ScrollGuide.vue";
import Playground from "@/components/templates/Playground.vue";
import Settings from "@/components/templates/Settings.vue";
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
.Main {
  height: 100%;
  width: 100%;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
  --space-top: 40px;
  scroll-padding: var(--space-top);
}
.Main > * {
  width: 600px;
  margin: 0 auto;
}
.Main-header {
  position: sticky;
  display: flex;
  top: 0;
  height: var(--space-top);
  justify-content: space-around;
  align-items: center;
  background-color: var(--backgound-color);
  z-index: 9999;
}
.Main-section {
  position: relative;
  height: calc(100% - var(--space-top));
  scroll-snap-align: start;
}
.Main-section:not(:first-of-type) {
  margin-top: var(--space-top);
}
@media screen and (max-width: 599px) and (orientation: portrait) {
  .Main > * {
    width: 95%;
  }
}
</style>
