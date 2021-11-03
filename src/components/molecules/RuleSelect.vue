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
import { ShowModal, RandomMode } from "@/store/actionTypes";
import { IsRuleRandom, IsRuleInput } from "@/store/getterTypes";
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
        value: "RANDOM",
        checked: computed(() => store.getters[IsRuleRandom]),
        event: () => store.dispatch(RandomMode),
      },
      {
        value: "INPUT",
        checked: computed(() => store.getters[IsRuleInput]),
        event: () => store.dispatch(ShowModal),
      },
    ]);
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