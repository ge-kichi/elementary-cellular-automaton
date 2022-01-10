<template>
  <div class="overlay" @click.self="onclick">
    <div
      class="dialog el-box el-box--padding:0 el-imposter"
      @click.self="onclick"
    >
      <i class="nes-icon close is-small" @click="onclick"></i>
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { useStore } from "vuex";
import { key, MutationTypes } from "@/store";
export default {
  name: "Dialog",
  // eslint-disable-next-line
  setup() {
    const store = useStore(key);
    const onclick = () => store.commit(MutationTypes.OpenDialog, "none");
    return {
      onclick,
    };
  },
};
</script>
<style scoped>
.dialog {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: var(--color-transparent);
}
.dialog > * {
  background-color: var(--color-dark);
}
.close {
  display: inline-block;
  cursor: pointer;
}
.close::before {
  color: white;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-dark-opacity);
  z-index: var(--zIndex-overlay);
}
</style>
