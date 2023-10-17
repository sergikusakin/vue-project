<template>
  <div>
    <h1>Welcome to my page</h1>
    <router-link to="/users">Users</router-link>
    <router-link to="/about">About</router-link>
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
