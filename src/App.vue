<template>
  <NavBar></NavBar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/UI/Navbar.vue";

export default defineComponent({
  data() {
    return {};
  },
  components: {
    NavBar,
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>
