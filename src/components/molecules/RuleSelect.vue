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
import { reactive } from "vue";
import { useStore } from "vuex";
import Container from "@/components/atoms/Container.vue";
import Radio from "@/components/atoms/Radio.vue";
export default {
  name: "RuleSelect",
  components: {
    Container,
    Radio,
  },
  setup() {
    const store = useStore();
    const setRuleMode = (mode) => store.dispatch("setRuleMode", mode);
    const { items } = reactive({
      items: [
        {
          value: "RANDOM",
          checked: true,
          event: () => setRuleMode("random"),
        },
        {
          value: "INPUT",
          checked: false,
          event: () => store.dispatch("showModal"),
        },
      ],
    });
    setRuleMode(items.find((item) => item.checked).value);
    return {
      items,
    };
  },
};
</script>
<style scoped>
.RuleSelect-wrapper {
  display: flex;
  flex-direction: column;
}
@media screen and (max-width: 599px) {
  .RuleSelect-wrapper {
    flex-direction: row;
    gap: 9.5px;
  }
}
</style>