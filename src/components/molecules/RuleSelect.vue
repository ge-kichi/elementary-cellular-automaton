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
import { ref } from "vue";
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
    const  items  = ref([
        {
          value: "RANDOM",
          checked: true,
          event: () => store.dispatch("setRuleMode", "random"),
        },
        {
          value: "INPUT",
          checked: false,
          event: () => store.dispatch("showModal"),
        },
      ]);
    store.dispatch("setRuleMode", items.value.find((item) => item.checked).value);
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