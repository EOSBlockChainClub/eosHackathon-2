/* eslint-disable no-debugger */
import Vue from "vue";
import Vuex from "vuex";
import {Network} from 'scatterjs-core';
import {JsonRpc} from 'eosjs';
import {Actions} from './actions';

Vue.use(Vuex);


const contract = "test1";

const network = Network.fromJson({
    blockchain: "eos",
    protocol: "http",
    host: "hackathon",
    port: 8888,
    chainId: "cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f"
});

const state = {
  page: null,
  eos: null,
  scatter: null,
  employee: 'employee2',
  provider: 'provider2',
  identity: null,
  account: null,
  lastChange: null,
  contract: contract,
  score: "0%",
  selectedUser: null,
  employees: null,
  employers: null,
  providers: null,
  scores: null,
  network: network,
  rpc: new JsonRpc(network.fullhost(), {fetch}),
  scoreData: [0,50,30,20,10] //testing data
};

const mutations = {
  [Actions.SET_PAGE]: (state, page) => {
      state.page = page;
  },
  [Actions.SET_EOS]: (state, eos) => {
    state.eos = eos;
  },
  [Actions.SET_SCATTER]: (state, scatter) => {
    state.scatter = scatter;
  },
  [Actions.SET_IDENTITY]: (state, identity) => {
    state.identity = identity ? identity : null;
    state.account =
      identity && identity.accounts && identity.accounts.length > 0
        ? state.scatter.identity.accounts[0].name
        : null;
  },
  [Actions.SET_EMPLOYEES]: (state, employees) => {
      state.employees = employees;
  },
  [Actions.SET_EMPLOYERS]: (state, employers) => {
      state.employers = employers;
  },
  [Actions.SET_PROVIDERS]: (state, providers) => {
      state.providers = providers;
  },
  [Actions.SET_SCORES]: (state, scores) => {
      state.scores = scores;
  },
  [Actions.SET_LAST_CHANGE]: (state, change) => {
      state.lastChange = change;
  },
  [Actions.SET_SELECTED_USER]: (state, user) => {
      state.selectedUser = user;
  }
};

const actions = {
  [Actions.SET_PAGE]: ({ commit }, page) =>
    commit(Actions.SET_PAGE, page),
  [Actions.SET_EOS]: ({ commit }, eos) =>
    commit(Actions.SET_EOS, eos),
  [Actions.SET_SCATTER]: ({ commit }, scatter) =>
    commit(Actions.SET_SCATTER, scatter),
  [Actions.SET_IDENTITY]: ({ commit }, identity) =>
    commit(Actions.SET_IDENTITY, identity),
  [Actions.SET_EMPLOYEES]: ({ commit }, employees) =>
    commit(Actions.SET_EMPLOYEES, employees),
  [Actions.SET_EMPLOYERS]: ({ commit }, employers) =>
    commit(Actions.SET_EMPLOYERS, employers),
  [Actions.SET_PROVIDERS]: ({ commit }, providers) =>
    commit(Actions.SET_PROVIDERS, providers),
  [Actions.SET_SCORES]: ({ commit }, scores) =>
    commit(Actions.SET_SCORES, scores),
  [Actions.SET_LAST_CHANGE]: ({ commit }, change) =>
    commit(Actions.SET_LAST_CHANGE, change),
  [Actions.SET_SELECTED_USER]: ({ commit }, user) =>
    commit(Actions.SET_SELCTED_USER, user)
};

const getters = {
  scoreData: state => state.scoreData,
  networkUrl: state =>
    state.network
      ? state.network.protocol +
        "://" +
        state.network.host +
        ":" +
        state.network.port
      : null
};

export const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
