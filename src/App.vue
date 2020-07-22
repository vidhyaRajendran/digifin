<template>
  <v-app>
    <v-main>
      <Navbar />
      <!-- <HelloWorld/> -->
      <Health />
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Health from "./components/Health.vue";
import Navbar from "./components/Navbar";

export default {
  name: "App",

  components: {
    // HelloWorld,
    Health,
    Navbar
  },

  data: () => ({
    //
  })
};
</script>
