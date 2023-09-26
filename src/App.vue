<template>
  <div class="app">
    <PostForm @create="createPost" />
    <PostList :posts="posts" @remove="removePost" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import type { Post } from "./entities/post";

export default defineComponent({
  components: { PostForm, PostList },

  data() {
    return {
      posts: [
        { id: 1, title: "JS Post 1", body: "Description of the post 1" },
        { id: 2, title: "JS Post 2", body: "Description of the post 2" },
        { id: 3, title: "JS Post 3", body: "Description of the post 3" },
        { id: 4, title: "JS Post 4", body: "Description of the post 4" },
      ] as Post[],
    };
  },

  methods: {
    createPost(post: Post) {
      this.posts.push(post);
    },
    removePost(post: Post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
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
