<template>
  <Container title="STATE SELECT">
    <div class="StateSelect-wrapper">
      <template v-for="item in items" :key="item.type">
        <Radio name="state-select" :label="item" :value="item" />
      </template>
    </div>
  </Container>
</template>
<script>
import { ref } from "vue";
import Container from "@/components/atoms/Container.vue";
import Radio from "@/components/atoms/Radio.vue";
import ECA from "@/js/ECA";
export default {
  name: "StateSelect",
  components: {
    Container,
    Radio,
  },
  setup() {
    const items = ref([ECA.SINGLE_STATE, ECA.RANDOM_STATE]);
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