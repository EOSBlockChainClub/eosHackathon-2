<template>
<div class="main-body">
  <user-bar />
  <div class="user-main-container">
    <user-tabs-one />
    <user-tabs-two />
  </div>
</div>
</template>

<script>
    /* eslint-disable no-console,no-debugger */

import UserBar from '@/components/UserBar'
import UserTabsOne from '@/components/UserTabsOne'
import UserTabsTwo from '@/components/UserTabsTwo'
import { mapState } from "vuex";
import {Actions} from '../actions';

export default {
  mounted() {
    this.loadUserData();
  },
  computed: {
      ...mapState({
          myIdentify: "identity",
          myAccount: "account"
      })
  },
  watch: {
      myAccount: function() {
          this.loadUserData();
      }
  },
  components:{
    UserBar,
    UserTabsOne,
    UserTabsTwo
  },
  methods: {
      loadUserData() {
        if (!this.$store.state.account)
            return;

        this.$store.state.rpc.get_table_rows({
            json: true,
            code: this.$store.state.contract,
            scope: this.$store.state.contract,
            table: "healthscores",
            limit: 10000
        }).then(res => {
            this.$store.dispatch(Actions.SET_USER_SCORES, res.rows.filter(row => {
                if (row.employee == this.$store.state.account)
                    return row;
            }));
        });
      }
  }
}
</script>

<style>
  .user-main-container {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    justify-content: space-evenly;
  }

  .v-content__wrap {
     background-image: url('../assets/BluePolygonBackground.png')
  }
</style>
