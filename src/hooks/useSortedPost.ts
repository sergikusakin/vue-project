import { ref, computed } from "vue";

export default function useSortedPosts(posts: any) {
  const selectedSort = ref("");
  const sortedPosts = computed(() => {
    const sort = selectedSort;

    if (sort.value === undefined) {
      return posts;
    }

    return [...posts.value].sort((post1, post2) => {
      return post1[sort.value]?.localeCompare(post2[sort.value]);
    });
  });

  return { selectedSort, sortedPosts };
}
