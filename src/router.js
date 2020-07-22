import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Login from "./views/Login";
import Post from "./views/Post";
import User from "./views/User";

Vue.use(VueRouter);

const routes = [
    {
        name: "Home",
        path: "/home",
        component: Home
    },
    {
        name: "Login",
        path: "/login",
        component: Login
    },
    {
        name: "Post",
        path: "/post",
        component: Post
    },
    {
        name: "User",
        path: "/user",
        component: User
    }
];

const router = new VueRouter({
    routes
});

export default router;
