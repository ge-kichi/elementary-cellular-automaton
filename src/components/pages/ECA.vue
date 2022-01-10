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
      <div id="sketchIn" ref="sketchIn"></div>
    </main>
  </div>
  <template v-if="openDialog === 'rule'">
    <CogRule />
  </template>
  <template v-if="openDialog === 'state'">
    <CogState />
  </template>
</template>
<script lang="ts">
import { ref, computed, onBeforeUnmount, onMounted } from "vue";
import { useStore } from "vuex";
import { key, ActionTypes, GetterTypes } from "@/store";
import Statuses from "@/components/parts/Statuses.vue";
import CogRule from "@/components/parts/CogRule.vue";
import CogState from "@/components/parts/CogState.vue";
export default {
  name: "ECA",
  components: {
    Statuses,
    CogRule,
    CogState,
  },
  // eslint-disable-next-line
  setup() {
    const store = useStore(key);
    const eca = ref<HTMLElement | null>(null);
    const header = ref<HTMLElement | null>(null);
    const handleResize = () =>
      eca.value?.style.setProperty(
        "--space-top",
        `${header.value?.clientHeight}px`
      );
    const sketchIn = ref(null);
    const openDialog = computed(() => store.getters[GetterTypes.OpenDialog]);
    onMounted(() => {
      store.dispatch(ActionTypes.Sketch, sketchIn.value);
      handleResize();
      window.addEventListener("resize", handleResize);
    });
    onBeforeUnmount(() => window.removeEventListener("resize", handleResize));
    return {
      eca,
      header,
      sketchIn,
      openDialog,
    };
  },
};
</script>
<style scoped>
#eca {
  width: 100%;
  height: 100%;
}
#statuses {
  font-size: var(--s-1);
}
main {
  position: relative;
  height: calc(100% - var(--space-top));
}
#sketchIn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
