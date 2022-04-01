import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { key, GetterTypes, MutationTypes } from "@/store";
import { create, ECA } from "@/modules/ECA";

const cellRatio = 8;
const cellSizeRatio = 0.95;
const cellStyle = "#00933B";

const { InitState, RuleNumber, RuleType } = GetterTypes;
const { InputRuleNumber } = MutationTypes;

let context: CanvasRenderingContext2D;
let canvasWidth: number;
let canvasHeight: number;
let spaceSize: number;
let maxGen: number;
let eca: ECA;
let timeoutID: number;

const useCanvas = () => {
  const { getters, commit } = useStore(key);
  const sketchIn = ref();

  onMounted(() => {
    const node = sketchIn.value;
    context = node.getContext("2d");

    const clear = () => context.clearRect(0, 0, canvasWidth, canvasHeight);

    const init = () => {
      clear();
      const clientWidth = node.clientWidth;
      const clientHeight = node.clientHeight;
      spaceSize = Math.floor(clientWidth / cellRatio);
      maxGen = Math.floor(clientHeight / cellRatio) - 1;
      canvasWidth = spaceSize * cellRatio;
      canvasHeight = maxGen * cellRatio;
      node.setAttribute("width", canvasWidth.toString());
      node.setAttribute("height", canvasHeight.toString());
    };

    const visualizer = (state: Int8Array, gen: number) => {
      state.forEach((cell, cellIndex) => {
        if (cell !== 1) return;
        context.fillStyle = cellStyle;
        context.fillRect(
          cellIndex * cellRatio,
          (gen - 1) * cellRatio,
          cellRatio * cellSizeRatio,
          cellRatio * cellSizeRatio
        );
      });
    };

    const start = () => {
      clear();
      if (getters[RuleType] === "random") {
        commit(InputRuleNumber, Math.floor(Math.random() * 256).toString());
      }
      eca = create(Number(getters[RuleNumber]), spaceSize, getters[InitState]);
      visualizer(eca.state, eca.gen);
      while (!(eca.gen > maxGen)) {
        eca = eca.generate();
        visualizer(eca.state, eca.gen);
      }
    };

    init();
    window.addEventListener("resize", () => {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(init, 1000);
    });
    node.addEventListener("click", start);
  });
  return sketchIn;
};

export default useCanvas;
