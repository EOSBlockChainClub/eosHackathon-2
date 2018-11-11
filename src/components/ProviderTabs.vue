<template>
  <div class="tabs-container">
    <v-tabs
        v-model="active"
        color="blue"
        dark
        slider-color="black"
        grow
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

import UserTabDummy from './UserTabDummy'

export default {
  components: {
    // eslint-disable-next-line
    UserTabDummy,
  },
  data: function() {
    return {
      items: [
        { name: 'Form', component: 'UserTabDummy' },
        { name: 'HL7/Labs', component: 'UserTabDummy' },
        { name: 'CCD/Records', component: 'UserTabDummy' },
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
