<template>
  <div class="text-container">
    <div class="text-header">{{ header }}</div>
    <div class="text-body"> {{ text }}</div>
  </div>
</template>

<script>
export default {
  props: ['header', 'text']
}
</script>


<style>
  .text-container {
    display: flex;
    flex-direction: row;
    border: 1px solid #D3D3D3;
    border-radius: 5px;
    height: 35px;
    margin: 0 5px 0 5px;
  }
  .text-header {
    background-color: #D3D3D3;
    text-align: center;
    justify-content: center;
    padding: 7px 7px 0 7px;
  }

  .text-body {
    display: flex;
    padding: 7px 7px 0 7px;
    text-align: center;
  }
</style>
