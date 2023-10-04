<template>
  <select v-model="modelValue" @change="changeOption">
    <option disabled value="">Select from the list</option>
    <option
      v-for="option in options"
      :key="(option as any).value"
      :value="(option as any).value"
    >
      {{ (option as any).name }}
    </option>
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
  methods: {
    changeOption(event: Event) {
      this.$emit("update:modelValue", (event?.target as any).value);
    },
  },
  data() {
    return {};
  },
});
</script>

<style scoped></style>
