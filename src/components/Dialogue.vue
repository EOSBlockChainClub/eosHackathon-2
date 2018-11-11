<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-btn
        slot="activator"
      >
        Request Wellness Report
      </v-btn>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Data Request
        </v-card-title>

        <v-card-text>
          Select the provider you would like to request a wellness report from.
        </v-card-text>
        <provider-select/>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            flat
            @click="requestScoring()"
          >
            Get Results
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

import ProviderSelect from './ProviderSelect'
import {Actions} from "../actions";

export default {
    components: {
      ProviderSelect
    },
    data () {
      return {
        dialog: false
      }
    },
    methods: {
        async requestScoring() {
            this.dialog = false;
            if (!this.$store.state.scatter) return;
            await this.$store.state.eos.transact({
                actions: [{
                    account: this.$store.state.contract,
                    name: 'createreq',
                    authorization: [{
                        actor: this.$store.state.account,
                        permission: 'active',
                    }],
                    data: {
                        employee: this.$store.state.account,
                        provider: 'provider1'
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
