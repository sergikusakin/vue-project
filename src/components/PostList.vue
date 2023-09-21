<template>
  <div class="post" v-for="post in posts">
    <div><strong>Name: </strong>{{ post.title }}</div>
    <div><strong>Description: </strong>{{ post.body }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  props: {
    posts: {
      type: Array as PropType<{ title: string; body: string }[]>,
      required: true,
    },
  },

  data() {
    return {};
  },
});
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid olive;
  margin-top: 15px;
}
</style>
