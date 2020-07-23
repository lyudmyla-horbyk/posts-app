<template>
  <div class="posts-wrapper">
    <Header />
    <div class="posts">
      <div class="post" v-for="post in posts" :key="post.title">
        <router-link :to="{ name: 'Post' , params: { id: post.id } }">
          <a class="post-title" href="#">{{ post.title }}</a>
        </router-link>
        <p>{{ post.body }}</p>
        <router-link :to="{ name: 'User' }">
          <a href="#">User Profile</a>
        </router-link>
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
        console.log(response.data);
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px 10px 0 10px;
  .post {
    padding: 8px;
    border: 2px solid #f2f2f2;
    margin-bottom: 10px;
    border-radius: 5px;
    line-height: 1.7;
  }
  .post-title {
    font-size: 19px;
  }
}
</style>
