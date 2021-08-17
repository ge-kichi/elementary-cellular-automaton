<template>
  <div id="play-select" class="nes-container is-rounded is-dark with-title">
    <span class="title">PLAY SELECT</span>
    <div v-for="item in items" :key="item.type">
      <label>
        <input
          type="radio"
          class="nes-radio is-dark play-select"
          name="play-select"
          :value="item.type"
        />
        <span>{{ item.label }}</span>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: "PlaySelect",
  data() {
    return {
      items: [
        { type: "default", label: "PUSH START" },
        { type: "random", label: "PUSH START(RANDOM)" },
      ],
    };
  },
};
</script>
<style scoped>
</style>