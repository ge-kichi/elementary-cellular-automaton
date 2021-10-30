<template>
  <div class="Main" v-show="isMainShow">
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
import { IsMainShow } from "@/store/getterTypes";
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
    const isMainShow = computed(() => store.getters[IsMainShow]);
    return {
      isMainShow,
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
@media screen and (max-width: 599px) and (orientation: portrait) {
  .Main {
    width: 320px;
  }
}
</style>
