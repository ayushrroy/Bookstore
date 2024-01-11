import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoryView from "@/views/CategoryView.vue";
import CartView from "@/views/CartView.vue";
import CheckoutView from "@/views/CheckoutView.vue";
import ConfirmationView from "@/views/ConfirmationView.vue";
import { useBookStore } from "@/stores/book";
import { useCategoryStore } from "@/stores/category";
import NotFound from "@/views/NotFound.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      alias: ["/home","/index.html"],
      name: "home",
      component: HomeView,
    },
    {
      path: "/category",
      redirect: "/category/Fiction",
      component: CategoryView
    },
    {
      path: "/category/:name?",
      name: "category-view",
      component: CategoryView,
      beforeEnter: async (to, from, next) => {
        const bookStore = useBookStore();
        const categoryName =
            to.params.name || bookStore.currentCategory || "Fiction";
        if (to.params.name) next();
        else
          next({
            name: "category-view",
            params: { name: categoryName },
            replace: true,
          });
        },
    },
    {
      path: "/cart",
      name: "cart-view",
      component: CartView,
    },
    {
      path: "/checkout",
      name: "checkout-view",
      component: CheckoutView,
    },
    {
      path: "/confirmation",
      name: "confirmation-view",
      component: ConfirmationView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
