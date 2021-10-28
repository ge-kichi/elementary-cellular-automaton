<template>
  <dialog class="RuleDialog nes-dialog is-rounded is-dark" ref="ruleDialog">
    <div class="nes-field">
      <label>RULE</label>
      <input
        type="text"
        ref="inputRule"
        class="RuleDialog-input nes-input"
        :class="hasSuccess ? 'is-dark' : 'is-error'"
        placeholder="RULE"
        minlength="0"
        maxlength="3"
        pattern="[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]"
        @invalid="errorHandler"
      />
    </div>
    <div v-show="!hasSuccess" class="RuleDialog-error nes-text is-error">
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
    const hasSuccess = ref(true);
    const ruleDialog = ref(null);
    const inputRule = ref(null);
    const errorHandler = () => (hasSuccess.value = false);
    const closeModalWithValidator = () => {
      const input_ = inputRule.value;
      if (!input_.checkValidity()) return;
      hasSuccess.value = true;
      store.dispatch(CloseModal, input_.value);
      input_.value = "";
    };
    onMounted(async () => {
      const dialogPolyfill = await (await import("dialog-polyfill")).default;
      dialogPolyfill.registerDialog(ruleDialog.value);
      store.dispatch(RegisterDialog, ruleDialog.value);
    });
    return {
      hasSuccess,
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