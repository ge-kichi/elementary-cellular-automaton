<template>
  <a
    class="nes-icon github is-midium"
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
.nes-icon {
  cursor: pointer;
}
.nes-icon.github::before {
  color: #212529;
}
</style>