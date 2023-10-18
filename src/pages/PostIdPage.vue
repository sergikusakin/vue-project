<template>
  <div>
    <h1>This is page with ID Nº{{ $route.params.id }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },
});
</script>

<style scoped></style>
