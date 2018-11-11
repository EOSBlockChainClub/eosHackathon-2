<template>
<div>
  <user-bar />
  <div class="user-main-container">
    <provider-tabs />
  </div>
</div>
</template>

<script>
import UserBar from '@/components/UserBar'
import ProviderTabs from '@/components/ProviderTabs'

export default {
  components:{
    UserBar,
    ProviderTabs
  }
}
</script>

<style>
  .user-main-container {
    display: flex;
    flex-direction: row;
  }
</style>
