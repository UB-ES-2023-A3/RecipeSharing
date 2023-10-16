import { createWebHistory, createRouter} from "vue-router";

import HomePage from "./pages/HomePage.vue";
import RegisterPage from "./pages/RegisterPage.vue";
import AddRecipePage from "./pages/AddRecipePage.vue";

const routes = [
  {
    path: "",
    component: HomePage,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
  {
    path: "/addRecipe",
    component: AddRecipePage,
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;