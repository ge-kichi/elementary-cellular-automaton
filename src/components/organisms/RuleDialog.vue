<template>
  <dialog class="RuleDialog nes-dialog is-rounded is-dark" ref="ruleDialog">
    <div class="nes-field">
      <div class="RuleDialog-header">
        <span class="RuleDialog-header-main">RULE:</span>
        <p class="RuleDialog-header-attention">from 0 to 255</p>
      </div>
      <input
        type="text"
        inputmode="tel"
        ref="inputRule"
        class="RuleDialog-input nes-input"
        :class="hasError ? 'is-error' : 'is-dark'"
        minlength="0"
        maxlength="3"
        pattern="[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]"
        required
        @invalid="handleError"
      />
    </div>
    <div class="RuleDialog-btn-wrapper">
      <button
        type="button"
        class="RuleDialog-btn nes-btn"
        @click="closeModalWithValidator"
      >
        OK
      </button>
      <button type="button" class="RuleDialog-btn nes-btn" @click="closeModal">
        CANCEL
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
    const handleError = (e) => {
      e.target.focus();
      hasError.value = true;
    };
    const reset = (inputRuleElem) => {
      inputRuleElem.value = "";
      hasError.value = false;
    };
    const closeModal = () => {
      store.dispatch(CloseModal);
      reset(inputRule.value);
    };
    const closeModalWithValidator = () => {
      const input_ = inputRule.value;
      if (!input_.checkValidity()) return;
      store.dispatch(CloseModal, input_.value);
      reset(input_);
    };
    onMounted(async () => {
      await store.dispatch(RegisterDialog, {
        dialogElem: ruleDialog.value,
        cancelHandler: closeModal,
      });
    });
    return {
      hasError,
      inputRule,
      ruleDialog,
      closeModal,
      closeModalWithValidator,
      handleError,
    };
  },
};
</script>
<style scoped>
.RuleDialog-header-attention {
  color: #adafbc;
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
  display: flex;
  justify-content: space-between;
}
.RuleDialog-btn {
  cursor: pointer;
  width: 45%;
}
</style>