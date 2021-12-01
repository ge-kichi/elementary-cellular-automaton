<template>
  <div class="Main">
    <header class="Main-header">
      <Status v-bind="gen" />
      <Status v-bind="rule" />
      <GitHubLink
        url="https://github.com/l1ck0h/elementary-cellular-automaton"
      />
    </header>
    <section class="Main-section">
      <main class="Main-sketch Sketch" ref="sketch"></main>
    </section>
    <section class="Main-section">
      <div class="Main-settings nes-container is-rounded with-title is-dark">
        <span class="Main-settings-title title"
          >ELEMENTARY CELLULAR AUTOMATON</span
        >
        <ul class="Main-settings-menulist">
          <li class="Main-settings-menulist-item">
            <RadioGroup v-bind="ruleGroup">
              <template #writeIn>
                <InputRange v-bind="writeIn" />
              </template>
            </RadioGroup>
          </li>
          <li class="Main-settings-menulist-item">
            <RadioGroup v-bind="initialStateGroup" />
          </li>
          <li class="Main-settings-menulist-item">
            <RadioGroup v-bind="patternGroup" />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { ref, reactive, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { key, ActionTypes, GetterTypes, MutationTypes } from "@/store";
import Status from "@/components/fragments/Status.vue";
import GitHubLink from "@/components/fragments/GitHubLink.vue";
import RadioGroup from "@/components/fragments/RadioGroup.vue";
import InputRange from "@/components/fragments/InputRange.vue";
export default {
  name: "Main",
  components: {
    Status,
    GitHubLink,
    RadioGroup,
    InputRange,
  },
  // eslint-disable-next-line
  setup() {
    const store = useStore(key);

    const gen = reactive({
      title: "GEN",
      content: computed(() => store.getters[GetterTypes.Gen]),
    });

    const rule = reactive({
      title: "RULE",
      content: computed(() => store.getters[GetterTypes.RuleNumber]),
    });

    const sketch = ref(null);
    onMounted(() => store.dispatch(ActionTypes.Sketch, sketch.value));

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
      gen,
      rule,
      sketch,
      initialStateGroup,
      patternGroup,
      ruleGroup,
      writeIn,
    };
  },
};
</script>
<style scoped>
.Main {
  height: 100%;
  width: 100%;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
  --space-top: 40px;
  scroll-padding: var(--space-top);
}
.Main-header {
  position: sticky;
  display: flex;
  top: 0;
  height: var(--space-top);
  justify-content: space-around;
  align-items: flex-end;
}
.Main > * {
  width: 600px;
  margin: 0 auto;
}
.Main-section {
  height: calc(100% - var(--space-top));
  scroll-snap-align: start;
}
.Main-section:not(:first-of-type) {
  margin-top: var(--space-top);
}
.Main-sketch {
  height: 100%;
}
.Main-settings {
  height: 100%;
  margin: 0 auto;
}
.Main-settings-title {
  font-size: 1.5rem !important;
}
.Main-settings-menulist {
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.Main-settings-menulist-item {
  width: 200px;
}
@media screen and (max-width: 599px) and (orientation: portrait) {
  .Main > * {
    width: 320px;
  }
  .Main-settings-menulist {
    height: 90%;
  }
}
</style>
