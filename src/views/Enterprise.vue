<template>
  <v-layout>
    <v-flex class='one-third'>
      <v-card >
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Employee</h3>
            <div>
              <input class='small-field'  placeholder="Name">
              <input class='small-field'  placeholder="#">
            </div>
            <div>
              <h3 class="headline mb-0">Score</h3>
            </div>
            <div>
              <span class='small-field'>34</span>% Improvement
              <span class='small-field'>34</span>% HX
            </div>
            <div>
              <h3 class="headline mb-0">Cost Savings Score</h3>
              <span class='small-field'>34</span>% HX
            </div>
            <div>
              <h3 class="headline mb-0">Retention Score</h3>
              <span class='small-field'>34</span>% HX
            </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex class ='two-third'>
      <v-card >
        <v-card-title primary-title>
          <div>
            <div><v-btn>Company</v-btn><v-btn>History</v-btn><v-btn>Age</v-btn></div>
          </div>
        </v-card-title>
          <bar-chart :height="height"></bar-chart>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
import BarChart from "@/components/BarChart.vue";
export default {
  name: "enterprise",
  components: {
    BarChart
  },
  data() {
    return {
      height: window.innerHeight - 374 //header
    };
  },
}
</script>

<style scoped>
  .one-third {
    width: 30%;
    height:100%;
  }
  .two-third {
    width: 60%;
    height:100%;
  }
  .small-field {
    font-size: 36px;
    width:40%;
  }

</style>
