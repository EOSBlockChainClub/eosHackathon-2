<template>
<div>
  <v-data-table
      :headers="headers"
      :items="scoreTable"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props" >
        <td class="text-xs-left">{{ props.item.id }}</td>
        <td class="text-xs-left">{{ props.item.employee }}</td>
        <td class="text-xs-left">{{ props.item.status === 0 ? 'Requested' : 'Submitted' }}</td>
        <td class="text-xs-left">{{ props.item.score }}</td>
        <td
          class="text-xs-right"
          v-if="props.item.status === 0"
        >
          <DialogueProvider
            :requestId="props.item.id"
            :employeeScore="props.item.score"
            :rawScores="rawScores"
            :employee="props.item.employee"
            />
        </td>
      </template>
    </v-data-table>
</div>
</template>

<script>
import { mapState } from "vuex";
import DialogueProvider from './DialogueProvider.vue'
import {Actions} from "../actions";

export default {
  components: {
    DialogueProvider,
  },
  data: function() {
    return {
      scoreTable: [],
      previousScore: 50,
      headers: [
        { text: 'Id', value: 'id' },
        { text: 'Employee', value: 'employee' },
        { text: 'Status', value: 'status' },
        { text: 'Score', value: 'score' },
      ]
    }
  },
    mounted() {
      this.getUserData();
    },
    computed: {
      ...mapState({
          myScores: "scores",
          myAccount: "account"
      })
  },
    watch: {
      myScores: function() {
        this.getUserData();
      },
      myAccount: function() {
        this.getUserData();
      }
  },
  methods: {
    setUser(user) {
        debugger;
        this.$store.dispatch(Actions.SET_SELECTED_USER, user);
    },
    getUserData() {
      this.rawScores = this.$store.state.scores
      if (!this.$store.state.scores || !this.$store.state.account) return 0;
      const employeeScores = this.$store.state.scores.filter(item => item.provider == this.$store.state.account)
      const scores = employeeScores.sort(function compare(a,b) {
        if (a.timestamp < b.timestamp)
          return -1;
        if (a.timestamp > b.timestamp)
          return 1;
        return 0;
      })
        this.scoreTable = scores
    },
  },
}
</script>

<style>

</style>
