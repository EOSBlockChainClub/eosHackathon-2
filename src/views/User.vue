<template>
<div class="main-body">
  <user-bar />
  <div class="user-main-container">
    <user-tabs-one />
    <user-tabs-two />
  </div>
</div>
</template>

<script>
import UserBar from '@/components/UserBar'
import UserTabsOne from '@/components/UserTabsOne'
import UserTabsTwo from '@/components/UserTabsTwo'

export default {
  components:{
    UserBar,
    UserTabsOne,
    UserTabsTwo
  }
}
</script>

<style>
  .user-main-container {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    justify-content: space-evenly;
  }

  .v-content__wrap {
     background-image: url('../assets/BluePolygonBackground.png')
  }
</style>
