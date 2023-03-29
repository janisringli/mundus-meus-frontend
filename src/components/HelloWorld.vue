<template>
<div id="app">
  <div v-if="error">
    {{ error }}
  </div>

  <form id="form" v-on:submit="handleSubmit" v-else>
    <label for="name">Name</label>
    <input id="name" v-model="modifiedData.data.postTitle" type="text" name="name">

    <label for="description">Description</label>
    <input id="description" v-model="modifiedData.data.postDescription" type="text" name="description">

    <input type="submit" value="Submit">
  </form>
    <button @click="getAllPosts">Get Posts</button>
</div>
</template>
<script>
import axios from 'axios'
import { getAllPosts } from '../services/PostService.js'


export default {
  name: 'CreatePost',
 data() {
    return {
      modifiedData: {
        data: {
          postTitle: '',
          postDescription: '',
        }
        
      },
      error: null
    }
  },
  methods: {
  async getAllPosts() {
    const response = await getAllPosts()
    console.log(response)
    this.posts = response.data
  },
  handleSubmit: async function(e) {
      e.preventDefault();

      try {
        const response = await axios.post('http://127.0.0.1:1337/api/posts', this.modifiedData)
        console.log(response);


      } catch(error) {
        this.error = error;
        
      }
      
    }
  }

}
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
