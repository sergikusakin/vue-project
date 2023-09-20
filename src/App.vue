<template>
    <div class="app">
      <div>
        <form>
          <h4>Create your post</h4>
            <input 
              v-bind:value="title" 
              @input="handleTitleInput"
              class="input" 
              type="text" 
              placeholder="Name of the post"
            >
            <input 
              v-bind:value="body"
              @input="handleBodyInput" 
              class="input" 
              type="text" 
              placeholder="Description of the post"
            >
            <button 
              class="btn" 
              @click="createPost">Create
            </button>
        </form>
      </div>
      <div class="post" v-for="post in posts">
          <div><strong>Name: </strong>{{ post.title }}</div>
          <div><strong>Description: </strong>{{ post.body }}</div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
      return {
       posts: [
        {id: 1, title: 'JS Post 1', body: 'Description of the post 1'},
        {id: 2, title: 'JS Post 2', body: 'Description of the post 2'},
        {id: 3, title: 'JS Post 3', body: 'Description of the post 3'},
        {id: 4, title: 'JS Post 4', body: 'Description of the post 4'},
       ],
        title: '',
        body: ''
      }
    },
    methods: {
      createPost() {

      },
      handleTitleInput(event: Event){
        this.title = (event?.target as any).value
      },
      handleBodyInput(event: Event){
        this.body = (event?.target as any).value
      }
    }
})
</script> 
  
<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app{
  padding: 20px;
}

.post{
  padding: 15px;
  border: 2px solid olive;
  margin-top: 15px;
}

form{
  display: flex;
  flex-direction: column;
  
}

.input{
  width: 100%;
  border: 1px solid olive;
  padding: 10px, 15px;
  margin-top: 10px;
}

.btn{
  margin-top: 15px;
  align-self: flex-end;
  padding: 8px 12px;
  background: none;
  color: black;
  border: 1px solid olive;
}

</style>