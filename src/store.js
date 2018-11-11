import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const Actions = {
  SET_SCATTER: "SetScatter",
  SET_IDENTITY: "SetIdentity"
};

const state = {
  scatter: null,
  identity: null,
  account: null,
  contract: "",
  score: "0%",
  network: {
    blockchain: "",
    protocol: "",
    host: "",
    port: 443,
    chainId: ""
  },
  scoreData: [0,50,30,20,10] //testing data
};

const mutations = {
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
