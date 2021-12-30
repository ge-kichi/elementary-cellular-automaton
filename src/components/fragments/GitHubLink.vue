<template>
  <span id="github-link" class="el-box --0">
    <a
      class="nes-icon github is-midium"
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
    ></a>
  </span>
</template>
<script lang="ts">
export default {
  name: "GitHubLink",
  props: {
    url: String,
  },
};
</script>
<style scoped>
#github-link > a::before {
  color: var(--color-dark);
}
</style>
