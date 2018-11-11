<template>
<v-flex xs12 sm6 d-flex>
    <v-select
        :items="items"
        label="Select Wellness Request"
        solo
    ></v-select>
</v-flex>
</template>

<script>
  export default {
    data: () => ({
      items: ['Employee 1', 'Employee 2']
    })
  }
</script>

<style scoped>
  .inline{
    display:inline-block;
    margin-left:20px;
  }
</style>
