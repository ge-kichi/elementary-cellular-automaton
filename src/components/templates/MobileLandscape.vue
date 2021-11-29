<template>
  <template v-if="!isMobileLandscape">
    <slot></slot>
  </template>
  <template v-else>
    <slot name="mobileLandscape"></slot>
  </template>
</template>
<script lang="ts">
import { onMounted, ref } from "vue";
export default {
  name: "MobileLandscape",
  props: {
    maxHeight: {
      type: String,
      require: true,
    },
  },
  setup(props: any) {
    const isMobileLandscape = ref(false);
    const mediaQuery = window.matchMedia(
      `(max-height: ${props.maxHeight}) and (orientation:landscape)`
    );
    const handleMediaQuery = (mq: MediaQueryList | MediaQueryListEvent) =>
      (isMobileLandscape.value = mq.matches);
    onMounted(() => {
      handleMediaQuery(mediaQuery);
      mediaQuery.addEventListener("change", handleMediaQuery);
    });
    return {
      isMobileLandscape,
    };
  },
};
</script>
