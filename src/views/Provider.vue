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
import {Actions} from "../actions";

export default {
  components:{
    UserBar,
    ProviderTabs
  },
  mounted() {
      this.$store.dispatch(Actions.SET_PAGE, 'provider');
  },
}
</script>

<style>
  .user-main-container {
    display: flex;
    flex-direction: row;
  }
</style>
