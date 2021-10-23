<template>
  <Container title="PLAY SELECT">
    <div v-for="item in items" :key="item.type">
      <Radio name="play-select" :label="item.label" :value="item.type" />
    </div>
  </Container>
</template>
<script>
import { ref } from "vue";
import Container from "@/components/atoms/Container.vue";
import Radio from "@/components/atoms/Radio.vue";
export default {
  name: "PlaySelect",
  components: {
    Container,
    Radio,
  },
  setup() {
    const items = ref([
      { label: "SINGLE CELL", type: "default" },
      { label: "RANDOM CELLS", type: "random" },
    ]);
    return {
      items,
    };
  },
};
</script>