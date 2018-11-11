<template>
  <div class="tabs-container">
    <v-tabs
        v-model="active"
        dark
        grow
        color="#f5f5f5"
        slider-color="#f5f5f5"
      >
        <v-tab
          v-for="(item, key) in items"
          :key="key"
        >
          {{ item.name }}

        </v-tab>
        <v-tab-item
          v-for="(item, key) in items"
          :key="key"
        >
          <v-card flat>
            <v-card-text>
              <component v-bind:is="item.component"></component>
            </v-card-text>
          </v-card>
        </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>

import FormTab from './FormTab.vue'
import DialogueProvider from './DialogueProvider.vue'
import IntegrateTab from './IntegrateTab.vue'
import RecordsTab from './RecordsTab.vue'

export default {
  components: {
    FormTab,
    DialogueProvider,
    IntegrateTab,
    RecordsTab
  },
  data: function() {
    return {
      items: [
        { name: 'HL7/Labs', component: 'DialogueProvider' },
        { name: 'Form', component: 'FormTab' },
        { name: 'CCD/Records', component: 'RecordsTab' },
        { name: 'Integrate', component: 'IntegrateTab' },
      ]
    }
  }
}
</script>

<style>
  .tabs-container {
    width: 100%;
    margin: 10px 10px 10px 10px;
  }
</style>
