import { createWebHistory, createRouter} from "vue-router";

import HomePage from "./pages/HomePage.vue";
import SignIn from "./pages/SignIn.vue";

const routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: '/signin',
        component: SignIn
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;