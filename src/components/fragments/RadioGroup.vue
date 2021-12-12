<template>
  <div class="RadioGroup">
    <label class="RadioGroup-label">{{ fieldLabel }}</label>
    <p v-if="attention" class="RadioGroup-attention">{{ attention }}</p>
    <label v-for="(item, i) in items" :key="i" class="RadioGroup-radio">
      <input
        type="radio"
        class="nes-radio is-dark"
        :name="name"
        :value="item.value"
        :checked="item.checked"
        @change="onchange"
      />
      <span>{{ item.value }}</span>
      <template v-if="item.writeIn">
        <slot name="writeIn"></slot>
      </template>
    </label>
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
.RadioGroup {
  color: #fff;
}
.RadioGroup-label {
  margin: 0 0 0.5rem 0;
}
.RadioGroup-attention {
  color: #adafbc;
  font-size: 10px;
  margin: 0 0 0.5rem 0;
}
.RadioGroup-radio {
  display: block;
  margin: 0 0 0.5rem 0;
}
.RadioGroup-radio > * {
  cursor: pointer;
}
</style>
