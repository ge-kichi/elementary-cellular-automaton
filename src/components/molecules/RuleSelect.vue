<template>
  <Container title="RULE SELECT">
    <div id="rule-select-wrapper">
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
import Container from "@/components/atoms/Container.vue";
import Radio from "@/components/atoms/Radio.vue";
export default {
  name: "RuleSelect",
  components: {
    Container,
    Radio,
  },
  data() {
    return {
      items: [
        { value: "RANDOM", checked: true, event: this.setRandomRuleMode },
        { value: "INPUT", checked: false, event: this.showModal },
      ],
    };
  },
  created() {
    this.$store.dispatch(
      "setRuleMode",
      this.items.find((item) => item.checked).value
    );
  },
  methods: {
    setRandomRuleMode() {
      this.$store.dispatch("setRuleMode", "random");
    },
    showModal() {
      this.$store.dispatch("showModal");
    },
  },
};
</script>
<style scoped>
#rule-select-wrapper {
  display: flex;
  flex-direction: column;
}
@media screen and (max-width: 599px) {
  #rule-select-wrapper {
    flex-direction: row;
    gap: 9.5px;
  }
}
</style>