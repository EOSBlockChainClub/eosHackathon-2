<template>
  <v-layout calss="full-height">
    <v-flex class='one-third'>
      <v-card >
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Employee</h3>
            <div>
              <v-text-field label="Name" single-line></v-text-field>
              <v-text-field label="#" single-line></v-text-field>
            </div>
            <div>
              <h3 class="headline mb-0">Score</h3>
            </div>
            <div>
              <span>34</span>% Improvement
            </div>
            <div>
              <h3 class="headline mb-0">Cost Savings Score</h3>
              <span>34</span>%
            </div>
            <div>
              <h3 class="headline mb-0">Retention Score</h3>
              <span>34</span>%
            </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex class ='two-third'>
      <v-card >
        <!-- <v-card-title primary-title>
          <div>
            <div><v-btn>Company</v-btn><v-btn>History</v-btn><v-btn>Age</v-btn></div>
          </div>
        </v-card-title> -->
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
    font-size: 32px;
  }
  .two-third {
    width: 50%;
    height:90%;
  }
  .full-height{
    height:100%;
  }

</style>
