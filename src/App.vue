<template>
  <!-- header -->
  <Header/>

  <!-- content -->
  <router-view></router-view>
  <!-- //content -->

  <!-- footer -->  
</template>

<script>
import Header from '@/inc/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
}
</script>

<style>
</style>
