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
import HelloWorld from './components/HelloWorld';
import login      from './components/login/login.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    login
  },
  data: () => ({
    //
  }),
};
</script>
