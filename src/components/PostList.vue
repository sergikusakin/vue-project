<template>
  <div v-if="posts.length > 0">
    <h3>List of users</h3>
    <post-item
      class="post"
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"
    >
    </post-item>
  </div>
  <div v-else class="emptyList">
    <h3>Empty list</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import PostItem from "@/components/PostItem.vue";
import type { Post } from "@/entities/post";

export default defineComponent({
  components: { PostItem },
  props: {
    posts: {
      type: Array as PropType<Post[]>,
      required: true,
    },
  },
});
</script>

<style scoped>
.emptyList {
  color: gray;
}
</style>
