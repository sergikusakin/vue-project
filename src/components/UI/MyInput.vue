<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event: Event) {
      this.$emit("update:modelValue", (event?.target as any).value);
    },
  },
  data() {
    return {};
  },
});
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid olive;
  padding: 10px, 15px;
  margin-top: 10px;
}
</style>
