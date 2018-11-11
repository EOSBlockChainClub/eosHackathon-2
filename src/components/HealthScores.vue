<template>
<div>
  <v-data-table
      :headers="headers"
      :items="scoreTable"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.id }}</td>
        <td class="text-xs-left">{{ props.item.employee }}</td>
        <td class="text-xs-left">{{ props.item.status === 0 ? 'Requested' : 'Submitted' }}</td>
        <td class="text-xs-left">{{ props.item.score }}</td>
        <td
          class="text-xs-right"
          v-if="props.item.status === 1"
        >
          <DialogueProvider employeeId="props.item.id" employeeScore="props.item.score" />
        </td>
      </template>
    </v-data-table>
</div>
</template>

<script>
import { mapState } from "vuex";
import DialogueProvider from './DialogueProvider.vue'
export default {
  components: {
    DialogueProvider,
  },
  data: function() {
    return {
      scoreTable: [],
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
    getUserData() {
      if (!this.$store.state.scores || !this.$store.state.account) return 0;
      const employeeScores = this.$store.state.scores.filter(item => item.provider == this.$store.state.account)
      const scores = employeeScores.sort(function compare(a,b) {
        if (a.timestamp < b.timestamp)
          return -1;
        if (a.timestamp > b.timestamp)
          return 1;
        return 0;
      })
      console.log(scores)
        this.scoreTable = scores
    }
  },
}
</script>

<style>

</style>
