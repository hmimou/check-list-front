import Vue from "vue";
import Vuex from "vuex";
import usersModule from "./models/userModule";
import departementModule from "./models/departementModule";
import domainModule from "./models/domainModule";
import equipementModule from "./models/equipementModule";
import damageModule from "./models/damageModule";
Vue.use(Vuex);

let store = null;
export default function () {
  store = new Vuex.Store({
    modules: {
      usersModule,
      departementModule,
      domainModule,
      equipementModule,
      damageModule,
    },
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    plugins: [],
  });
  return store;
}
export { store };
