import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { key, GetterTypes, MutationTypes } from "@/store";
import { create, ECA } from "@/modules/ECA";

const cellRatio = 16;
const cellSizeRatio = 0.9;
const cellSize = cellRatio * cellSizeRatio;
const cellStyle = "#00933B";
const waitTime = 500;

const { InitState, RuleNumber, RuleType } = GetterTypes;
const { InputRuleNumber } = MutationTypes;

let context: CanvasRenderingContext2D;
let canvasWidth: number;
let canvasHeight: number;
let spaceSize: number;
let maxGen: number;
let eca: ECA;
let timeoutID: number;

const clear = () => context.clearRect(0, 0, canvasWidth, canvasHeight);

const visualizer = (state: Int8Array, gen: number) => {
  context.fillStyle = cellStyle;
  state.forEach((cell, cellIndex) => {
    if (cell !== 1) return;
    context.fillRect(
      cellIndex * cellRatio,
      (gen - 1) * cellRatio,
      cellSize,
      cellSize
    );
  });
};

const useCanvas = () => {
  const { getters, commit } = useStore(key);
  const sketchIn = ref();

  const play = () => {
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

  const init = (node: HTMLCanvasElement) => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      node.removeEventListener("click", play);
      clear();
      spaceSize = Math.floor(node.clientWidth / cellRatio);
      maxGen = Math.floor(node.clientHeight / cellRatio) - 1;
      canvasWidth = spaceSize * cellRatio;
      canvasHeight = maxGen * cellRatio;
      node.width = canvasWidth;
      node.height = canvasHeight;
      node.addEventListener("click", play);
    }, waitTime);
  };

  onMounted(() => {
    const node = sketchIn.value;
    context = node.getContext("2d");
    window.addEventListener("resize", () => init(node));
    init(node);
  });

  return sketchIn;
};

export default useCanvas;
