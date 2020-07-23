import Vue from "vue";
import VueRouter from "vue-router";
import store from './store'
import Home from "./views/Home";
import Login from "./views/Login";
import Post from "./views/Post";
import User from "./views/User";
import PageNotFound from "./views/PageNotFound";

Vue.use(VueRouter);

const routes = [
  {
    name: "Home",
    path: "/home",
    component: Home
  },
  {
    name: "Login",
    path: "/",
    component: Login
  },
  {
    name: "Post",
    path: "/post/:id",
    component: Post
  },
  {
    name: "User",
    path: "/user/:id",
    component: User
  },
  {
    name: "404",
    path: "*",
    component: PageNotFound
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && !store.getters.isLoggedIn) next({ name: "Login" });
  else next();
});

export default router;
