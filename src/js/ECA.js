export default class ECA {
  // CAのバイナリコーディングされたルール (Wolfram code)
  #rule;
  // 横幅のピクセル数
  #spaceSize;
  // 現世代の状態
  #state;
  // 次世代の状態
  #nextState;
  // 世代
  #gen;

  static SINGLE_STATE = "SINGLE";
  static RANDOM_STATE = "RANDOM";

  constructor(rule, spaceSize, initialState) {
    this.#rule = rule;
    this.#spaceSize = spaceSize;
    // 最初の状態を初期化
    this.#state = new Int8Array(spaceSize);
    if (initialState === ECA.RANDOM_STATE) {
      // ランダムver.
      this.#state = new Int8Array(
        this.#state.map(() => Math.floor(Math.random() * 2))
      );
    } else {
      // 中央の１ピクセルのみ１、後は０
      this.#state[~~(this.#spaceSize / 2)] = 1;
    }
    this.#nextState = new Int8Array(spaceSize);
    this.#gen = 1;
  }

  generate() {
    // stateから計算した次の結果をnext_stateに保存
    for (let i = this.#spaceSize; i--; ) {
      // left cell
      const l = this.#state[i - 1 >= 0 ? i - 1 : this.#spaceSize - 1];
      // center cell
      const c = this.#state[i];
      // right cell
      const r = this.#state[(i + 1) % this.#spaceSize];

      // neighbor_cell_codeは現在の状態のバイナリコーディング
      // ex) 現在が[1 1 0]の場合
      //     neighbor_cell_codeは 1*2^2 + 1*2^1 + 0*2^0 = 6となるので、
      //     RULEの６番目のビットが１ならば、次の状態は１となるので、
      //     RULEをneighbor_cell_code分だけビットシフトして１と論理積をとる。
      const neighborCellCode = 2 ** 2 * l + 2 ** 1 * c + 2 ** 0 * r;
      this.#nextState[i] = (this.#rule >> neighborCellCode) & 1 ? 1 : 0;
    }

    // 最後に入れ替え
    [this.#state, this.#nextState] = [this.#nextState, this.#state];

    // 世代を更新する
    this.#gen++;
  }

  get state() {
    return this.#state;
  }

  get gen() {
    return this.#gen;
  }
}
