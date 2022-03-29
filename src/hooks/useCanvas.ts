import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { key, GetterTypes, MutationTypes } from "@/store";
import { create, ECA } from "@/modules/ECA";

// eslint-disable-next-line
const useCanvas = () => {
  const { getters, commit } = useStore(key);
  const { InitState, RuleNumber, RuleType } = GetterTypes;
  const { InputRuleNumber } = MutationTypes;
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

    node.addEventListener("click", start);
    context = node.getContext("2d");
    window.addEventListener("resize", init);
    window.addEventListener("orientationchange", () =>
      dispatchEvent(new Event("resize"))
    );
    init();
  });
  return sketchIn;
};

export default useCanvas;
