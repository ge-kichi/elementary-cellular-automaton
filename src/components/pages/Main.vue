<template>
  <div class="Main" :class="{ 'is-hidden': isMainHidden }">
    <Status />
    <Sketch />
    <Menu />
  </div>
  <RuleDialog />
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Status from "@/components/organisms/Status.vue";
import Sketch from "@/components/organisms/Sketch.vue";
import Menu from "@/components/organisms/Menu.vue";
import RuleDialog from "@/components/organisms/RuleDialog.vue";
import { IsMainHidden } from "@/store/getterTypes";
export default {
  name: "Main",
  components: {
    Status,
    Sketch,
    Menu,
    RuleDialog,
  },
  setup() {
    const store = useStore();
    const isMainHidden = computed(() => store.getters[IsMainHidden]);
    return {
      isMainHidden,
    };
  },
};
</script>
<style scoped>
.Main {
  width: 600px;
  height: var(--height);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.Main.is-hidden {
  display: none;
}
@media screen and (max-width: 599px) {
  .Main {
    width: 320px;
  }
}
</style>
