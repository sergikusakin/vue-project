<template>
  <h3>List of users</h3>
  <post-item class="post" v-for="post in posts" :post="post"> </post-item>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import PostItem from "@/components/PostItem.vue";

export default defineComponent({
  components: { PostItem },
  props: {
    posts: {
      type: Array as PropType<{ title: string; body: string }[]>,
      required: true,
    },
  },

  data() {
    return {};
  },
});
</script>

<style scoped></style>
