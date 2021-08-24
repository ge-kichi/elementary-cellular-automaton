import * as R from "ramda";
import * as CA from "./cellularAutomaton";

export const sketch = ({ startSelectors, width, height, cellSize, cellColor, getRule } = {}) => p => {
    const CELL = cellSize;
    const CANVASWIDTH = width;
    const CANVASHEIGHT = height;
    const CELLCOLOR = cellColor;

    const spaceSize = CANVASWIDTH / CELL;
    const maxStep = CANVASHEIGHT / CELL - 1;

    let stack = [];
    let rule;

    const start = e => {
        p.noLoop();
        p.clear();
        rule = getRule();
        const state = CA.init(rule, e.target.value, spaceSize);
        stack = R.append(state, []);
        p.loop();
    };

    const visualizer = (state, step) => {
        R.addIndex(R.forEach)((cell, cellIndex) => {
            if (cell !== 1) return;
            p.rect(cellIndex * CELL, step * CELL, CELL, CELL);
            p.fill(CELLCOLOR);
        }, state);
    };

    p.setup = () => {
        p.createCanvas(CANVASWIDTH, CANVASHEIGHT);
        R.forEach(selector => {
            selector.mouseClicked(start)
        }, p.selectAll(startSelectors));
        rule = getRule();
        p.noLoop();
    };

    p.draw = () => {
        if (stack.length >= maxStep) return p.noLoop();
        const state = CA.generate(visualizer);
        stack = R.append(state, stack);
    };
};
