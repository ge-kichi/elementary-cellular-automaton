<template>
  <div class="the-footer-child el-center">
    <small
      ><BaseLink
        url="https://github.com/l1ck0h/elementary-cellular-automaton"
        label="GitHub"
      />
      version {{ version }}</small
    >
    <small>&copy; 2022 l1ck0h</small>
  </div>
</template>
<script lang="ts">
import { version } from "../../package.json";
import BaseLink from "@/components/BaseLink.vue";
export default {
  name: "TheFooterChild",
  components: { BaseLink },
  // eslint-disable-next-line
  setup() {
    return { version };
  },
};
</script>
<style scoped>
.the-footer-child > small {
  font-size: var(--ms-1);
}
</style>
