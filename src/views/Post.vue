<template>
  <div class="post-wrapper">
    <Header />
    <div class="post">
      <h1 class="post-title">Post Info</h1>
      <p>Title: {{ post.title }}</p>
      <p>Body: {{ post.body }}</p>
    </div>
    <div class="comment" v-for="comment in comments" :key="comment.email">
      <p>Email: {{ comment.email }}</p>
      <p>Name: {{ comment.name }}</p>
      <p>Body: {{ comment.body }}</p>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header";
import axios from "axios";
export default {
  data() {
    return {
      post: [],
      comments: []
    };
  },
  components: {
    Header
  },
  mounted() {
    // send a GET request
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
      )
      .then(
        response => {
          this.post = response.data;
          console.log(response.data);
        },
        error => {
          console.log(error);
        }
      );
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}/comments`
      )
      .then(
        response => {
          this.comments = response.data;
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
.post-wrapper {
  margin: 10px 10px 0 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  .post {
    margin-bottom: 10px;
    line-height: 1.7;
    width: 800px;
    padding: 20px;
    border: 2px solid black;
    border-radius: 5px;
    .post-title {
      font: 25px "Maven Pro", sans-serif;
      text-align: center;
    }
  }
  .comment {
    width: 800px;
    padding: 20px;
    border: 2px solid #f2f2f2;
    border-radius: 5px;
    margin-bottom: 20px;
    line-height: 1.7;
  }
}
</style>