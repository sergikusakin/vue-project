<template>
  <select v-model="modelValue">
    <option disabled value="">Select from the list</option>
    <option v-for="option in options" :key="(option as any).value"></option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "my-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
});
</script>

<style scoped></style>
