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
    <PopupIncorrectEmail v-on:close="closePopup" v-if="popupIncorrectEmail" />
  </div>
</template>
<script>
import PopupIncorrectEmail from "../components/PopupIncorrectEmail";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    PopupIncorrectEmail
  },
  data() {
    return {
      email: "",
      popupIncorrectEmail: false
    };
  },
  computed: {
    ...mapGetters(["allowedEmails"])
  },
  methods: {
    submitEmail() {
      if (this.allowedEmails.includes(this.email)) {
        this.login(this.email);
        this.$router.push({ name: "Home" });
      } else {
        this.popupIncorrectEmail = true;
      }
    },
    closePopup() {
      this.popupIncorrectEmail = false;
    },
    ...mapActions(["fetchUsers", "login"])
  },
  mounted() {
    // send a GET request
    this.fetchUsers();
  }
};
</script>
<style scoped lang="scss">
.login-wrapper {
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
      &:hover {
        border-image: linear-gradient(45deg, #3fb481 0%, blue 100%);
        border-image-slice: 1;
        color: #3fb481;
        transition: 0.2s;
      }
    }
  }
}
</style>
