<template>
  <div id="the-sketchIn" ref="sketchIn"></div>
</template>
<script lang="ts">
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { key, ActionTypes } from "@/store";
export default {
  name: "TheSketchIn",
  // eslint-disable-next-line
  setup() {
    const store = useStore(key);
    const sketchIn = ref(null);
    onMounted(() => store.dispatch(ActionTypes.Sketch, sketchIn.value));
    return { sketchIn };
  },
};
</script>
<style scoped>
#the-sketchIn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
