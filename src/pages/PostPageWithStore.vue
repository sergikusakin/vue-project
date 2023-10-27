<template>
  <div>
    <h1>Page with posts</h1>
    <my-input
      class="space-search"
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      placeholder="Search..."
      v-focus
    ></my-input>
    <div class="app-btns">
      <my-button class="btn-dialog" @click="showDialog"
        >Create your post</my-button
      >
      <my-select
        class="select"
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
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
    <div class="observer" v-intersection="loadMorePost"></div>

    <!-- <div class="page-wrapper">
      <div
        class="page-line"
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        :class="{ 'current-page-line': page === pageNumber }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div> -->
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
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default defineComponent({
  components: {
    PostForm,
    PostList,
    MySelect,
    MyInput,
  },

  data() {
    return {
      dialogVisible: false,
    };
  },

  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
    }),
    ...mapActions({
      loadMorePost: "post/loadMorePost",
      fetchPost: "post/fetchPost",
    }),
    createPost(post: Post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post: Post) {
      this.posts = this.posts.filter((p: any) => p.id !== post.id);
    },
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
    this.fetchPost();
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
    ...mapState({
      posts: (state: any) => state.post.posts,
      isPostLoading: (state: any) => state.post.isPostLoading,
      searchQuery: (state: any) => state.post.searchQuery,
      page: (state: any) => state.post.page,
      limit: (state: any) => state.post.limit,
      totalPages: (state: any) => state.post.totalPages,
      selectedSort: (state: any) => state.post.selectedSort,
      sortOptions: (state: any) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPost: "post/sortedPost",
      sortedAndSearchedPosts: "post/sortedAndSearchedPosts",
    }),
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
