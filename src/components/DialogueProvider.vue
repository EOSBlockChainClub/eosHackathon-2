<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
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

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            flat
            @click="dialog = false"
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
    data () {
      return {
        dialog: false
      }
    }
  }
</script>
