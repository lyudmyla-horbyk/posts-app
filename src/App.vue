<template>
  <div>
    <login />
  </div>
</template>

<script>
import Login from "./components/Login";
export default {
  name: "app",
  components: {
    Login
  }
};
</script>

<style lang="scss">
body {
  margin: auto;
}
header,
main,
footer,
h1,
h2,
h3,
h4,
h5,
p,
nav {
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>
