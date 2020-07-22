<template>
  <div class="user-wrapper">
    <div class="user">
      <h1 class="user-title">User Info</h1>
      <p>Name: {{ user.name }}</p>
      <p>UserName: {{ user.username }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Phone: {{ user.phone}}</p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["user"])
  }
};
</script>
<style scoped lang="scss">
.user-wrapper {
  margin: 10px;
  .user {
    line-height: 1.7;
    .user-title {
      font: 38px "Maven Pro", sans-serif;
      margin-bottom: 8px;
    }
  }
}
</style>
