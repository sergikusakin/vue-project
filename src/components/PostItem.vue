<template>
  <div class="post">
    <div>
      <div>{{ post.id }}</div>
      <div><strong>Name: </strong>{{ post.title }}</div>
      <div><strong>Description: </strong>{{ post.body }}</div>
    </div>
    <div class="postManagement-btns">
      <div class="post-btns">
        <my-button @click="$router.push(`/posts/${post.id}`)">Open</my-button>
      </div>
      <div class="post-btns">
        <my-button @click="$emit('remove', post)">Delete</my-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import MyButton from "@/components/UI/MyButton.vue";
import type { Post } from "@/entities/post";

export default defineComponent({
  components: { MyButton },
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },

  data() {
    return {};
  },
});
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid olive;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.postManagement-btns {
  display: flex;
  text-align: center;
}

.post-btns {
  margin-left: 10px;
}
</style>
