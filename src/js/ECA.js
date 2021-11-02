class ECA {
  // CAのバイナリコーディングされたルール (Wolfram code)
  #rule;
  // ピクセル数
  #spaceSize;
  // 状態
  #state;
  // 世代
  #gen;

  constructor(rule, state, gen) {
    this.#rule = rule;
    this.#state = state;
    this.#spaceSize = state.length;
    this.#gen = gen;
  }

  generate() {
    const nextState = this.#state.slice();
    // stateから計算した次の結果をnextStateに保存
    for (let i = this.#spaceSize; i--; ) {
      // left cell
      const l = this.#state[i - 1 >= 0 ? i - 1 : this.#spaceSize - 1];
      // center cell
      const c = this.#state[i];
      // right cell
      const r = this.#state[(i + 1) % this.#spaceSize];

      // neighborCellCodeは現在の状態のバイナリコーディング
      // ex) 現在が[1 1 0]の場合
      //     neighborCellCodeは 1*2^2 + 1*2^1 + 0*2^0 = 6となるので、
      //     RULEの６番目のビットが１ならば、次の状態は１となるので、
      //     RULEをneighborCellCode分だけビットシフトして１と論理積をとる。
      const neighborCellCode = 2 ** 2 * l + 2 ** 1 * c + 2 ** 0 * r;
      nextState[i] = (this.#rule >> neighborCellCode) & 1 ? 1 : 0;
    }

    // 最後に入れ替え
    this.#state = nextState;

    // 世代を更新
    this.#gen++;

    return new ECA(this.#rule, this.#state, this.#gen);
  }

  get state() {
    return this.#state;
  }

  get gen() {
    return this.#gen;
  }
}

export const createECA = (rule, spaceSize, { random = false } = {}) => {
  // 最初の状態を初期化
  let state = new Int8Array(spaceSize);
  if (random) {
    // ランダムver.
    state = new Int8Array(state.map(() => Math.floor(Math.random() * 2)));
  } else {
    // 中央の１ピクセルのみ１、後は０
    state[~~(spaceSize / 2)] = 1;
  }
  return new ECA(rule, state, 1);
};
