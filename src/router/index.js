import { createRouter, createWebHistory } from "vue-router";
//import Component from '../components/content/content.vue'
import Home from '../views/Home.vue'
import Login from "../views/Login.vue"
import Create from "../views/Create.vue"
import UnLogIn from "../views/UnLogIn.vue"

const routes = [{
    path: "/",
    name: "UnlogIn",
    component: UnLogIn,
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
},
{
    path: "/unLogIn",
    name: "UnLogIn",
    component: UnLogIn,
    children: [{
        path: "/unLogIn",
        component: Home,
    }]
}

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;