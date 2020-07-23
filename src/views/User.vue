<template>
  <div class="user-wrapper">
    <Header />
    <div class="user" v-if="user">
      <h1 class="user-title">User Info</h1>
      <p>Name: {{ user.name }}</p>
      <p>UserName: {{ user.username }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Phone: {{ user.phone }}</p>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header";
import axios from "axios";
export default {
  data() {
    return {
      user: null
    };
  },
  components: {
    Header
  },
  mounted() {
    // send a GET request
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`
      )
      .then(
        response => {
          this.user = response.data;
        },
        error => {
          console.log(error);
        }
      );
  }
};
</script>
<style scoped lang="scss">
.user-wrapper {
  .user {
    line-height: 1.7;
    width: 100vw;
    .user-title {
      font: 38px "Maven Pro", sans-serif;
      margin-bottom: 8px;
    }
  }
}
</style>
