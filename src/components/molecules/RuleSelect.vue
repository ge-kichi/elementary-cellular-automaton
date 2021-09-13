<template>
  <Container :title="title">
    <div id="rule-select-wrapper">
      <template v-for="item in items" :key="item.value">
        <Radio
          :name="name"
          :label="item.value"
          :value="item.value"
          :checked="item.checked"
          @click_custom="item.event"
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
      title: "RULE SELECT",
      name: "rule-select",
      items: [
        { value: "RANDOM", checked: true, event: this.updateRandomRule },
        { value: "INPUT", checked: false, event: this.showModal },
      ],
    };
  },
  mounted() {
    this.updateRandomRule();
  },
  methods: {
    createRandomRule() {
      return Math.floor(Math.random() * 256);
    },
    updateRandomRule() {
      this.$store.dispatch("updateRule", this.createRandomRule());
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