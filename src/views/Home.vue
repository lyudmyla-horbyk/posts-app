<template>
  <div class="posts-wrapper">
    <Header />
    <div class="posts">
      <div class="post" v-for="post in posts" :key="post.title">
        <router-link :to="{ name: 'Post', params: { id: post.id } }">{{ post.title }}</router-link>
        <p>{{ post.body }}</p>
        <router-link :to="{ name: 'User', params: { id: post.userId } }">Author Profile</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header";
import axios from "axios";
export default {
  components: {
    Header
  },
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    // send a GET request
    axios.get("https://jsonplaceholder.typicode.com/posts").then(
      response => {
        this.posts = response.data;
      },
      error => {
        console.log(error);
      }
    );
  }
};
</script>
<style scoped lang="scss">
.posts-wrapper {
  .post {
    padding: 20px;
    border: 2px solid #3fb481;
    margin-bottom: 10px;
    border-radius: 5px;
    line-height: 1.7;
  }
  .post-title {
    font-size: 19px;
  }
}
</style>
