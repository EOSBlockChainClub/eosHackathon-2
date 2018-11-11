<template>
  <div class="progress-bar">
    <div
      class="diamond-narrow"
      v-bind:style="{ marginLeft: (score * 4) + 'px' }"
    />
  <div class="ledger">
    <p>0</p>
    <p>25</p>
    <p>50</p>
    <p>75</p>
    <p>100</p>
  </div>
  </div>
</template>

<script>
export default {
  props: ['score']
}
</script>

<style>
  .progress-bar {
    width: 400px;
    height: 25px;

    margin-left: 150px;
    background-image: linear-gradient( to right, red, yellow, green);
  }

  .diamond-narrow {
    width: 0;
    height: 0;
    border: 2px solid transparent;
    border-bottom: 25px solid black;
    position: relative;
    top: -2px;
    }

    .ledger {
      display: flex;
      justify-content: space-between
    }
</style>
