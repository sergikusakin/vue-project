<template>
  <div>
    <form @submit.prevent>
      <h4>Create your post</h4>
      <input
        :value="post.title"
        @input="handleTitleInput"
        class="input"
        type="text"
        placeholder="Name of the post"
      />
      <input
        :value="post.body"
        @input="handleBodyInput"
        class="input"
        type="text"
        placeholder="Description of the post"
      />
      <button class="btn" @click="createPost">Create</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
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

.input {
  width: 100%;
  border: 1px solid olive;
  padding: 10px, 15px;
  margin-top: 10px;
}

.btn {
  margin-top: 15px;
  align-self: flex-end;
  padding: 8px 12px;
  background: none;
  color: black;
  border: 1px solid olive;
}
</style>
