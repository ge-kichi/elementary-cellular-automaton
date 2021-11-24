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
      <span>{{ item.value }}</span>
      <div v-if="item.writeInOther" class="RadioGroup-writeInOther">
        <input
          class="nes-input"
          v-bind="item.writeInOther.attrs"
          :class="item.writeInOther.hasError ? 'is-error' : 'is-dark'"
          @input="item.writeInOther.input"
        />
      </div>
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
        value: String;
        checked: Boolean;
        writeInOther?: {
          attrs: Object;
          hasError: Boolean;
          input: Function;
        };
      }>
    >,
  },
  setup(_: unknown, { emit }: { emit: any }) {
    const onchange = (e: any) => emit("onchange", e);
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
.RadioGroup-fieldLabel {
  font-size: 1.8rem;
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
.RadioGroup-radio > span {
  font-size: 1.5rem;
}
.RadioGroup-writeInOther {
  margin-left: 20px;
}
@media screen and (max-width: 599px) and (orientation: portrait) {
  .RadioGroup-fieldLabel {
    font-size: 1.5rem;
  }
  .RadioGroup-radio > span {
    font-size: 1.3rem;
  }
}
</style>