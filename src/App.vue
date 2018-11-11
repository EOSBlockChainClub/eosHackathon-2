<template>
  <v-app light>
    <v-toolbar>
      <router-link to="/user">
        <a class="router-link">User</a>
      </router-link>
      <router-link to="/enterprise">
        <a class="router-link">Enterprise</a>
      </router-link>
      <router-link to="/provider">
        <a class="router-link">Provider</a>
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
  .router-link {
    margin: 5px 10px 5px 10px;
  }
</style>
