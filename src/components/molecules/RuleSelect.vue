<template>
  <Container class="RuleSelect" title="RULE SELECT">
    <div class="RuleSelect-wrapper">
      <template v-for="item in items" :key="item.value">
        <Radio
          name="rule-select"
          :label="item.value"
          :value="item.value"
          :checked="item.checked"
          @click="item.event"
        />
      </template>
    </div>
  </Container>
</template>
<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import Container from "@/components/atoms/Container.vue";
import Radio from "@/components/atoms/Radio.vue";
import { ShowModal, SetMode } from "@/store/actionTypes";
import { Mode } from "@/store/getterTypes";
import { RULE_RANDOM, RULE_INPUT } from "@/store/ruleTypes";
export default {
  name: "RuleSelect",
  components: {
    Container,
    Radio,
  },
  setup() {
    const store = useStore();
    const items = ref([
      {
        value: RULE_RANDOM,
        checked: computed(() => store.getters[Mode] === RULE_RANDOM),
        event: () => store.dispatch(SetMode, RULE_RANDOM),
      },
      {
        value: RULE_INPUT,
        checked: computed(() => store.getters[Mode] === RULE_INPUT),
        event: () => store.dispatch(ShowModal),
      },
    ]);

    store.dispatch(SetMode, items.value.find((item) => item.checked).value);
    return {
      items,
    };
  },
};
</script>
<style scoped>
.RuleSelect-wrapper {
  display: flex;
  flex-direction: row;
  gap: 15px;
}
</style>