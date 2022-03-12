<template>
  <div class="base-setting nes-container is-rounded with-title is-dark">
    <span class="title">{{ title }}</span>
    <div class="el-center">
      <div class="el-box el-box--invert">
        <div class="el-stack" style="--space: var(--ms-1)">
          <label v-for="(item, i) in items" :key="i" class="el-stack">
            <input
              type="radio"
              class="nes-radio is-dark"
              :name="name"
              :value="item.value"
              :checked="item.value === modelValue"
              @change="$emit('update:modelValue', $event.target.value)"
            />
            <span class="app-util-clickable">{{ item.value }}</span>
            <template v-if="item.writeIn">
              <slot></slot>
            </template>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { PropType } from "vue";
export default {
  name: "BaseSetting",
  emits: ["update:modelValue"],
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    items: Array as PropType<
      Array<{
        value: string;
        writeIn?: boolean;
      }>
    >,
    modelValue: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.base-setting {
  font-size: var(--ms-1);
}
</style>
