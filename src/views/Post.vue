<template>
  <div class="post-wrapper">
    <Header />
    <div class="post" v-if="post">
      <h1 class="post-title">Post Info</h1>
      <p>Title: {{ post.title }}</p>
      <p>Body: {{ post.body }}</p>
    </div>
    <div v-if="comments.length">
      <div class="comment" v-for="comment in comments" :key="comment.email">
        <div class="email-container">
          <p>Email: {{ comment.email }}</p>
        </div>
        <div class="main-info-container">
          <p>Name: {{ comment.name }}</p>
          <p>Body: {{ comment.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header";
import axios from "axios";
export default {
  data() {
    return {
      post: null,
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
  .post {
    margin-bottom: 10px;
    line-height: 1.7;
    padding: 20px;
    border: 2px solid #3fb481;
    border-radius: 5px;
    .post-title {
      font: 25px "Maven Pro", sans-serif;
      text-align: center;
      margin-bottom: 10px;
    }
  }
  .comment {
    display: flex;
    padding: 20px;
    border: 2px solid #e6ffe6;
    border-radius: 5px;
    margin-bottom: 20px;
    line-height: 1.7;
    .email-container {
      flex-basis: 35%;
    }
    .main-info-container {
      flex-basis: 65%;
    }
  }
}
</style>
