<template>
    <div>
      <div class="post">
        <div><strong>Name:</strong> Post about JS</div>
        <div><strong>Description:</strong> Lorem ipsum dolor sit amet.</div>
      </div>
      <div class="post">
        <div><strong>Name:</strong> Post about JS</div>
        <div><strong>Description:</strong> Lorem ipsum dolor sit amet.</div>
      </div>
      <div class="post">
        <div><strong>Name:</strong> Post about JS</div>
        <div><strong>Description:</strong> Lorem ipsum dolor sit amet.</div>
      </div>
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
  
<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.post{
  padding: 15px;
  border: 2px solid olive;
  margin-top: 15px;
}

</style>