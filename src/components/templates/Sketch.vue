<template>
  <div class="Sketch" ref="sketch"></div>
</template>
<script lang="ts">
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { key, ActionTypes } from "@/store";
export default {
  name: "Sketch",
  // eslint-disable-next-line
  setup() {
    const store = useStore(key);
    const sketch = ref(null);
    onMounted(() => store.dispatch(ActionTypes.Sketch, sketch.value));
    return {
      sketch,
    };
  },
};
</script>
<style>
.Sketch {
  height: 100%;
}
</style>
