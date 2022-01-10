<template>
  <Dialog><Setting v-bind="stateGroup" /></Dialog>
</template>
<script lang="ts">
import { reactive } from "vue";
import { useStore } from "vuex";
import { key, MutationTypes } from "@/store";
import Dialog from "@/components/fragments/Dialog.vue";
import Setting from "@/components/fragments/Setting.vue";
export default {
  name: "CogState",
  components: { Dialog, Setting },
  // eslint-disable-next-line
  setup() {
    const store = useStore(key);
    const stateGroup = reactive({
      title: "STATE",
      name: "state-select",
      items: [
        { value: "SINGLE", checked: true },
        { value: "RANDOM", checked: false, writeIn: true },
      ],
      // eslint-disable-next-line
      onchange: (e: any) => {
        const value: string = e.target.value;
        store.commit(MutationTypes.UpdateInitialState, value.toLowerCase());
      },
    });
    return { stateGroup };
  },
};
</script>
