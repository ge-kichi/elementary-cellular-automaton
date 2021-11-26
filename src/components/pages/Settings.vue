<template>
  <div class="Settings nes-container is-rounded with-title is-dark">
    <span class="Settings-title title">ELEMENTARY CELLULAR AUTOMATON</span>
    <ul class="Settings-menulist">
      <li class="Settings-menulist-item">
        <RadioGroup v-bind="ruleGroup" />
      </li>
      <li class="Settings-menulist-item">
        <RadioGroup v-bind="initialStateGroup" />
      </li>
      <li class="Settings-menulist-item">
        <RadioGroup v-bind="patternGroup" />
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { computed, ref, reactive } from "vue";
import { useStore } from "vuex";
import { key, GetterTypes, MutationTypes } from "@/store";
import RadioGroup from "@/components/fragments/RadioGroup.vue";
export default {
  name: "Settings",
  components: {
    RadioGroup,
  },
  setup() {
    const store = useStore(key);
    const isActive = ref(false);
    const isPanelActive = ref(false);
    const ruleTmp = ref("");
    const hasRuleError = ref(false);
    const isRandom = computed(
      () => store.getters[GetterTypes.RuleType] === "random"
    );
    const ruleGroup = reactive({
      fieldLabel: "RULE",
      attention: "from 0 to 255",
      name: "rule-select",
      items: [
        { value: "RANDOM", checked: true },
        {
          value: "INPUT",
          checked: false,
          writeIn: {
            attrs: {
              type: "text",
              inputmode: "tel",
              minlength: "0",
              maxlength: "3",
              pattern: "[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]",
              required: true,
              disabled: isRandom,
              value: ruleTmp,
            },
            hasError: hasRuleError,
            input: (e: any) => {
              hasRuleError.value = !e.target.checkValidity();
              ruleTmp.value = e.target.value;
            },
          },
        },
      ],
      onchange: (e: any) => {
        const value: string = e.target.value;
        store.commit(MutationTypes.UpdateRuleType, value.toLowerCase());
      },
    });
    const initialStateGroup = reactive({
      fieldLabel: "INITIAL STATE",
      name: "initialState-select",
      items: [
        { value: "SINGLE", checked: true },
        { value: "RANDOM", checked: false },
      ],
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
      onchange: (e: any) => {
        const value: string = e.target.value;
        store.commit(MutationTypes.UpdatePattern, value.toLowerCase());
      },
    });
    const toggle = () => {
      if (isRandom.value) {
        // RANDOM選択時
        isActive.value = !isActive.value;
        isPanelActive.value = !isPanelActive.value;
      } else {
        // INPUT選択時かつエラーなし
        if (!hasRuleError.value) {
          isActive.value = !isActive.value;
          isPanelActive.value = !isPanelActive.value;
          store.commit(MutationTypes.InputRuleNumber, ruleTmp.value);
        }
      }
    };
    return {
      toggle,
      isActive,
      isPanelActive,
      ruleGroup,
      initialStateGroup,
      patternGroup,
    };
  },
};
</script>
<style scoped>
.Settings {
  width: 600px;
  height: 100%;
  margin: 0 auto;
}
.Settings-menulist {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: 100%;
}
.Settings-menulist-item {
  width: 20vw;
  margin: 0 8rem 5rem;
}
.Settings-title {
  font-size: 2rem;
}
.nes-icon.caret-up::before,
.nes-icon.caret-down::before {
  color: #fff;
}
@media screen and (max-width: 599px) and (orientation: portrait) {
  .Settings-menulist {
    height: auto;
  }
  .Settings-menulist-item {
    width: 50vw;
    margin: 0 8rem 4rem;
  }
  .Settings-title {
    font-size: 1.5rem;
  }
}
</style>