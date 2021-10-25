<template>
  <div class="Sketch" ref="sketch"></div>
</template>
<script>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import { Sketch } from "@/store/actionTypes";
export default {
  name: "Sketch",
  setup() {
    const store = useStore();
    const sketch = ref(null);
    onMounted(() => store.dispatch(Sketch, sketch.value));
    return {
      sketch,
    };
  },
};
</script>
<style scoped>
.Sketch {
  height: 100%;
}
</style>