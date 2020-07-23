import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    currentUserEmail: null
  },
  mutations: {
    saveUsers(state, users) {
      state.users = users;
    },
    userLogin(state, userId) {
      state.currentUserEmail = userId;
    },
    userLogout(state) {
      state.currentUserEmail = null;
    }
  },
  actions: {
    fetchUsers({ commit }) {
      axios.get("https://jsonplaceholder.typicode.com/users").then(
        response => {
          commit("saveUsers", response.data);
        },
        error => {
          console.log(error);
        }
      );
    },
    login({ commit }, userEmail) {
      commit("userLogin", userEmail);
    },
    logout({ commit }) {
      commit("userLogout");
    }
  },
  getters: {
    allowedEmails(state) {
      return state.users.map(user => user.email);
    },
    user(state) {
      return state.users.find(user => user.email === state.currentUserEmail);
    }
  }
});
