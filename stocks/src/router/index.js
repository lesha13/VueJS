import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "@/pages/HomePage"
import MyAccountPage from "@/pages/MyAccountPage"
import AboutPage from "@/pages/AboutPage"

const routes = [
    {
        path: "/",
        component: HomePage,
        name: "HomePage"
    },
    {
        path: "/account",
        component: MyAccountPage,
        name: "MyAccountPage"
    },
    {
        path: "/about",
        component: AboutPage,
        name: "AboutPage"
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;