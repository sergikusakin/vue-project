<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "my-button",
  data() {
    return {};
  },
});
</script>

<style scoped>
.btn {
  margin-top: 15px;
  align-self: flex-end;
  padding: 8px 12px;
  background: none;
  color: black;
  border: 1px solid olive;
}
</style>
