<template>
  <div class="post">
    <div>
      <div><strong>Name: </strong>{{ post.title }}</div>
      <div><strong>Description: </strong>{{ post.body }}</div>
    </div>
    <div class="post-btns">
      <my-button>Delete</my-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyButton from "@/components/UI/MyButton.vue";

export default defineComponent({
  components: { MyButton },
  props: {
    post: {
      type: Object,
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
</style>
