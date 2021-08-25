import * as R from "ramda";
import { CellularAutomaton } from "./cellularAutomaton";

export const sketch = ({ startSelectors, width, height, getRule, setStep, cellSize = 2, cellColor = "#58F898" } = {}) => p => {
    const CELL = cellSize;
    const CANVASWIDTH = width;
    const CANVASHEIGHT = height;
    const CELLCOLOR = cellColor;

    const spaceSize = CANVASWIDTH / CELL;
    const maxStep = Math.round(CANVASHEIGHT / CELL);

    let ca = undefined;
    let stack = [];
    let rule = undefined;

    const start = e => {
        p.noLoop();
        p.clear();
        rule = getRule();
        ca = new CellularAutomaton(rule, e.target.value, spaceSize);
        stack = R.append(ca.state, []);
        setStep(ca.step);
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
        if (ca) {
            if (stack.length >= maxStep) return p.noLoop();
            ca.generate(visualizer);
            setStep(ca.step);
            stack = R.append(ca.state, stack);
        }
    };
};
