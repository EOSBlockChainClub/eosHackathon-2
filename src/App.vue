<template>
  <v-app light>
    <v-toolbar>
      <div class="logo"/>
      <div class="navbar-app">
        <router-link to="/user">
            <v-btn><a class="router-link">User</a></v-btn>
        </router-link>
        <router-link to="/enterprise">
            <v-btn><a class="router-link">Enterprise</a></v-btn>
        </router-link>
        <router-link to="/provider">
            <v-btn><a class="router-link">Provider</a></v-btn>
        </router-link>
      </div>
      <v-btn @click="login" v-if="scatter && !account">Login with Scatter</v-btn>
      <section class="logged-in-with" v-if="scatter && account">
        <v-btn>Logged in as: {{account.name}}</v-btn>
        <v-btn @click="logout">Logout</v-btn>
      </section>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
    /* eslint-disable no-console,no-debugger */

    import ScatterJS from 'scatterjs-core';
    import ScatterEOS from 'scatterjs-plugin-eosjs2';
    import {Api} from 'eosjs';
    import {Actions} from './actions';
    import { mapState } from "vuex";
    ScatterJS.plugins( new ScatterEOS() );

    export default {
        data() {
            return {
                scatter: null
            }
        },
        mounted() {
            this.setEosInstance();
            ScatterJS.scatter.connect('wellthy').then(connected => {
                if(!connected){
                    console.error('Could not connect to Scatter.');
                    return;
                }
                this.scatter = ScatterJS.scatter;
                this.$store.dispatch(Actions.SET_SCATTER, ScatterJS.scatter);
                this.loadIdentity();
            });
            this.loadData();
        },
        watch: {
          myLastChange: function() {
              this.reload();
          },
          ['account'](){
              this.setEosInstance();
          }
        },
        computed:{
            ...mapState({
                myLastChange: "lastChange"
            }),
            account(){
                if(!this.scatter || !this.scatter.identity) return null;
                return this.scatter.identity.accounts[0];
            }
        },

        methods: {
            async login() {
                await this.scatter.getIdentity({accounts: [this.$store.state.network]});
                this.reload();
            },
            async logout() {
                await this.scatter.forgetIdentity();
                this.reload();
            },
            loadIdentity() {
                this.$store.dispatch(Actions.SET_IDENTITY, this.scatter.identity);
            },
            setEosInstance(){
                if(this.account){
                    this.$store.dispatch(Actions.SET_EOS, this.scatter.eos(this.$store.state.network, Api, {rpc: this.$store.state.rpc}));
                } else {
                    this.$store.dispatch(Actions.SET_EOS, new Api({ rpc: this.$store.state.rpc }));
                }
            },
            reload() {
                this.loadData();
                this.loadIdentity();
            },
            async loadData(){
                await this.loadEmployees();
                await this.loadEmployers();
                await this.loadProviders();
                await this.loadScores();
            },
            async loadEmployees() {
                let res = await this.$store.state.rpc.get_table_rows({
                    json: true,
                    code: this.$store.state.contract,
                    scope: this.$store.state.contract,
                    table: "employees",
                    limit: 10000
                });
                this.$store.dispatch(Actions.SET_EMPLOYEES, res.rows);
            },
            async loadEmployers() {
                let res = await this.$store.state.rpc.get_table_rows({
                    json: true,
                    code: this.$store.state.contract,
                    scope: this.$store.state.contract,
                    table: "employers",
                    limit: 10000
                });
                this.$store.dispatch(Actions.SET_EMPLOYERS, res.rows);
            },
            async loadProviders() {
                let res = await this.$store.state.rpc.get_table_rows({
                    json: true,
                    code: this.$store.state.contract,
                    scope: this.$store.state.contract,
                    table: "providers",
                    limit: 10000
                });
                this.$store.dispatch(Actions.SET_PROVIDERS, res.rows);
            },
            async loadScores() {
                let res = await this.$store.state.rpc.get_table_rows({
                    json: true,
                    code: this.$store.state.contract,
                    scope: this.$store.state.contract,
                    table: "healthscores",
                    limit: 10000
                });
                this.$store.dispatch(Actions.SET_SCORES, res.rows);
            }
        }
    }
</script>

<style>
a{
    color:black !important;
    margin: 5px 10px 5px 10px;
    text-decoration: none !important;
  }

  .logo {
      background-image: url('./assets/log-t.png');
      background-size:     cover;                      /* <------ */
      background-repeat:   no-repeat;
      background-position: center center;
      width: 125px;
      height: 50px;
  }

  .navbar-app {
      margin-left: auto;
  }
</style>
