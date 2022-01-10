<template>
  <div id="eca" ref="eca" class="el-box el-box--padding:0">
    <header class="el-box el-center" ref="header">
      <div
        class="el-cluster el-cluster--justify:space-between"
        style="width: 100%"
      >
        <h1 id="brand">ECA</h1>
        <div id="statuses" class="el-cluster">
          <Statuses />
        </div>
      </div>
    </header>
    <main class="el-box el-box--padding:0 el-center">
      <SketchIn />
    </main>
  </div>
  <Dialogs />
</template>
<script lang="ts">
import { ref, onBeforeUnmount, onMounted } from "vue";
import Statuses from "@/components/parts/Statuses.vue";
import SketchIn from "@/components/parts/SketchIn.vue";
import Dialogs from "@/components/parts/Dialogs.vue";
export default {
  name: "ECA",
  components: { Statuses, SketchIn, Dialogs },
  // eslint-disable-next-line
  setup() {
    const eca = ref<HTMLElement | null>(null);
    const header = ref<HTMLElement | null>(null);
    const handleResize = () =>
      eca.value?.style.setProperty(
        "--space-top",
        `${header.value?.clientHeight}px`
      );
    onMounted(() => {
      handleResize();
      window.addEventListener("resize", handleResize);
    });
    onBeforeUnmount(() => window.removeEventListener("resize", handleResize));
    return { eca, header };
  },
};
</script>
<style scoped>
#eca {
  width: 100%;
  height: 100%;
}
main {
  position: relative;
  height: calc(100% - var(--space-top));
}
</style>
