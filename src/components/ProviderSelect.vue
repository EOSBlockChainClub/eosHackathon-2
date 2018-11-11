<template>
    <v-select
        :items="providerChoices"
        label="Select Wellness Request"
        solo
    ></v-select>
</template>

<script>
import { mapState } from "vuex";


export default {
  data: function() {
    return{
    providerChoices: null
  }
},
  mounted() {
    this.loadProviderData();
  },
  computed: {
      ...mapState({
          myIdentify: "identity",
          myProviders: "providers"
      })
  },
  watch: {
      myProviders: function() {
          this.loadProviderData();
      }
  },
  components:{
  },
  methods: {
      async loadProviderData() {
        if (!this.$store.state.providers){
          return
        }else{
          let employer;
          let account = this.$store.state.account;
          // let providers = this.$store.state.providers;
          let employees = this.$store.state.employees;
          let employers = this.$store.state.employers;
          let providerArr = [];
          for (var i in employees){
            if (employees[i].employee == account){
              employer = employees[i].employer;
            }
          }
          for (var i in employers){
            if (employers[i].employer == employer){
              console.dir(employers[i].approved_providers);
              this.providerChoices =  employers[i].approved_providers;
            }
          }
        }
      }
  }
}
</script>

<style scoped>
  .inline{
    display:inline-block;
    max-width: 100%;
    margin-left:20px;
  }
</style>
