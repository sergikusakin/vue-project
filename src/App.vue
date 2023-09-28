<template>
  <div class="app">
    <h1>Page with posts</h1>
    <my-button @click="fetchPost">Let's get posts</my-button>
    <my-button class="btn-dialog" @click="showDialog"
      >Create your post</my-button
    >
    <my-dialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </my-dialog>

    <PostList :posts="posts" @remove="removePost" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import type { Post } from "./entities/post";
import aixos from "axios";

export default defineComponent({
  components: { PostForm, PostList },

  data() {
    return {
      posts: [] as Post[],
      dialogVisible: false,
    };
  },

  methods: {
    createPost(post: Post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post: Post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPost() {
      try {
        const response = await aixos.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = response.data;
      } catch (e) {
        alert("Error");
      }
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

.btn-dialog {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
