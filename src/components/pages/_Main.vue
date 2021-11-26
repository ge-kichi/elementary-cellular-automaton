<template>
  <div class="Main">
    <header>
      <Statuses />
    </header>
    <main class="Sketch" ref="sketch"></main>
    <footer>
      <Settings />
    </footer>
  </div>
</template>
<script lang="ts">
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import { key, ActionTypes } from "@/store";
import Statuses from "@/components/parts/Statuses.vue";
import Settings from "@/components/parts/Settings.vue";
export default {
  name: "Main",
  components: {
    Statuses,
    Settings,
  },
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
<style scoped>
.Main {
  width: 600px;
  height: var(--height);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.Main > header {
  margin: 5px 0;
}
.Main > main {
  height: 100%;
}
.Main > footer {
  margin: 5px 0;
  bottom: 0;
}

@media screen and (max-width: 599px) and (orientation: portrait) {
  .Main {
    width: 320px;
  }
}
</style>
