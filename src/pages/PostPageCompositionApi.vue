<template>
  <div>
    <h1>Page with posts</h1>
    <my-input
      class="space-search"
      v-model="searchQuery"
      placeholder="Search..."
      v-focus
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
    <my-button class="app-btns">Let's get posts</my-button>
    <my-dialog v-model:show="dialogVisible">
      <PostForm />
    </my-dialog>

    <PostList :posts="sortedAndSearchedPosts" v-if="!isPostLoading" />
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
import type { Post } from "@/entities/post";
import aixos from "axios";
import { ref } from "vue";
import { usePosts } from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPost";
import useSortedPostsAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";

export default defineComponent({
  components: { PostForm, PostList, MySelect, MyInput },

  data() {
    return {
      // posts: [] as Post[],
      dialogVisible: false,
      // isPostLoading: false,
      // searchQuery: "",
      // page: 1,
      // limit: 10,
      // totalPages: 0,
      // selectedSort: undefined as "title" | "body" | undefined,
      sortOptions: [
        { value: undefined, name: "No sort" },
        { value: "title", name: "Select by name" },
        { value: "body", name: "Select by content" },
      ],
    };
  },

  setup(props) {
    const { posts, isPostLoading, totalPages } = usePosts(10);
    const { sortedPosts, selectedSort } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedPostsAndSearchedPosts(sortedPosts);
    return {
      posts,
      totalPages,
      isPostLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
    };
  },

  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
    // changePage(pageNumber: any) {
    //   this.page = pageNumber;
    // },

    // async fetchPost() {
    //   try {
    //     this.isPostLoading = true;
    //     setTimeout(async () => {
    //       const response = await aixos.get(
    //         "https://jsonplaceholder.typicode.com/posts",
    //         {
    //           params: {
    //             _page: this.page,
    //             _limit: this.limit,
    //           },
    //         }
    //       );
    //       this.totalPages = Math.ceil(
    //         response.headers["x-total-count"] / this.limit
    //       );
    //       this.posts = response.data;
    //       this.isPostLoading = false;
    //     }, 1000);
    //   } catch (e) {
    //     alert("Error");
    //   } finally {
    //   }
    // },
    // async loadMorePost() {
    //   try {
    //     this.page++;
    //     setTimeout(async () => {
    //       const response = await aixos.get(
    //         "https://jsonplaceholder.typicode.com/posts",
    //         {
    //           params: {
    //             _page: this.page,
    //             _limit: this.limit,
    //           },
    //         }
    //       );
    //       this.totalPages = Math.ceil(
    //         response.headers["x-total-count"] / this.limit
    //       );
    //       this.posts = [...this.posts, ...response.data];
    //     }, 500);
    //   } catch (e) {
    //     alert("Error");
    //   }
    // },
  },
  mounted() {
    // this.fetchPost();
    // console.log(this.$refs.observer);
    // const options = {
    //   rootMargin: "0px",
    //   threshold: 1.0,
    // };
    // const callback = (entries: any, observer: any) => {
    //   if (entries[0].isIntersecting && this.page < this.totalPages) {
    //     this.loadMorePost();
    //   }
    // };
    // const observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observer as Element);
  },
  computed: {
    // sortedPost() {
    //   const sort = this.selectedSort;
    //   if (sort === undefined) {
    //     return this.posts;
    //   }
    //   return [...this.posts].sort((post1, post2) => {
    //     return post1[sort]?.localeCompare(post2[sort]);
    //   });
    // },
    // sortedAndSearchedPosts() {
    //   return this.sortedPost.filter((post) =>
    //     post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    //   );
    // },
  },
  watch: {
    // page() {
    //   this.fetchPost();
    // },
  },
});
</script>

<style>
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

.page-wrapper {
  display: flex;
  margin-top: 15px;
}

.page-line {
  border: 1px solid olive;
  padding: 10px;
}

.current-page-line {
  border: 2px solid black;
}

.observer {
  height: 30px;
  background: olive;
  margin-top: 15px;
}
</style>
