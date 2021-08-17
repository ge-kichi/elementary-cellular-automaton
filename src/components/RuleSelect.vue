<template>
  <div id="rule-select" class="nes-container is-rounded is-dark with-title">
    <span class="title">RULE SELECT</span>
    <div>
      <label>
        <input
          type="radio"
          class="nes-radio is-dark rule-select"
          name="rule-select"
          @click="updateRandomRule"
          checked
        />
        <span>RANDOM</span>
      </label>
    </div>
    <div>
      <label>
        <input
          type="radio"
          class="nes-radio is-dark rule-select"
          name="rule-select"
          @click="showModal"
        />
        <span>INPUT</span>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: "RuleSelect",
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
#rule {
  text-align: center;
}
</style>