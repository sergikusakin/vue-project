<template>
  <div class="app">
    <PostForm />
    <PostList :posts="posts" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";

export default defineComponent({
  components: { PostForm, PostList },

  data() {
    return {
      posts: [
        { id: 1, title: "JS Post 1", body: "Description of the post 1" },
        { id: 2, title: "JS Post 2", body: "Description of the post 2" },
        { id: 3, title: "JS Post 3", body: "Description of the post 3" },
        { id: 4, title: "JS Post 4", body: "Description of the post 4" },
      ],
      title: "",
      body: "",
    };
  },

  methods: {
    // this.posts.push(newPost);
    // this.title = '';
    // this.body = '';
    // },
    // handleTitleInput(event: Event){
    //   this.title = (event?.target as any).value
    //   },
    // handleBodyInput(event: Event){
    //   this.body = (event?.target as any).value
    //   },
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
