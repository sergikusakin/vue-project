<template>
  <div v-if="posts.length > 0">
    <h3>List of users</h3>
    <transition-group name="post-list">
      <post-item
        class="post"
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      ></post-item>
    </transition-group>
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

.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.3s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(300px);
}
.post-list-move {
  transition: transform 0.3s ease;
}
</style>
