import axios from "axios";
import { onMounted, ref } from "vue";

export function usePosts(limit: any) {
  const posts = ref([]);
  const isPostLoading = ref(true);
  const totalPages = ref(0);
  const fetching = async () => {
    try {
      setTimeout(async () => {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: 1,
              _limit: limit,
            },
          }
        );
        totalPages.value = Math.ceil(response.headers["x-total-count"] / limit);
        posts.value = response.data;
      }, 500);
    } catch (e) {
      alert("Error");
    } finally {
      isPostLoading.value = false;
    }
  };

  onMounted(fetching);
  return {
    posts,
    isPostLoading,
    totalPages,
  };
}
