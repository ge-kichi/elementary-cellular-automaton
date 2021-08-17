import * as R from "ramda";

let spaceSize;
let range;

// CAのバイナリコーディングされたルール (Wolfram code)
let rule;

let step = 0;

// CAの状態空間
let state;
let nextState;

const createState = _spaceSize => new Int8Array(_spaceSize);

export const init = (_rule, _initialState, _spaceSize) => {
    spaceSize = _spaceSize;
    state = createState(spaceSize);
    nextState = createState(spaceSize);
    range = R.range(0, spaceSize);
    step = 1;

    // 最初の状態を初期化
    if (_initialState === "random") {
        // ランダムver.
        state = new Int8Array(R.map(() => Math.floor(Math.random() * 2), range));
    } else {
        // 中央の１ピクセルのみ１、後は０
        state[~~(spaceSize / 2)] = 1;
    }

    rule = _rule;
    return state;
};

export const generate = _callback => {
    _callback(state, step);

    // stateから計算した次の結果をnext_stateに保存
    R.forEach(i => {
        // left cell
        const l = state[(i - 1 >= 0) ? i - 1 : spaceSize - 1];
        // center cell
        const c = state[i];
        // right cell
        const r = state[(i + 1) % spaceSize];

        // neighbor_cell_codeは現在の状態のバイナリコーディング
        // ex) 現在が[1 1 0]の場合
        //     neighbor_cell_codeは 1*2^2 + 1*2^1 + 0*2^0 = 6となるので、
        //     RULEの６番目のビットが１ならば、次の状態は１となるので、
        //     RULEをneighbor_cell_code分だけビットシフトして１と論理積をとる。
        const neighborCellCode = (2 ** 2 * l) + (2 ** 1 * c) + (2 ** 0 * r);
        nextState[i] = (rule >> neighborCellCode) & 1 ? 1 : 0;
    }, range);

    // 最後に入れ替え
    [state, nextState] = [nextState, state];

    // ステップ数を加算する
    step++;

    return state;
};

export const getStep = () => step;
