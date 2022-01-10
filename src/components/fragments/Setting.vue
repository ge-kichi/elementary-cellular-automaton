<template>
  <div class="setting nes-container is-rounded with-title is-dark">
    <span class="title">{{ title }}</span>
    <div class="el-center">
      <div class="el-box">
        <div class="el-stack">
          <label v-for="(item, i) in items" :key="i">
            <input
              type="radio"
              class="nes-radio is-dark"
              :name="name"
              :value="item.value"
              :checked="item.checked"
              @change="onchange"
            />
            <span style="cursor: pointer">{{ item.value }}</span>
            <template v-if="item.writeIn">
              <slot></slot>
            </template>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { PropType } from "vue";
export default {
  name: "Setting",
  emits: ["onchange"],
  props: {
    title: {
      type: String,
      required: true,
    },
    attention: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    items: Array as PropType<
      Array<{
        value: string;
        checked: boolean;
        writeIn?: boolean;
      }>
    >,
  },
  // eslint-disable-next-line
  setup(_: unknown, { emit }: { emit: any }) {
    const onchange = (e: Event) => emit("onchange", e);
    return {
      onchange,
    };
  },
};
</script>
<style scoped>
.setting {
  font-size: var(--s-1);
}
</style>
