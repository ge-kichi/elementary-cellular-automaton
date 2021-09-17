const range = (start, end) => [...Array(end - start)].map((_, i) => start + i);
const createState = (_spaceSize) => new Int8Array(_spaceSize);

let _rule;
let _spaceSize;
let _nextState;
let _range;
let _visualizer;

export default class CellularAutomaton {
  constructor(rule, initialState, spaceSize, visualizer) {
    // CAのバイナリコーディングされたルール (Wolfram code)
    _rule = rule;
    // CAの状態空間
    _spaceSize = spaceSize;
    this.state = createState(spaceSize);
    _nextState = createState(spaceSize);
    _range = range(0, spaceSize);
    this.step = 1;
    _visualizer = visualizer;
    // 最初の状態を初期化
    if (initialState === "random") {
      // ランダムver.
      this.state = new Int8Array(
        _range.map(() => Math.floor(Math.random() * 2))
      );
    } else {
      // 中央の１ピクセルのみ１、後は０
      this.state[~~(_spaceSize / 2)] = 1;
    }
  }

  generate() {
    _visualizer(this.state, this.step);

    // stateから計算した次の結果をnext_stateに保存
    _range.forEach((i) => {
      // left cell
      const l = this.state[i - 1 >= 0 ? i - 1 : _spaceSize - 1];
      // center cell
      const c = this.state[i];
      // right cell
      const r = this.state[(i + 1) % _spaceSize];

      // neighbor_cell_codeは現在の状態のバイナリコーディング
      // ex) 現在が[1 1 0]の場合
      //     neighbor_cell_codeは 1*2^2 + 1*2^1 + 0*2^0 = 6となるので、
      //     RULEの６番目のビットが１ならば、次の状態は１となるので、
      //     RULEをneighbor_cell_code分だけビットシフトして１と論理積をとる。
      const neighborCellCode = 2 ** 2 * l + 2 ** 1 * c + 2 ** 0 * r;
      _nextState[i] = (_rule >> neighborCellCode) & 1 ? 1 : 0;
    });

    // 最後に入れ替え
    [this.state, _nextState] = [_nextState, this.state];

    // ステップ数を加算する
    this.step++;
  }
}
