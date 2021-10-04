<template>
  <dialog class="RuleDialog nes-dialog is-rounded is-dark">
    <form class="RuleDialog-form" method="dialog">
      <div class="nes-field">
        <label for="input-rule">RULE</label>
        <input
          type="text"
          id="input-rule"
          class="RuleDialog-input nes-input"
          :class="hasSuccess ? 'is-dark' : 'is-error'"
          placeholder="RULE"
          minlength="0"
          maxlength="3"
          pattern="[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]"
          ref="inputRule"
          @invalid="errorHandler"
        />
      </div>
      <div
        v-show="!hasSuccess"
        class="RuleDialog-error nes-text is-error"
      >
        from 0 to 255
      </div>
      <div class="RuleDialog-btn-wrapper">
        <button type="button" class="RuleDialog-btn nes-btn" @click="closeModal">OK</button>
      </div>
    </form>
  </dialog>
</template>
<script>
export default {
  name: "RuleDialog",
  data() {
    return {
      hasSuccess: true,
    };
  },
  mounted() {
    this.$store.dispatch("registerDialog", this.$el);
  },
  methods: {
    closeModal() {
      const inputRule = this.$refs.inputRule;
      if (!inputRule.checkValidity()) return;
      this.hasSuccess = true;
      const rule = inputRule.value;
      this.$store.dispatch("updateRule", rule);
      this.$store.dispatch("setRuleMode", rule ? "input" : "random");
      this.$store.dispatch("closeModal");
    },
    errorHandler() {
      this.hasSuccess = false;
    },
  },
};
</script>
<style scoped>
.RuleDialog-form {
  display: flex;
  flex-direction: column;
}
.RuleDialog-input {
  margin-top: 15px;
  margin-bottom: 15px;
}
.RuleDialog-error {
  margin-bottom: 5px;
}
.RuleDialog-btn-wrapper {
  text-align: center;
}
.RuleDialog-btn {
  cursor: pointer;
  width: 95%;
}
</style>