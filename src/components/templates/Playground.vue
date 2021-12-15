<template>
  <div id="playground" class="Playground" ref="playground"></div>
</template>
<script lang="ts">
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { key, ActionTypes } from "@/store";
export default {
  name: "Playground",
  // eslint-disable-next-line
  setup() {
    const store = useStore(key);
    const playground = ref(null);
    onMounted(() => store.dispatch(ActionTypes.Sketch, playground.value));
    return {
      playground,
    };
  },
};
</script>
<style scoped>
.Playground {
  height: calc(100% - 42px);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
