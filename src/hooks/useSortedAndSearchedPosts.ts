import { ref, computed } from "vue";

export default function useSortedPostsAndSearchedPosts(sortedPosts: any) {
  const searchQuery = ref("");
  const sortedAndSearchedPosts = computed(() => {
    return sortedPosts.value.filter((post: any) =>
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  return { searchQuery, sortedAndSearchedPosts };
}
