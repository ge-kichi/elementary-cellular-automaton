<template>
  <dialog class="nes-dialog is-dark is-rounded" id="rule-dialog">
    <form method="dialog">
      <div class="nes-field">
        <label for="input-rule">0 ~ 255</label>
        <input
          type="text"
          class="nes-input"
          placeholder="90"
          minlength="0"
          maxlength="3"
          pattern="[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]"
          id="input-rule"
          ref="inputRule"
          :class="{ 'is-dark': hasSuccess, 'is-error': hasError }"
        />
      </div>
      <div id="close-button-wrapper">
        <button type="button" class="nes-btn" @click="closeModal">OK</button>
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
      hasError: false,
    };
  },
  mounted() {
    this.$store.dispatch("registerDialog", this.$el);
    this.$refs.inputRule.addEventListener("invalid", this.errorHandler, false);
  },
  methods: {
    closeModal() {
      const inputRule = this.$refs.inputRule;
      if (!inputRule.checkValidity()) return;
      this.hasSuccess = true;
      this.hasError = false;
      this.$store.dispatch("updateRule", inputRule.value);
      this.$store.dispatch("closeModal");
    },
    errorHandler() {
      this.hasSuccess = false;
      this.hasError = true;
    },
  },
};
</script>
<style scoped>
dialog {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
dialog::backdrop,
dialog + .backdrop {
  position: absolute;
  width: var(--width);
  height: var(--height);
}
.nes-btn {
  cursor: pointer;
}
#close-button-wrapper {
  text-align: right;
}
</style>