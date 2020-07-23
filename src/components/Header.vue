<template>
  <div class="header-wrapper">
    <nav class="header-nav">
      <router-link :to="{ name: 'Home' }" class="header-nav-link">Home</router-link>
      <router-link :to="{ name: 'User' }" class="header-nav-link">User</router-link>
      <a @click.prevent="handleLogout" class="header-nav-link" href="#">Logout</a>
    </nav>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["logout"]),
    handleLogout() {
      this.logout();
      this.$router.push({ name: "Login" });
    }
  }
};
</script>

<style scoped lang="scss">
.header-wrapper {
  text-align: center;
  .header-nav {
    margin-bottom: 30px;
    .header-nav-link {
      text-decoration: none;
      margin: 20px;
      color: #3fb481;
      font: 22px "Maven Pro", sans-serif;
    }
    .header-nav-link:hover {
      color: #008000;
      transition: 0.5s;
    }
  }
}
</style>
