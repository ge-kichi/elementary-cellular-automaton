<template>
  <small class="copyright">&copy; {{ year }} {{ owner }}</small>
</template>
<script lang="ts">
export default {
  name: "Copyright",
  props: {
    year: {
      type: Number,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.copyright {
  font-size: var(--s-1);
}
</style>
