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
      <button class="login-button" type="button">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {},
  mounted() {}
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
