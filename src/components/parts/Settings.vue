<template>
  <div class="Settings nes-container is-rounded with-title is-dark">
    <span class="title">ELEMENTARY CELLULAR AUTOMATON</span>
    <nav class="el-center">
      <ul class="el-stack">
        <li>
          <RadioGroup v-bind="ruleGroup">
            <template #writeIn>
              <InputRange v-bind="writeIn" />
            </template>
          </RadioGroup>
        </li>
        <li>
          <RadioGroup v-bind="initialStateGroup" />
        </li>
        <li>
          <RadioGroup v-bind="patternGroup" />
        </li>
      </ul>
    </nav>
  </div>
</template>
<script lang="ts">
import { reactive, computed } from "vue";
import { useStore } from "vuex";
import { key, GetterTypes, MutationTypes } from "@/store";
import RadioGroup from "@/components/fragments/RadioGroup.vue";
import InputRange from "@/components/fragments/InputRange.vue";
export default {
  name: "Settings",
  components: {
    RadioGroup,
    InputRange,
  },
  // eslint-disable-next-line
  setup() {
    const store = useStore(key);
    const initialStateGroup = reactive({
      fieldLabel: "INITIAL STATE",
      name: "initialState-select",
      items: [
        { value: "SINGLE", checked: true },
        { value: "RANDOM", checked: false },
      ],
      // eslint-disable-next-line
      onchange: (e: any) => {
        const value: string = e.target.value;
        store.commit(MutationTypes.UpdateInitialState, value.toLowerCase());
      },
    });
    const patternGroup = reactive({
      fieldLabel: "PATTERN",
      name: "pattern-select",
      items: [
        { value: "PERIODIC", checked: true },
        { value: "REFLECTIVE", checked: false },
      ],
      // eslint-disable-next-line
      onchange: (e: any) => {
        const value: string = e.target.value;
        store.commit(MutationTypes.UpdatePattern, value.toLowerCase());
      },
    });
    const ruleGroup = reactive({
      fieldLabel: "RULE",
      attention: "from 0 to 255",
      name: "rule-select",
      items: [
        { value: "RANDOM", checked: true },
        { value: "INPUT", checked: false, writeIn: true },
      ],
      // eslint-disable-next-line
      onchange: (e: any) => {
        const value: string = e.target.value;
        store.commit(MutationTypes.UpdateRuleType, value.toLowerCase());
      },
    });
    const isRandom = computed(
      () => store.getters[GetterTypes.RuleType] === "random"
    );
    const ruleNumber = computed(() => store.getters[GetterTypes.RuleNumber]);
    const writeIn = reactive({
      attrs: {
        min: "0",
        max: "255",
        disabled: isRandom,
        value: ruleNumber,
      },
      // eslint-disable-next-line
      oninput: (e: any) =>
        store.commit(MutationTypes.InputRuleNumber, e.target.value),
    });
    return {
      initialStateGroup,
      patternGroup,
      ruleGroup,
      writeIn,
    };
  },
};
</script>
<style scoped>
.Settings {
  height: 100%;
}
</style>
