<template>
  <div class="footer-children el-center">
    <small><Links :items="linksItems" /> version {{ version }}</small>
    <small>&copy; 2022 l1ck0h</small>
  </div>
</template>
<script lang="ts">
import { version } from "../../../package.json";
import { reactive } from "vue";
import Links from "@/components/fragments/Links.vue";
export default {
  name: "FooterChildren",
  components: { Links },
  // eslint-disable-next-line
  setup() {
    const linksItems = reactive([
      {
        label: "GitHub",
        url: "https://github.com/l1ck0h/elementary-cellular-automaton",
      },
    ]);
    return { linksItems, version };
  },
};
</script>
<style scoped>
.footer-children > small {
  font-size: var(--ms-1);
}
</style>
