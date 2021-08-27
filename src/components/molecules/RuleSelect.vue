<template>
  <Container :title="title">
    <div v-for="item in items" :key="item.value">
      <Radio
        :name="name"
        :label="item.value"
        :value="item.value"
        checked
        @click_custom="item.event"
      />
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
        { value: "RANDOM", event: this.updateRandomRule },
        { value: "INPUT", event: this.showModal },
      ],
    };
  },
  mounted() {
    this.$store.dispatch("updateRule", this.createRandomRule());
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
</style>