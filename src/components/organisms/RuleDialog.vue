<template>
  <dialog class="nes-dialog is-rounded is-dark">
    <form method="dialog">
      <div class="nes-field">
        <label for="input-rule">RULE</label>
        <input
          type="text"
          id="input-rule"
          class="nes-input"
          :class="{ 'is-dark': hasSuccess, 'is-error': hasError }"
          placeholder="RULE"
          minlength="0"
          maxlength="3"
          pattern="[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]"
          ref="inputRule"
          @invalid="errorHandler"
        />
      </div>
      <div
        v-show="hasError"
        id="dialog-error-message"
        class="nes-text is-error"
      >
        from 0 to 255
      </div>
      <div id="button-wrapper">
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
  },
  methods: {
    closeModal() {
      const inputRule = this.$refs.inputRule;
      if (!inputRule.checkValidity()) return;
      this.hasSuccess = true;
      this.hasError = false;
      this.$store.dispatch("updateRule", inputRule.value);
      this.$store.dispatch("setRuleMode", "input");
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
form[method="dialog"] {
  display: flex;
  flex-direction: column;
}
.nes-input {
  margin-top: 15px;
  margin-bottom: 15px;
}
#dialog-error-message {
  margin-bottom: 5px;
}
#button-wrapper {
  text-align: center;
}
.nes-btn {
  cursor: pointer;
  width: 95%;
}
@media screen and (max-width: 599px) {
  dialog {
    transform: translateY(-10%);
  }
}
</style>