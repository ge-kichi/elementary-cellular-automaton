<template>
  <Container id="rule-select" :title="title">
    <div>
      <Radio
        :name="name"
        label="RANDOM"
        value="RANDOM"
        checked
        @click="updateRandomRule"
      />
    </div>
    <div>
      <Radio :name="name" label="INPUT" value="INPUT" @click="showModal" />
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
    };
  },
  mounted() {
    this.$store.dispatch("updateRule", this.createRandomRule());
  },
  methods: {
    createRandomRule() {
      return Math.floor(Math.random() * 255);
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