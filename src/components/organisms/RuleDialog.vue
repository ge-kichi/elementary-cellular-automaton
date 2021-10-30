<template>
  <dialog class="RuleDialog nes-dialog is-rounded is-dark" ref="ruleDialog">
    <div class="nes-field">
      <label>RULE</label>
      <input
        type="text"
        inputmode="tel"
        ref="inputRule"
        class="RuleDialog-input nes-input"
        :class="hasError ? 'is-error' : 'is-dark'"
        placeholder="RULE"
        minlength="0"
        maxlength="3"
        pattern="[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]"
        @invalid="errorHandler"
      />
    </div>
    <div v-show="hasError" class="RuleDialog-error nes-text is-error">
      from 0 to 255
    </div>
    <div class="RuleDialog-btn-wrapper">
      <button
        type="button"
        class="RuleDialog-btn nes-btn"
        @click="closeModalWithValidator"
      >
        OK
      </button>
    </div>
  </dialog>
</template>
<script>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import { RegisterDialog, CloseModal } from "@/store/actionTypes";
export default {
  name: "RuleDialog",
  setup() {
    const store = useStore();
    const hasError = ref(false);
    const ruleDialog = ref(null);
    const inputRule = ref(null);
    const errorHandler = () => (hasError.value = true);
    const reset = (inputRuleElem) => {
      inputRuleElem.value = "";
      hasError.value = false;
    };
    const closeModal = () => {
      store.dispatch(CloseModal, "");
      reset(inputRule.value);
    };
    const closeModalWithValidator = () => {
      const input_ = inputRule.value;
      if (!input_.checkValidity()) return;
      store.dispatch(CloseModal, input_.value);
      reset(input_);
    };
    onMounted(async () => {
      const ruleDialog_ = ruleDialog.value;
      store.dispatch(RegisterDialog, ruleDialog.value);
      ruleDialog_.addEventListener("cancel", (e) => {
        e.preventDefault();
        closeModal();
      });
    });
    return {
      hasError,
      inputRule,
      ruleDialog,
      closeModalWithValidator,
      errorHandler,
    };
  },
};
</script>
<style scoped>
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