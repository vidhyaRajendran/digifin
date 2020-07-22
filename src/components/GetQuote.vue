<template>
  <div class="digify-wrap">
    <div>
      <section class="formSection">
        <h2 class="text-center h2 mb-5">Compare Best Insurance Policies & Save Money</h2>
        <v-card style="height: 400px">
          <v-tabs fixed-tabs icons-and-text class v-model="currentTabPath">
            <v-tab
              class="text-capitalize"
              v-for="(item, i) in tabs"
              :disabled="item.name !== 'Health Insurance'"
              :key="i"
            >
              <div class="d-flex justify-content-center align-items-center flex-column py-3">
                <div>
                  <img :src="item.icon" width="20px" height="20px" alt="icon" />
                </div>
                <div>
                  <span class="mt-3 text-wrap">{{ item.name }}</span>
                </div>
              </div>
            </v-tab>
            <v-divider></v-divider>
            <v-tabs-items v-model="currentTabPath">
              <v-tab-item
                v-for="tab in tabs"
                :disabled="tab.name !== 'Health Insurance'"
                :key="tab.name"
              >
                <div>
                  <h3
                    :disabled="tab.name !== 'Health Insurance'"
                    style="text-align:center; margin-top: 30px; margin-left:30px; margin-right:30px"
                  >Get Tax Benefits on Health Insurance Plan up to Rs 55K under Section 80 D</h3>
                  <v-alert v-if="showToast" type="error">Please Fill the Form Properly</v-alert>

                  <template>
                    <v-container fluid grid-list-md>
                      <v-form ref="form" v-on:submit.prevent="getQuotes">
                        <v-row>
                          <v-col class="d-flex" cols="12" sm="6">
                            <v-select
                              :items="cities"
                              label="Select City"
                              dense
                              required
                              outlined
                              v-model="city"
                            ></v-select>
                          </v-col>
                          <v-col class="d-flex" cols="12" sm="6">
                            <v-select
                              v-model="age"
                              :items="ages"
                              label="Select Age"
                              dense
                              required
                              outlined
                            ></v-select>
                          </v-col>
                          <v-col class="d-flex" cols="12" sm="6">
                            <v-text-field v-model="name" label="Name" single-line required outlined></v-text-field>
                          </v-col>
                          <v-col class="d-flex" cols="12" sm="6">
                            <v-text-field
                              v-model="mobile"
                              label="Mobile"
                              single-line
                              required
                              outlined
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <div class="d-flex justify-center align-center">
                          <div>
                            <v-btn
                              class="text-capitalize btnStyle"
                              type="submit"
                              color="primary"
                            >Get Quotes</v-btn>
                          </div>
                        </div>
                      </v-form>
                    </v-container>
                  </template>
                </div>
              </v-tab-item>
            </v-tabs-items>
          </v-tabs>
        </v-card>
      </section>
    </div>
  </div>
</template>

<script>
import HealthImage from "../assets/img/health_insurance.png";

export default {
  name: "GetQuote",
  data() {
    return {
      healthImage: HealthImage,
      currentTabPath: "Health Insurance",
      showToast: false,
      cities: [
        "Agra",
        "Ahmed",
        "Alwar",
        "Ambala",
        "Amravati",
        "Amristar",
        "Anand",
        "Ajmer",
        "Bhopal",
        "Bakaro",
        "Baramati",
        "Chennai",
        "Coimbatore",
        "Churu",
        "Dhanbad",
        "Durg",
        "Dausa"
      ],
      name: "",
      age: "",
      city: "",
      ages: [
        "18 Years",
        "19 Years",
        "20 Years",
        "21 Years",
        "22 Years",
        "23 Years",
        "24 Years",
        "25 Years"
      ],
      mobile: "",
      tabs: [
        {
          icon:
            "https://www.comparepolicy.com/cp/new-design/images/health-icon.jpg",
          name: "Health Insurance"
        },
        {
          icon:
            "https://www.comparepolicy.com/cp/new-design/images/term-icon.jpg",
          name: "Term Insurance"
        },
        {
          icon:
            "https://www.comparepolicy.com/cp/new-design/images/investment-icon.jpg",
          name: "Invesment Plan"
        },
        {
          icon:
            "https://www.comparepolicy.com/cp/new-design/images/cancer-icon.jpg",
          name: "Cancer Plan"
        },
        {
          icon:
            "https://www.comparepolicy.com/cp/new-design/images/child-icon.jpg",
          name: "Child Plan"
        },
        {
          icon:
            "https://www.comparepolicy.com/cp/new-design/images/retirement-icon.jpg",
          name: "Retirement Plan"
        },
        {
          icon:
            "https://www.comparepolicy.com/cp/new-design/images/car-icon.jpg",
          name: "Car Insurance"
        },
        {
          icon:
            "https://www.comparepolicy.com/cp/new-design/images/bike-icon.jpg",
          name: "Bike Insurance"
        }
      ]
    };
  },
  methods: {
    getQuotes() {
      if (!(this.city && this.age && this.name && this.mobile)) {
        this.showToast = true;
        return;
      }
      this.$router.push({ path: "/search/health" });
    }
  }
};
</script>

<style scoped lang="scss">
.v-tab {
  min-width: 95px;
  max-width: 95px;
}
</style>
