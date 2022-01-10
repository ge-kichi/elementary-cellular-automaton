<template>
  <span class="el-box el-box--padding:0">
    <div class="el-center el-center--gutters:s-1">
      <a
        class="nes-icon github"
        :href="url"
        target="_blank"
        rel="noopener noreferrer"
      ></a>
    </div>
  </span>
</template>
<script lang="ts">
export default {
  name: "GitHubLink",
  props: { url: String },
};
</script>
<style scoped>
.nes-icon.github::before {
  color: var(--color-dark);
}
</style>
