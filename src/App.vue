<template>
  <v-app light>
    <v-toolbar>
      <router-link to="/user">
        <v-btn><a class="router-link">User</a></v-btn>
      </router-link>
      <router-link to="/enterprise">
        <v-btn><a class="router-link">Enterprise</a></v-btn>
      </router-link>
      <router-link to="/provider">
        <v-btn><a class="router-link">Provider</a></v-btn>
      </router-link>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>
a{
    color:black !important;
    margin: 5px 10px 5px 10px;
    text-decoration: none !important;
  }
</style>
