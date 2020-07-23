import Vue from "vue";
import VueRouter from "vue-router";
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
        path: "/user",
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

export default router;
