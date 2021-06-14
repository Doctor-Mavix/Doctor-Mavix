import Vue from 'vue'
import Vuex from 'vuex'

import Auth from "./modules/Auth"

import Admin from "./modules/Admin"

import Contact from "./modules/Contact"

import Visite from "./modules/Visite"

Vue.use(Vuex)

export default new Vuex.Store({
  modules : {
    Auth,
    Admin,
    Contact,
    Visite
  }
})