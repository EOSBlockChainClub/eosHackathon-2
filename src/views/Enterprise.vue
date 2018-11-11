<template>
  <v-layout class="full-height card-font">
      <v-card class="half-width">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Employee</h3>
            <div>
              <v-text-field label="John Doe" single-line></v-text-field>
              <v-text-field label="#12345" single-line></v-text-field>
            </div>
            <div>
              <h3 class="headline mb-0">Score: 34</h3>

              <!-- <span>34</span> -->
            </div>
            <div>
              <h3 class="headline mb-0">Cost Savings Score: 34</h3>
              <!-- <span>34</span>% -->
            </div>
            <div>
              <h3 class="headline mb-0">Retention Score: 34</h3>
              <!-- <span>34</span>% -->
            </div>
          </div>
        </v-card-title>
      </v-card>
      <v-card class="third-width">
        <!-- <v-card-title primary-title>
          <div>
            <div><v-btn>Company</v-btn><v-btn>History</v-btn><v-btn>Age</v-btn></div>
          </div>
        </v-card-title> -->
          <bar-chart></bar-chart>
      </v-card>

  </v-layout>
</template>


<script>
import BarChart from "@/components/BarChart.vue";
import {Actions} from "../actions";
import { mapState } from "vuex";

export default {
  components: {
    BarChart
  },
  data: function() {
    return {
      name: "John J Doe",
      employer: "Super Cool Blockchain Inc.",
      insurance: "Decentralized Healthcare.",
      dateOfBirth: "5/8/1983",
      gender: 'Male',
      score: 0,
      improvement: 0,
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
      const employeeScores = this.$store.state.scores.filter(item => {
        return (
          item.employee == this.$store.state.account &&
          item.status ===1
        )
      })
      const scores = employeeScores.sort(function compare(a,b) {
        if (a.timestamp < b.timestamp)
          return -1;
        if (a.timestamp > b.timestamp)
          return 1;
        return 0;
      })
        if (scores.length === 0) return
        this.score = scores[0].score || 0

      if (scores.length > 1) {
        this.improvement = scores[0].score - scores[1].score || 0
      }
    }
  },
}
</script>

<style scoped>
  .third-width{
    width:25%;
    margin:auto;
  }
  .half-width{
    width:40%;
    margin:auto;
  }
  .full-height{
    height:100%;
    width:100%;
  }
  .card-font{
    font-size: 26px;
  }

</style>
