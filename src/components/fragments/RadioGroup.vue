<template>
  <div id="radio-group" class="el-box">
    <div id="radio-group-wrapper" class="el-stack">
      <label>{{ fieldLabel }}</label>
      <p v-if="attention" class="el-stack-exception --small">
        {{ attention }}
      </p>
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
          <slot name="writeIn"></slot>
        </template>
      </label>
    </div>
  </div>
</template>
<script lang="ts">
import { PropType } from "vue";
export default {
  name: "RadioGroup",
  emits: ["onchange"],
  props: {
    fieldLabel: {
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
#radio-group-wrapper > p {
  color: var(--color-help);
  font-size: 1.275vh;
}
</style>
