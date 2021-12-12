<template>
  <template v-if="isMatch">
    <slot name="match"></slot>
  </template>
  <template v-else>
    <slot></slot>
  </template>
</template>
<script lang="ts">
import { onMounted, ref } from "vue";
export default {
  name: "MediaQuery",
  props: {
    conditions: {
      type: String,
      require: true,
    },
  },
  // eslint-disable-next-line
  setup(props: any) {
    const isMatch = ref(false);
    const mediaQuery = window.matchMedia(props.conditions);
    const handleMediaQuery = (mq: MediaQueryList | MediaQueryListEvent) =>
      (isMatch.value = mq.matches);
    onMounted(() => {
      handleMediaQuery(mediaQuery);
      mediaQuery.addEventListener("change", handleMediaQuery);
    });
    return {
      isMatch,
    };
  },
};
</script>
