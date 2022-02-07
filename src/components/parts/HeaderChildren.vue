<template>
  <div class="header-children el-center">
    <div
      class="el-cluster el-cluster--justify:space-between"
      style="width: 100%"
    >
      <h1>ECA</h1>
      <Statuses />
    </div>
  </div>
</template>
<script lang="ts">
import Statuses from "@/components/parts/Statuses.vue";
export default {
  components: { Statuses },
  name: "FooterChildren",
};
</script>
