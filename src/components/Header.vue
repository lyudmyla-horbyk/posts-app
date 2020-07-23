<template>
  <div class="header-wrapper">
    <nav class="header-nav">
      <router-link :to="{ name: 'Home' }">
        <a class="header-nav-link" href="#">Home</a>
      </router-link>
      <router-link :to="{ name: 'User' }">
        <a class="header-nav-link" href="#">User</a>
      </router-link>
      <router-link :to="{ name: 'Login' }">
        <a class="header-nav-link" href="#">Logout</a>
      </router-link>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.header-wrapper {
  .header-nav {
    margin-top: 10px;
    margin-bottom: 20px;
    .header-nav-link {
      text-decoration: none;
      margin: 20px;
      color: #777;
      font: 22px "Maven Pro", sans-serif;
    }
    .header-nav-link:hover {
      color: black;
      transition: 0.5s;
    }
  }
}
</style>
