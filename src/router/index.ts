import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import WeightConverter from "../components/WeightConverter.vue";
import TemperatureConverter from "../components/TemperatureConverter.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/berat", name: "WeightConverter", component: WeightConverter },
  {
    path: "/suhu",
    name: "TemperatureConverter",
    component: TemperatureConverter,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
