<template>
  <div class="app">
    <h1>Page with posts</h1>
    <my-input
      class="space-search"
      v-model="searchQuery"
      placeholder="Search..."
    ></my-input>
    <div class="app-btns">
      <my-button class="btn-dialog" @click="showDialog"
        >Create your post</my-button
      >
      <my-select
        class="select"
        v-model="selectedSort"
        :options="sortOptions"
      ></my-select>
    </div>
    <my-button class="app-btns" @click="fetchPost">Let's get posts</my-button>
    <my-dialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </my-dialog>

    <PostList
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostLoading"
    />
    <div v-else>Loading... wait please</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MySelect from "@/components/UI/MySelect.vue";
import MyButton from "@/components/UI/MyButton.vue";
import MyInput from "@/components/UI/MyInput.vue";
import type { Post } from "./entities/post";
import aixos from "axios";

export default defineComponent({
  components: { PostForm, PostList, MySelect, MyInput },

  data() {
    return {
      posts: [] as Post[],
      dialogVisible: false,
      isPostLoading: false,
      searchQuery: "",
      selectedSort: "title" as "title" | "body",
      sortOptions: [
        { value: "title", name: "Select by name" },
        { value: "body", name: "Select by content" },
      ],
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
        this.isPostLoading = true;
        setTimeout(async () => {
          const response = await aixos.get(
            "https://jsonplaceholder.typicode.com/posts?_limit=10"
          );
          this.posts = response.data;
          this.isPostLoading = false;
        }, 1000);
      } catch (e) {
        alert("Error");
      } finally {
      }
    },
  },

  mounted() {
    this.fetchPost();
  },
  computed: {
    sortedPost() {
      return [...this.posts].sort((post1, post2) => {
        return (post1[this.selectedSort] as any)?.localeCompare(
          post2[this.selectedSort] as any
        );
      });
    },
    sortedAndSearchedPosts() {
      return this.sortedPost.filter((post) =>
        post.title.includes(this.searchQuery)
      );
    },
  },
  watch: {},
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

.space-search {
  padding: 10px;
}

.app-btns {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 15px;
}

.btn-dialog {
  margin-top: 15px;
  margin-bottom: 5px;
}

.select {
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 5px;
}
</style>
