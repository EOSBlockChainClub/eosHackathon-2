<template>
<div>
  <user-bar />
  <div class="user-main-container">
    <user-tabs-one />
    <user-tabs-two />
  </div>
</div>
</template>

<script>
import UserBar from './UserBar'
import UserTabsOne from './UserTabsOne'
import UserTabsTwo from './UserTabsTwo'

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
  }
</style>
