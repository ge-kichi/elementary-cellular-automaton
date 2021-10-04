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
        {
          value: "RANDOM",
          checked: true,
          event: () => this.setRuleMode("random"),
        },
        { value: "INPUT", checked: false, event: this.showModal },
      ],
    };
  },
  created() {
    this.setRuleMode(this.items.find((item) => item.checked).value);
  },
  methods: {
    setRuleMode(mode) {
      this.$store.dispatch("setRuleMode", mode);
    },
    showModal() {
      this.$store.dispatch("showModal");
    },
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