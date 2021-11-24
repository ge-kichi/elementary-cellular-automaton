<template>
  <div class="Settings">
    <i
      class="Settings-button nes-icon size-2x"
      :class="isActive ? 'is-active caret-down' : 'caret-up'"
      @click="toggle"
    >
    </i>
    <nav class="Settings-menu" :class="{ 'is-panelActive': isPanelActive }">
      <div
        class="Settings-menu-list nes-container is-rounded with-title is-dark"
      >
        <span class="title">ELEMENTARY CELLULAR AUTOMATON</span>
        <ul class="Settings-menu-ul">
          <li class="Settings-menu-li">
            <RadioGroup v-bind="ruleGroup" />
          </li>
          <li class="Settings-menu-li">
            <RadioGroup v-bind="initialStateGroup" />
          </li>
          <li class="Settings-menu-li">
            <RadioGroup v-bind="patternGroup" />
          </li>
        </ul>
      </div>
    </nav>
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
          writeInOther: {
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
  display: flex;
  justify-content: center;
}
.Settings-button {
  z-index: 9999;
  cursor: pointer;
}
.Settings-menu {
  position: fixed;
  z-index: 999;
  bottom: -120%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
  transition: all 0.6s steps(24);
}
.Settings-menu.is-panelActive {
  bottom: 0;
}
.Settings-menu-list {
  width: 100%;
  height: 100%;
}
.Settings-menu-ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
}
.Settings-menu-li {
  margin: 0 8rem 5rem;
}
.nes-container.with-title > .title {
  font-size: 2rem;
}
.nes-icon.caret-up::before,
.nes-icon.caret-down::before {
  color: #fff;
}
@media screen and (max-width: 599px) and (orientation: portrait) {
  .nes-container.with-title > .title {
    font-size: 1.5rem;
  }
}
</style>