<template>
  <Text title="GEN" :content="gen" />
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Text from "@/components/atoms/Text.vue";
import { Gen } from "@/store/getterTypes";
export default {
  name: "Gen",
  components: {
    Text,
  },
  setup() {
    const store = useStore();
    const gen = computed(() => store.getters[Gen]);
    return {
      gen,
    };
  },
};
</script>