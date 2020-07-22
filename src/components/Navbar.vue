<template>
  <v-card color="grey lighten-4" flat tile>
    <v-toolbar dark>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-container>
        <v-toolbar-title>
          <img @click="changePath()" :src="digifin" alt="logo" />
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>-->
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