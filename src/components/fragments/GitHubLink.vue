<template>
  <a
    class="GitHubLink nes-icon github is-midium"
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
  ></a>
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
.GitHubLink {
  cursor: pointer;
}
.GitHubLink::before {
  color: #212529;
  content: ""; /*nes.icons conflict */
}
</style>