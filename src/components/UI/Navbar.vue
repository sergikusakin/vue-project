<template>
  <div class="navbar">
    <div @click="$router.push('/')">Project with use technology vue.js</div>
    <div class="navbar-btns">
      <my-button @click="$router.push('/users')">Posts</my-button>
      <my-button class="btn-about" @click="$router.push('/about')"
        >About</my-button
      >
      <my-button class="btn-store" @click="$router.push('/store')"
        >Store</my-button
      >
      <my-button class="btn-composition" @click="$router.push('/composition')"
        >Composition</my-button
      >
    </div>
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

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 20px;
}

.navbar-btns {
  margin-left: auto;
}

.btn-about {
  margin-left: 10px;
}

.btn-store {
  margin-left: 10px;
}

.btn-composition {
  margin-left: 10px;
}
</style>
