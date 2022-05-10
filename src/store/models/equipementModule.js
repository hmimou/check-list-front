import CustomizedAxios from "../../plugins/axios";

const equipementModule = {
  state: {
    equipements: [],
  },
  mutations: {
    SET_EQUIPEMENTS(state, equipements) {
      state.equipements = equipements;
    },
    ADD_EQUIPEMENTS(state, equipements) {
      state.equipements.push(equipements);
    },
    DELETE_EQUIPEMENTS(state, id) {
      state.equipements = state.equipements.filter((c) => c.id != id);
    },
    EDIT_EQUIPEMENTS(state, equipements) {
      state.equipements = state.equipements.map((c) => {
        if (c.id == equipements.id) return equipements;
        return c;
      });
    },
  },
  actions: {
    setEquipementsAction({ commit }) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.get("equipements/")
          .then((response) => {
            commit("SET_EQUIPEMENTS", response.data);
            console.log("set equipement 1");
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    addEquipementsAction({ commit }, departements) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("equipements/add", {
          id: departements.id,
          name: departements.name,
        })
          .then((response) => {
            console.log("res add ", response);
            commit("ADD_EQUIPEMENTS", response.data);
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    deleteEquipementAction({ commit }, id) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("equipements/delete/" + id)
          .then((response) => {
            commit("DELETE_EQUIPEMENTS", id);
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    editDepartementAction({ commit }, equipements) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.put("/equipements/update", {
          id: equipements.id,
          name: equipements.name,
        })
          .then((response) => {
            commit("EDIT_EQUIPEMENTS", response.data);
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  getters: {
    getEquipements: (state) => {
      return state.equipements;
    },
  },
};
export default equipementModule;
