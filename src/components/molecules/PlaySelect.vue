<template>
  <Container title="PLAY SELECT">
    <div v-for="item in items" :key="item.type">
      <Radio name="play-select" :label="item.label" :value="item.type" />
    </div>
  </Container>
</template>
<script>
import Container from "@/components/atoms/Container.vue";
import Radio from "@/components/atoms/Radio.vue";
export default {
  name: "PlaySelect",
  components: {
    Container,
    Radio,
  },
  data() {
    return {
      items: [
        { label: "SINGLE CELL", type: "default" },
        { label: "RANDOM CELLS", type: "random" },
      ],
    };
  },
};
</script>
<style scoped>
</style>