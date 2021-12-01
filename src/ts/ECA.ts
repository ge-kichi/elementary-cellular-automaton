type PatternEp = (i: number, size: number) => number;
class ECA {
  // ECAのバイナリコーディングされたルール (Wolfram code)
  private _rule: number;
  // 境界条件式 左端
  private _patternEpLeft: PatternEp;
  // 境界条件式 右端
  private _patternEpRight: PatternEp;
  // 状態
  private _state: Int8Array;
  // ピクセル数
  private _spaceSize: number;
  // 世代
  private _gen: number;

  constructor(
    rule: number,
    patternEps: {
      left: PatternEp;
      right: PatternEp;
    },
    state: Int8Array,
    gen: number
  ) {
    this._rule = rule;
    this._patternEpLeft = patternEps.left;
    this._patternEpRight = patternEps.right;
    this._state = state;
    this._spaceSize = state.length;
    this._gen = gen;
  }

  generate() {
    const next_state = this._state.slice();
    // _stateから計算した次の結果をnext_stateに保存
    for (let i = this._spaceSize; i--; ) {
      // left cell
      const l = this._state[this._patternEpLeft(i, this._spaceSize)];
      // center cell
      const c = this._state[i];
      // right cell
      const r = this._state[this._patternEpRight(i, this._spaceSize)];

      // neighborCellCodeは現在の状態のバイナリコーディング
      // ex) 現在が[1 1 0]の場合
      //     neighborCellCodeは 1*2^2 + 1*2^1 + 0*2^0 = 6となるので、
      //     _ruleの６番目のビットが１ならば、次の状態は１となるので、
      //     _ruleをneighborCellCode分だけビットシフトして１と論理積をとる。
      const neighborCellCode = 2 ** 2 * l + 2 ** 1 * c + 2 ** 0 * r;
      next_state[i] = (this._rule >> neighborCellCode) & 1 ? 1 : 0;
    }

    // 最後に入れ替え
    this._state = next_state;

    // 世代を更新
    this._gen++;

    return new ECA(
      this._rule,
      {
        left: this._patternEpLeft,
        right: this._patternEpRight,
      },
      this._state,
      this._gen
    );
  }

  get state(): Int8Array {
    return this._state;
  }

  get gen(): number {
    return this._gen;
  }
}

export type InitialState = "single" | "random";
export type Pattern = "periodic" | "reflective";

export const create = (
  rule: number,
  spaceSize: number,
  {
    initialState = "single",
    pattern = "periodic",
  }: {
    initialState?: InitialState;
    pattern?: Pattern;
  } = {}
): ECA => {
  // 最初の状態を初期化
  let state: Int8Array = new Int8Array(spaceSize);
  switch (initialState) {
    case "single": {
      // 中央の１ピクセルのみ１、後は０
      state[~~(spaceSize / 2)] = 1;
      break;
    }
    case "random": {
      // ランダムver.
      state = state.map(() => Math.floor(Math.random() * 2));
      break;
    }
  }
  // 境界条件
  let patternEps: {
    left: PatternEp;
    right: PatternEp;
  };
  switch (pattern) {
    case "periodic": {
      // 周期ver.
      patternEps = {
        left: (i: number, size: number) => (i - 1 >= 0 ? i - 1 : size - 1),
        right: (i: number, size: number) => (i + 1) % size,
      };
      break;
    }
    case "reflective": {
      // 反射ver.
      patternEps = {
        left: (i: number) => (i - 1 >= 0 ? i - 1 : i),
        right: (i: number, size: number) =>
          i + 1 !== size ? (i + 1) % size : i,
      };
      break;
    }
  }
  return new ECA(rule, patternEps, state, 1);
};
