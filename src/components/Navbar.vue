<template>
  <v-card color="grey lighten-4" flat tile>
    <v-toolbar dark>
      <v-container>
        <v-toolbar-title>
          <img @click="changePath()" :src="digifin" alt="logo" />
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-container>
    </v-toolbar>
  </v-card>
</template>

<script>
import image from "../assets/img/digifin.png";

export default {
  name: "Navbar",
  data() {
    return {
      digifin: image
    };
  },
  methods: {
    changePath() {
      this.$router.push({path: '/'})
    }
  }
};
</script>