<template>
  <v-app>
    <v-content>
      <!-- <HelloWorld/> -->
      <!-- <login/> -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
<style>
  .btn-general a{
    text-decoration: none;
  }
</style>