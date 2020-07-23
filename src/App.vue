<template>
  <div class="wrapper">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
body {
  margin: auto;
  font-family: "Roboto", sans-serif;
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
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
}
.container {
  max-width: 960px;
  margin: 30px auto;
}
</style>
