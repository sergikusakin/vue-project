<template>
  <div>
    <form @submit.prevent>
      <h4>Create your post</h4>
      <my-input
        :value="post.title"
        @input="handleTitleInput"
        type="text"
        placeholder="Name of the post"
      />
      <my-input
        :value="post.body"
        @input="handleBodyInput"
        type="text"
        placeholder="Description of the post"
      />
      <my-button class="btn" @click="createPost">Create</my-button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyButton from "@/components/UI/MyButton.vue";
import MyInput from "@/components/UI/MyInput.vue";

export default defineComponent({
  components: {
    MyButton,
    MyInput,
  },
  data() {
    return {
      post: {
        id: 0,
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        id: 0,
        title: "",
        body: "",
      };
    },
    handleTitleInput(event: Event) {
      this.post.title = (event?.target as any).value;
    },
    handleBodyInput(event: Event) {
      this.post.body = (event?.target as any).value;
    },
  },
});
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
