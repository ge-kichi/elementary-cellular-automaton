<template>
  <Container title="STATE SELECT">
    <div class="StateSelect-wrapper">
      <template v-for="(item, i) in items" :key="i">
        <Radio name="state-select" :label="item" :value="item" />
      </template>
    </div>
  </Container>
</template>
<script>
import { ref } from "vue";
import Container from "@/components/atoms/Container.vue";
import Radio from "@/components/atoms/Radio.vue";
export default {
  name: "StateSelect",
  components: {
    Container,
    Radio,
  },
  setup() {
    const items = ref(["SINGLE", "RANDOM"]);
    return {
      items,
    };
  },
};
</script>
<style scoped>
.StateSelect-wrapper {
  display: flex;
  flex-direction: row;
  gap: 15px;
}
</style>