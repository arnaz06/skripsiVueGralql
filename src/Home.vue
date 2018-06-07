<template lang="html">
  <div>
    <app-server-status v-for="a in 5"></app-server-status>
  </div>
</template>

<script>
import ServerStatus from './components/Server/ServerDetail.vue'
export default {
  components:{
    'app-server-status': ServerStatus
  }
}
</script>

<style lang="css">
</style>
