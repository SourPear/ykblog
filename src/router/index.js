import { createRouter, createWebHistory } from "vue-router";
//import Component from '../components/content/content.vue'
import Home from '../views/Home.vue'
import Login from "../views/UnLogIn/Login.vue"
import Create from "../views/Create.vue"
import UnLogIn from "../views/UnLogIn/UnLogIn.vue"
import LoginType from "../components/Login/LoginType.vue"
import Register from "../components/Login/Register.vue"

const routes = [{
    path: "/",
    name: "unlogin",
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
    children: [
        {
            path: "/login",
            name: "logintype",
            component: LoginType,
        },
        {
            path: "/register",
            name: "register",
            component: Register,
        }
    ]
},
{
    path: "/create",
    name: "create",
    component: Create,
},
{
    path: "/unlogin",
    name: "Unlogin",
    component: UnLogIn,
    children: [{
        path: "/unlogin",
        component: Home,
    }]
},
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;