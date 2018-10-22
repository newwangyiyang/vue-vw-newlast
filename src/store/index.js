import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import home from './modules/home';
import permission from './modules/permission';
import user from './modules/user';

import getters from './getters';
const store = new Vuex.Store({
  modules: {
    home,
    permission,
    user
  },
  getters
})

//main.js中需要额外引入
export default store;