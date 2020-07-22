<template>
  <v-app>
    <v-main>
      <Navbar />
      <div class="digify-wrap">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
.toasted.bubble {
  line-height: 4em;
}
</style>
