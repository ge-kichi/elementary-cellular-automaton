<template>
  <Text title="STEP" :content="step" />
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Text from "@/components/atoms/Text.vue";
export default {
  name: "Step",
  components: {
    Text,
  },
  setup(){
    const store = useStore();
    const step = computed(()=>store.getters.getStep);
    return {
      step
    }
  }
};
</script>