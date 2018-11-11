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
            @click="dialog = false"
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

  export default {
    components: {
      ProviderSelect
    },
    data () {
      return {
        dialog: false
      }
    }
  }
</script>
