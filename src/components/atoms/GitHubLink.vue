<template>
  <a
    class="GitHubLink nes-icon github is-midium"
    href="https://github.com/l1ck0h/cellular-automaton"
    target="_blank"
    rel="noopener noreferrer"
  ></a>
</template>
<script>
export default {
  name: "GitHubLink",
};
</script>
<style scoped>
.GitHubLink {
  cursor: pointer;
}
.GitHubLink::before {
  color: #212529;
}
</style>