<template>
  <v-app>
    <v-main>
      <Navbar />
      <div class="digify-wrap">
        <router-view />
      </div>
      <!-- <HelloWorld/> -->
      <!-- <Health /> -->
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
// import Health from "./components/Health.vue";
import Navbar from "./components/Navbar";

export default {
  name: "App",

  components: {
    // HelloWorld,
    // Health,
    Navbar
  },

  data: () => ({
    //
  })
};
</script>
