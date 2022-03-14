import { createRouter, createWebHistory } from "vue-router";
//import Component from '../components/content/content.vue'
import Home from '../views/Home.vue'
import Main from "../views/Main.vue"
import Login from "../views/Login.vue"
import Create from "../views/Create.vue"

const routes = [{
        path: "/",
        name: "Main",
        component: Main,
        children: [{
            path: "/",
            component: Home,
        }]
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/create",
        name: "Create",
        component: Create,
    }

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;