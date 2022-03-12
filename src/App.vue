<template>
  <div
    id="app__container"
    class="el-cover el-cover--space:ms-1 el-cover--minHeight:100%"
  >
    <header>
      <TheHeaderChild />
    </header>
    <canvas
      ref="sketchIn"
      class="sketchIn el-cover__centered el-center el-center--gutters:0"
    />
    <footer>
      <TheFooterChild />
    </footer>
  </div>
  <TheDialogRule />
</template>
<script lang="ts">
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import TheHeaderChild from "@/components/TheHeaderChild.vue";
import TheFooterChild from "@/components/TheFooterChild.vue";
import TheDialogRule from "@/components/TheDialogRule.vue";
import { key, GetterTypes, MutationTypes } from "@/store";
import { create, ECA } from "@/modules/ECA";
export default {
  name: "App",
  components: { TheHeaderChild, TheFooterChild, TheDialogRule },
  // eslint-disable-next-line
  setup() {
    const store = useStore(key);
    const sketchIn = ref();

    onMounted(() => {
      const cellRatio = 8;
      // eslint-disable-next-line
      let context: any;
      let canvasWidth: number;
      let canvasHeight: number;
      let spaceSize: number;
      let maxGen: number;
      let eca: ECA;
      let timeoutID: number;

      const node = sketchIn.value;

      const init = () => {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
          clear();
          const clientWidth = node.clientWidth;
          const clientHeight = node.clientHeight;
          spaceSize = Math.floor(clientWidth / cellRatio);
          maxGen = Math.floor(clientHeight / cellRatio) - 1;
          canvasWidth = spaceSize * 8;
          canvasHeight = maxGen * 8;
          node.setAttribute("width", canvasWidth.toString());
          node.setAttribute("height", canvasHeight.toString());
        });
      };

      const clear = () => context.clearRect(0, 0, canvasWidth, canvasHeight);

      const visualizer = (state: Int8Array, gen: number) => {
        state.forEach((cell, cellIndex) => {
          if (cell !== 1) return;
          context.fillStyle = "#00933B";
          context.fillRect(
            cellIndex * cellRatio,
            (gen - 1) * cellRatio,
            cellRatio * 0.95,
            cellRatio * 0.95
          );
        });
      };

      node.addEventListener("click", () => {
        clear();
        if (store.getters[GetterTypes.RuleType] === "random") {
          store.commit(
            MutationTypes.InputRuleNumber,
            Math.floor(Math.random() * 256).toString()
          );
        }
        eca = create(
          Number(store.getters[GetterTypes.RuleNumber]),
          spaceSize,
          store.getters[GetterTypes.InitState]
        );
        visualizer(eca.state, eca.gen);
        while (!(eca.gen > maxGen)) {
          eca = eca.generate();
          visualizer(eca.state, eca.gen);
        }
      });
      context = node.getContext("2d");
      window.addEventListener("resize", init);
      init();
    });
    return { sketchIn };
  },
};
</script>
<style>
:root {
  --color-transparent: rgba(0, 0, 0, 0);
  --color-light: rgb(255, 255, 255);
  --color-neutral: rgb(182, 182, 183);
  --color-dark: rgb(33, 37, 41);
  --color-dark-opacity: rgba(33, 37, 41, 0.8);
  --zIndex-highlight: 1000;
  --zIndex-overlay: 999;
}
* {
  cursor: auto;
  color: var(--color-light);
  background-color: var(--color-dark);
}
html,
body,
#app,
#app__container {
  width: 100%;
  height: 100%;
}
.sketchIn {
  width: 100%;
  height: 100%;
  cursor: pointer;
  border: solid thin white;
}
/* utilities */
.app-util-clickable {
  cursor: pointer !important;
}
.app-util-highlight {
  z-index: var(--zIndex-highlight) !important;
}
</style>
