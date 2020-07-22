<template>
  <div>
    <login />
    <PopupIncorrectEmail />
  </div>
</template>

<script>
import Login from "./components/Login";
import PopupIncorrectEmail from "./components/PopupIncorrectEmail";
export default {
  name: "app",
  components: {
    Login,
    PopupIncorrectEmail
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
