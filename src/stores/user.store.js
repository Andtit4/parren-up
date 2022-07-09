import axios from "axios";
import Vuex from "vuex";
import Vue from "vue";

Vuex.use(Vuex);

const state = Vuex.Store({
  email: null,
  password: null
});
