<template>
  <div class="text-container">
    <div class="text-header">{{ header }}</div>
    <div> {{ text }}</div>
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
    border-radius: 2px;
    height: 25px;
  }
  .text-header {
    background-color: #D3D3D3;
    margin-right: 2px;
    padding: 2px;
  }
</style>
