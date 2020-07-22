<template>
  <v-app>
    <v-main>
      <!-- <HelloWorld/> -->
      <Health />
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Health from "./components/Health.vue";

export default {
  name: "App",

  components: {
    // HelloWorld,
    Health
  },

  data: () => ({
    //
  })
};
</script>
