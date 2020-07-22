<template>
  <div class="login-wrapper">
    <form class="form">
      <p class="title">Login</p>
      <input
        class="login-email-input"
        v-model="email"
        type="text"
        name="email"
        placeholder="Email"
        required
      />
      <button v-on:click="submitEmail" class="login-button" type="button">Submit</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      allowedEmails: []
    };
  },
  methods: {
    submitEmail(event) {
      if (this.allowedEmails.includes(this.email)) {
        console.log("goood");
      } else {
        console.log("bad");
        this.$emit("incorrectEmail", event);
      }
    }
  },
  mounted() {
    // send a GET request
    axios.get("https://jsonplaceholder.typicode.com/users").then(
      response => {
        this.allowedEmails = response.data.map(a => a.email);
      },
      error => {
        console.log(error);
      }
    );
  }
};
</script>
<style scoped lang="scss">
.login-wrapper {
  display: flex;
  justify-content: center;
  padding: 20px;
  .form {
    width: 500px;
    .title {
      font: 38px "Maven Pro", sans-serif;
      text-align: center;
    }
    .login-email-input {
      width: 100%;
      box-sizing: border-box;
      margin-top: 15px;
      padding: 10px;
      font-size: 18px;
      border: 1px solid #d5d5d5;
    }
    .login-button {
      width: 100%;
      padding: 10px 20px;
      font-size: 15px;
      cursor: pointer;
      text-transform: uppercase;
      margin-top: 15px;
    }
  }
}
</style>
