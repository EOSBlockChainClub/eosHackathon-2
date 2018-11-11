<template>
    <v-select
        :items="items"
        label="Select Wellness Request"
        solo
    ></v-select>
</template>

<script>
  export default {
    data: () => ({
      items: ['Provider 1', 'Provider 2']
    })
  }
</script>

<style scoped>
  .inline{
    display:inline-block;
    max-width: 100%%;
    margin-left:20px;
  }
</style>
