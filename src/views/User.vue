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
      async loadUserData() {
        if (!this.$store.employees)
            return;

          let userScores = this.$store.scores.filter(row => {
              if (row.employee == this.$store.state.account)
                  return row;
          });
          console.log(userScores);
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
