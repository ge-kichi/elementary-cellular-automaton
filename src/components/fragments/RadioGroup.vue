<template>
  <div class="RadioGroup">
    <label class="RadioGroup-fieldLabel">{{ fieldLabel }}</label>
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
      <span class="RadioGroup-radioLabel">{{ item.value }}</span>
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
  setup(_: any, { emit }: { emit: any }) {
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
  margin: 0 0 0.75rem 0;
}
.RadioGroup-fieldLabel {
  font-size: 1.4rem;
  margin: 1.3rem 0;
}
.RadioGroup-attention {
  color: #adafbc;
}
.RadioGroup-radio {
  display: block;
  margin: 1.3rem 0;
}
.RadioGroup-radio > * {
  cursor: pointer;
}
.RadioGroup-radioLabel {
  font-size: 1.2rem;
}
</style>
