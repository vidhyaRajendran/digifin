<template>
  <div class="home">
    <v-container>
      <v-row class="mb-6">
        <v-col :md="8">
          <GetQuote />
        </v-col>
        <v-col :md="4" class="flex-grow-1">
          <div style="height : 100%" class="d-flex justify-center align-center">
            <v-img :src="HealthImage" contain></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import GetQuote from "@/components/GetQuote.vue";
import HealthImage from "../assets/img/health_insurance.png";

export default {
  name: "Home",
  components: {
    GetQuote
  },
  data() {
    return {
      HealthImage
    };
  }
};
</script>