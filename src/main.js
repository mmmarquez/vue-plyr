// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

import Vuex from 'vuex';
Vue.use(Vuex);

import { buildNav, cleanNav } from './utils/Utils.js';

const store = new Vuex.Store({
  state: {
    navMenu: [],
    workData: [],
    workReady: false,
    navReady: false,
    viewState: '',
    dropState: ''
  },
  actions: {
    VIEW_STATE({ commit }, value) {
      commit('SET_VIEW', value);
    },
    DROP_STATE({ commit }, value) {
      commit('SET_DROP', value);
    },
    LOAD_WORKS({ commit }) {
      return new Promise((resolve, reject) => {
        Vue.axios
          .get('/wp-json/wp/v2/works?per_page=100')
          .then(response => {
            return response.data;
          })
          .then(data => {
            commit('SET_WORKS', { works: data });
          })
          .catch(error => {
            console.log(error);
          });
        resolve();
      });
    },
    LOAD_MENU({ commit }) {
      return new Promise((resolve, reject) => {
        Vue.axios
          .get('/wp-json/wp/v2/mediums')
          .then(response => {
            return response.data;
          })
          .then(data => {
            return buildNav(data);
          })
          .then(navData => {
            commit('SET_NAV', { nav: cleanNav(navData) });
          })
          .catch(error => {
            console.log(error);
          });
        resolve();
      });
    }
  },
  mutations: {
    SET_VIEW: (state, value) => {
      state.viewState = value;
    },
    SET_DROP: (state, value) => {
      state.dropState = value;
    },
    SET_NAV: (state, { nav }) => {
      state.navMenu = nav;
      state.navReady = true;
    },
    SET_WORKS: (state, { works }) => {
      state.workData = works;
      state.workReady = true;
    }
  }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
});
