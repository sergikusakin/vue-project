<template>
  <div>
    <button @click="addLike">Like</button>
    <button @click="addDislike">Dislike</button>
  </div>
    <div>
      <div>Number of likes: <strong>{{ likes }}</strong></div>
      <div>Number of dislikes: <strong>{{ dislikes }}</strong></div>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
      return {
        likes: 0,
        dislikes: 0
      }
    },
    methods: {
      addLike(){
        this.likes += 1; 
      },
      addDislike(){
        this.dislikes += 1;
      }

    }
})
</script>
  
<style></style>