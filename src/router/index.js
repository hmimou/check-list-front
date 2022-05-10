import Vue from "vue";
import VueRouter from "vue-router";
import users from "../components/User/users.vue";
import departments from "../components/Department/departments.vue";
import domains from "../components/Domain/domains.vue";
import equipements from "../components/Equipement/equipements.vue";
import damage from "../components/Damage/damage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    name: "user",
    component: users,

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: "/Departement",
    name: "Departement",
    component: departments,

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: "/Domain",
    name: "domain",
    component: domains,
  },
  {
    path: "/Equipements",
    name: "equipements",
    component: equipements,
  },
  {
    path: "/Damage",
    name: "damage",
    component: damage,
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
