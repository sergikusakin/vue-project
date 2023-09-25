<template>
  <input class="input" type="text" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "my-input",
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
