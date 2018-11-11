<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="750"
    >
      <v-btn
        slot="activator"
      >
        Submit Score
      </v-btn>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Data Request
        </v-card-title>
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

import {Actions} from "../actions";

export default {
    props: ['requestId', 'employeeScore'],
    data () {
      return {
        dialog: false
      }
    },
    methods: {
        async submitScore() {
            this.dialog = false;
            if (!this.$store.state.scatter) return;
            await this.$store.state.eos.transact({
                actions: [{
                    account: this.$store.state.contract,
                    name: 'setscore',
                    authorization: [{
                        actor: this.$store.state.account,
                        permission: 'active',
                    }],
                    data: {
                        id: this.props.requestId,
                        score: this.props.employeeScore
                    }
                }]
            }, {
                blocksBehind: 3,
                expireSeconds: 30,
            });
            this.$store.dispatch(Actions.SET_LAST_CHANGE, Date.now());
        }
    }
  }
</script>
