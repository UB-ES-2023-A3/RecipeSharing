import { createWebHistory, createRouter} from "vue-router";

import HomePage from "./pages/HomePage.vue";
import RegisterPage from "./pages/RegisterPage.vue";

const routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: '/register',
        component: RegisterPage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;