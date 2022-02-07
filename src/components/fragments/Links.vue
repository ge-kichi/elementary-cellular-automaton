<template>
  <template v-for="(item, i) in items" :key="i">
    <a :href="item.url" target="_blank" rel="noopener noreferrer">{{
      item.label
    }}</a
    >{{ i !== items.length - 1 ? " | " : "" }}
  </template>
</template>
<script lang="ts">
import { PropType } from "vue";
export default {
  name: "Links",
  props: {
    items: Array as PropType<
      Array<{
        label: string;
        url: string;
      }>
    >,
  },
};
</script>
<style scoped>
a:hover {
  color: #1a73e8;
}
</style>
