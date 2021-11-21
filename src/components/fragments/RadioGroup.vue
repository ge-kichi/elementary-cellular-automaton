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
        <InputText
          :hasError="item.writeInOther.hasError"
          :inputmode="item.writeInOther.inputmode"
          :minlength="item.writeInOther.minlength"
          :maxlength="item.writeInOther.maxlength"
          :pattern="item.writeInOther.pattern"
          :required="item.writeInOther.required"
          :disabled="true"
          :value="item.writeInOther.value"
          @input="item.writeInOther.input"
        />
      </div>
    </label>
  </div>
</template>
<script lang="ts">
import { PropType } from "vue";
import InputText from "@/components/fragments/InputText.vue";
export default {
  name: "StateSelect",
  components: {
    InputText,
  },
  emits: ["update:radio"],
  props: {
    fieldLabel: String,
    attention: String,
    name: String,
    radio: String,
    items: Array as PropType<
      Array<{
        value: String;
        checked: Boolean;
        onclick: any;
        writeInOther?: {
          hasError: Boolean;
          inputmode: String;
          minlength: Number;
          maxlength: Number;
          pattern: String;
          required: Boolean;
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