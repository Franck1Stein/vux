import Vue from 'vue'
import Vuex from 'vuex'
import register from './modules/register'

Vue.use(Vuex)

export const store = new Vuex.Store({
   modules: {
       register
   }
});