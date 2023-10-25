import type { Post } from "@/entities/post";
import { compileTemplate } from "vue/compiler-sfc";
import axios from "axios";

export const postModule = {
  state: () => ({
    posts: [] as Post[],
    isPostLoading: false,
    searchQuery: "",
    page: 1,
    limit: 10,
    totalPages: 0,
    selectedSort: undefined as "title" | "body" | undefined,
    sortOptions: [
      { value: undefined, name: "No sort" },
      { value: "title", name: "Select by name" },
      { value: "body", name: "Select by content" },
    ],
  }),
  getters: {
    sortedPost(state: any) {
      const sort = state.selectedSort;

      if (sort === undefined) {
        return state.posts;
      }

      return [...state.posts].sort((post1, post2) => {
        return post1[sort]?.localeCompare(post2[sort]);
      });
    },

    sortedAndSearchedPosts(state: any, getters: any) {
      return getters.sortedPost.filter((post: any) =>
        post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
  mutations: {
    setPosts(state: any, posts: any) {
      state.posts = posts;
    },
    setLoading(state: any, bool: any) {
      state.isPostLoading = bool;
    },
    setPage(state: any, page: any) {
      state.page = page;
    },
    setTotalPages(state: any, totalPages: any) {
      state.totalPages = totalPages;
    },
    setSelectedSort(state: any, selectedSort: any) {
      state.selectedSort = selectedSort;
    },
    setSearchQuery(state: any, SearchQuery: any) {
      state.SearchQuery = SearchQuery;
    },
  },
  actions: {
    async fetchPost({ state, commit }) {
      try {
        commit("setLoading", true);
        setTimeout(async () => {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
              params: {
                _page: state.page,
                _limit: state.limit,
              },
            }
          );
          commit(
            "setTotalPages",
            Math.ceil(response.headers["x-total-count"] / state.limit)
          );
          commit("setPosts", response.data);
          state.isPostLoading = false;
        }, 1000);
      } catch (e) {
        console.log(e);
      } finally {
        commit("setLoading", false);
      }
    },
    async loadMorePost({ state, commit }) {
      try {
        commit("setPage", state.page + 1);
        setTimeout(async () => {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
              params: {
                _page: state.page,
                _limit: state.limit,
              },
            }
          );
          commit(
            "setTotalPages",
            Math.ceil(response.headers["x-total-count"] / state.limit)
          );
          commit("setPosts", [...state.posts, ...response.data]);
        }, 500);
      } catch (e) {
        console.log(e);
      }
    },
  },
  namespaced: true,
};
