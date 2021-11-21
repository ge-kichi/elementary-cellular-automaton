<template>
  <div class="Settings">
    <i
      class="Settings-button nes-icon size-2x"
      :class="isActive ? 'is-active caret-down' : 'caret-up'"
      @click="toggle"
      :disabled="hasRuleError"
    >
    </i>
    <nav class="Settings-menu" :class="isPanelActive ? 'is-panelActive' : ''">
      <div
        class="Settings-menu-list nes-container is-rounded with-title is-dark"
      >
        <span class="title">ELEMENTARY CELLULAR AUTOMATON</span>
        <ul class="Settings-menu-ul">
          <li class="Settings-menu-li">
            <RadioGroup
              fieldLabel="RULE"
              attention="from 0 to 255"
              name="rule-select"
              :items="ruleItems"
            />
          </li>
          <li class="Settings-menu-li">
            <RadioGroup
              fieldLabel="INITIAL STATE"
              name="initialState-select"
              :items="initialStateItems"
            />
          </li>
          <li class="Settings-menu-li">
            <RadioGroup
              fieldLabel="PATTERN"
              name="pattern-select"
              :items="patternItems"
            />
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script lang="ts">
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { key, GetterTypes, MutationTypes } from "@/store";
import RadioGroup from "@/components/parts/RadioGroup.vue";
export default {
  name: "Settings",
  components: {
    RadioGroup,
  },
  setup() {
    const store = useStore(key);
    const isActive = ref(false);
    const isPanelActive = ref(false);
    const rule = computed(() => store.getters[GetterTypes.RuleNumber]);
    const hasRuleError = ref(false);
    const ruleItems = ref([
      {
        value: "RANDOM",
        checked: true,
        onclick: () => store.commit(MutationTypes.UpdateRuleType, "random"),
      },
      {
        value: "INPUT",
        checked: false,
        onclick: () => store.commit(MutationTypes.UpdateRuleType, "input"),
        writeInOther: {
          hasError: hasRuleError,
          value: rule,
          input: (e: any) => {
            hasRuleError.value = !e.target.checkValidity();
            store.commit(MutationTypes.InputRuleNumber, e.target.value);
          },
        },
      },
    ]);
    const initialStateItems = ref([
      {
        value: "SINGLE",
        checked: true,
        onclick: () => store.commit(MutationTypes.UpdateInitialState, "single"),
      },
      {
        value: "RANDOM",
        checked: false,
        onclick: () => store.commit(MutationTypes.UpdateInitialState, "random"),
      },
    ]);
    const patternItems = ref([
      {
        value: "PERIODIC",
        checked: true,
        onclick: () => store.commit(MutationTypes.UpdatePattern, "periodic"),
      },
      {
        value: "REFLECTIVE",
        checked: false,
        onclick: () => store.commit(MutationTypes.UpdatePattern, "reflective"),
      },
    ]);
    const toggle = () => {
      if (hasRuleError.value) return;
      isActive.value = !isActive.value;
      isPanelActive.value = !isPanelActive.value;
    };
    return {
      toggle,
      isActive,
      isPanelActive,
      rule,
      hasRuleError,
      ruleItems,
      initialStateItems,
      patternItems,
    };
  },
};
</script>
<style scoped>
.Settings {
  display: flex;
  justify-content: center;
  align-items: center;
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
  height: 100vh;
  background-color: var(--background-color);
  transition: all 0.6s steps(24);
}
.Settings-menu.is-panelActive {
  bottom: 0;
}
.Settings-menu-list {
  width: 100%;
  height: 100vh;
}
.Settings-menu-ul {
  position: absolute;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0;
}
.Settings-menu-li {
  margin: 7rem 0;
}
.nes-container.with-title > .title {
  font-size: 2rem;
}
.nes-icon.caret-up::before,
.nes-icon.caret-down::before {
  color: #fff;
}
</style>