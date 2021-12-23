// 型定義
export type InitialState = "single" | "random";
export type Pattern = "periodic" | "reflective";
export type { ECA };

class ECA {
  // ECAのバイナリコーディングされたルール (Wolfram code)
  private _rule: number;
  // 境界条件
  private _pattern: Pattern;
  // 状態
  private _state: Int8Array;
  // ピクセル数
  private _spaceSize: number;
  // 世代
  private _gen: number;

  constructor(rule: number, pattern: Pattern, state: Int8Array, gen: number) {
    this._rule = rule;
    this._pattern = pattern;
    this._state = state;
    this._spaceSize = state.length;
    this._gen = gen;
  }

  generate(): ECA {
    // _stateから計算した次の結果をnextStateに保存
    const nextState = this._state.map((cell, i) => {
      let l_Ep, r_Ep;
      switch (this._pattern) {
        // 周期ver.
        case "periodic": {
          l_Ep = (i: number) => (i > 0 ? i - 1 : this._spaceSize - 1);
          r_Ep = (i: number) => (i + 1) % this._spaceSize;
          break;
        }
        // 反射ver.
        case "reflective": {
          l_Ep = (i: number) => (i > 0 ? i - 1 : i);
          r_Ep = (i: number) =>
            i + 1 !== this._spaceSize ? (i + 1) % this._spaceSize : i;
          break;
        }
      }
      // left cell
      const l = this._state[l_Ep(i)];
      // center cell
      const c = cell;
      // right cell
      const r = this._state[r_Ep(i)];

      // neighborCellCodeは現在の状態のバイナリコーディング
      // ex) 現在が[1 1 0]の場合
      //     neighborCellCodeは 1*2^2 + 1*2^1 + 0*2^0 = 6となるので、
      //     _ruleの６番目のビットが１ならば、次の状態は１となるので、
      //     _ruleをneighborCellCode分だけビットシフトして１と論理積をとる。
      const neighborCellCode = 2 ** 2 * l + 2 ** 1 * c + 2 ** 0 * r;
      return (this._rule >> neighborCellCode) & 1 ? 1 : 0;
    });

    // 最後に入れ替え
    this._state = nextState;

    // 世代を更新
    this._gen++;

    return new ECA(this._rule, this._pattern, this._state, this._gen);
  }

  get state(): Int8Array {
    return this._state;
  }

  get gen(): number {
    return this._gen;
  }
}

export const create = (
  rule: number,
  pattern: Pattern,
  spaceSize: number,
  initialState: InitialState
): ECA => {
  // 最初の状態を初期化
  let state: Int8Array = new Int8Array(spaceSize);
  switch (initialState) {
    // 中央の１ピクセルのみ１、後は０
    case "single": {
      state[~~(spaceSize / 2)] = 1;
      break;
    }
    // ランダムver.
    case "random": {
      state = state.map(() => Math.floor(Math.random() * 2));
      break;
    }
  }
  return new ECA(rule, pattern, state, 1);
};
