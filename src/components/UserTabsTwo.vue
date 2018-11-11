<template>
  <div class="tabs-container">
    <v-tabs
        v-model="active"
        color="#f5f5f5"
        slider-color="#f5f5f5"
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
    UserTabDummy
  },
  data: function() {
    return {
    items: [
      { name: 'Provider', component: 'UserTabDummy' },
      { name: 'Insurance', component: 'UserTabDummy' },
      { name: 'Data', component: 'UserTabDummy' }]
    }
  }
}
</script>

<style>
  .tabs-container {
    width: 45%;
    margin: 10px 10px 10px 10px;
  }
</style>
