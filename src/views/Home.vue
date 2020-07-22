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
    <!-- <Health /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import GetQuote from "@/components/GetQuote.vue";
import HealthImage from "../assets/img/health_insurance.png";
// import Health from "@/components/Health.vue";

export default {
  name: "Home",
  components: {
    GetQuote
    // Health
  },
  data() {
    return {
      HealthImage
    };
  }
};
</script>