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
        @click="item.onclick"
      />
      <span>{{ item.value }}</span>
      <div v-if="item.writeInOther" class="RadioGroup-writeInOther">
        <input
          type="text"
          class="nes-input"
          :class="item.writeInOther.hasError ? 'is-error' : 'is-dark'"
          inputmode="tel"
          minlength="0"
          maxlength="3"
          pattern="[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]"
          required="true"
          :value="item.writeInOther.value"
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
  props: {
    fieldLabel: String,
    attention: String,
    name: String,
    items: Array as PropType<
      Array<{
        value: String;
        checked: Boolean;
        onclick: any;
        writeInOther?: {
          hasError: Boolean;
          value: String;
          input: Function;
        };
      }>
    >,
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
  margin: 1rem 0;
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
</style>