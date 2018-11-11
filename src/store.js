import Vue from "vue";
import Vuex from "vuex";
import {Network} from 'scatterjs-core';
import {JsonRpc} from 'eosjs';
import {Actions} from './actions';

Vue.use(Vuex);



const network = Network.fromJson({
    blockchain: "eos",
    protocol: "http",
    host: "hackathon",
    port: 8888,
    chainId: "cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f"
});

const state = {
  eos: null,
  scatter: null,
  identity: null,
  account: null,
  contract: "",
  score: "0%",
  network: network,
  rpc: new JsonRpc(network.fullhost()),
  scoreData: [0,50,30,20,10] //testing data
};

const mutations = {
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
  }
};

const actions = {
  [Actions.SET_EOS]: ({ commit }, eos) =>
    commit(Actions.SET_EOS, eos),
  [Actions.SET_SCATTER]: ({ commit }, scatter) =>
    commit(Actions.SET_SCATTER, scatter),
  [Actions.SET_IDENTITY]: ({ commit }, identity) =>
    commit(Actions.SET_IDENTITY, identity)
};

const getters = {
  account: state => state.account,
  supply: state => state.supply,
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
