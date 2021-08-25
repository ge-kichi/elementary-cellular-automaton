import * as R from "ramda";

const createState = _spaceSize => new Int8Array(_spaceSize);

export class CellularAutomaton {
    
    constructor(rule, initialState, spaceSize) {
        // CAのバイナリコーディングされたルール (Wolfram code)
        this.rule = rule;
        // CAの状態空間
        this.spaceSize = spaceSize;
        this.state = createState(spaceSize);
        this.nextState = createState(spaceSize);
        this.range = R.range(0, spaceSize);
        this.step = 1;
        // 最初の状態を初期化
        if (initialState === "random") {
            // ランダムver.
            this.state = new Int8Array(R.map(() => Math.floor(Math.random() * 2), this.range));
        } else {
            // 中央の１ピクセルのみ１、後は０
            this.state[~~(this.spaceSize / 2)] = 1;
        }
    }

    generate(callback){
        callback(this.state, this.step);

        // stateから計算した次の結果をnext_stateに保存
        R.forEach(i => {
            // left cell
            const l = this.state[(i - 1 >= 0) ? i - 1 : this.spaceSize - 1];
            // center cell
            const c = this.state[i];
            // right cell
            const r = this.state[(i + 1) % this.spaceSize];
    
            // neighbor_cell_codeは現在の状態のバイナリコーディング
            // ex) 現在が[1 1 0]の場合
            //     neighbor_cell_codeは 1*2^2 + 1*2^1 + 0*2^0 = 6となるので、
            //     RULEの６番目のビットが１ならば、次の状態は１となるので、
            //     RULEをneighbor_cell_code分だけビットシフトして１と論理積をとる。
            const neighborCellCode = (2 ** 2 * l) + (2 ** 1 * c) + (2 ** 0 * r);
            this.nextState[i] = (this.rule >> neighborCellCode) & 1 ? 1 : 0;
        }, this.range);
    
        // 最後に入れ替え
        [this.state, this.nextState] = [this.nextState, this.state];
    
        // ステップ数を加算する
        this.step++;
    }
}
