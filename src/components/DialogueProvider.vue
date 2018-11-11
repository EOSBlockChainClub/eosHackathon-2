<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="750"
    >
      <v-btn
        slot="activator"
      >
        Report Requests
      </v-btn>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Data Request
        </v-card-title>

        <v-card-text>
          Select employee to process request.
        </v-card-text>
        <employee-select/>
        <v-divider></v-divider>
          <v-textarea
            name="input-10-1"
            label="HL7/LABS Data"
            value=""
            hint="Input HL7/LABS"
          ></v-textarea>
          <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            flat
            @click="submitScore()"
          >
            Process Request
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

import EmployeeSelect from './EmployeeSelect'

  export default {
    components: {
      EmployeeSelect
    },
    props: ['employeeId', 'employeeScore'],
    data () {
      return {
        dialog: false
      }
    },
    methods: {
        submitScore() {
            this.dialog = false;
            if (!this.$store.state.scatter) return;
            this.$store.state.eos.transact({
                actions: [{
                    account: this.$store.state.contract,
                    name: 'setscore',
                    authorization: [{
                        actor: this.$store.state.account,
                        permission: 'active',
                    }],
                    data: {
                        id: 2,
                        score: 80
                    }
                }]
            }, {
                blocksBehind: 3,
                expireSeconds: 30,
            });
        }
    }
  }
</script>
