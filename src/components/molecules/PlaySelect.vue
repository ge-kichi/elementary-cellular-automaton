<template>
  <Container id="play-select" :title="title">
    <div v-for="item in items" :key="item.type">
      <Radio :name="name" :label="item.label" :value="item.type" />
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
      title: "PLAY SELECT",
      name: "play-select",
      items: [
        { label: "PUSH START", type: "default" },
        { label: "PUSH START(RANDOM)", type: "random" },
      ],
    };
  },
};
</script>
<style scoped>
</style>