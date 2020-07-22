<template>
  <div class="digify-wrap">
    <div>
      <section class="formSection">
        <h2 style="text-align:center">Compare Best Insurance Policies & Save Money</h2>
        <v-card style="border-radius: 10px; height: 450px">
          <v-tabs fixed-tabs icons-and-text class v-model="currentTabPath">
            <v-tab class="text-capitalize" v-for="(item, i) in tabs" :key="i">
              <div class="d-flex justify-content-center align-items-center flex-column py-3">
                <div>
                  <img :src="item.icon" width="20px" height="20px" alt="icon" />
                </div>
                <div>
                  <span class="mt-3 text-wrap">{{ item.name }}</span>
                </div>
              </div>
            </v-tab>
            <v-tabs-items v-model="currentTabPath">
              <v-tab-item lazy v-for="tab in tabs" :key="tab.name">
                <div>
                  <h3
                    v-if="tab.name === 'Health Insurance'"
                    style="text-align:center; margin-top: 30px; margin-left:30px; margin-right:30px"
                  >Get Tax Benefits on Health Insurance Plan up to Rs 55K under Section 80 D</h3>
                  <template v-if="tab.name === 'Health Insurance'">
                    <v-container fluid grid-list-md>
                      <v-form ref="form" v-model="valid" lazy-validation>
                        <v-row>
                          <v-col class="d-flex" cols="12" sm="6">
                            <v-select :items="city" label="Select City" dense required outlined></v-select>
                          </v-col>

                          <v-col class="d-flex" cols="12" sm="6">
                            <v-select :items="age" label="Select Age" dense required outlined></v-select>
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
                              color="primary"
                              @click="getQuotes()"
                            >Get Quotes</v-btn>
                          </div>
                        </div>
                      </v-form>
                    </v-container>
                  </template>
                  <template v-else>
                    <v-container>
                      <span style="text-align: center">Not Found</span>
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
export default {
  name: "HelloWorld",
  data() {
    return {
      currentTabPath: "Health Insurance",
      city: [
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
      age: [
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
      console.log(this.$router, "router name");
      this.$router.push({ path: "/search/health" });
    }
  }
};
</script>

<style scoped lang="scss">
// .v-tabs-bar {
//   height: 100px;
// }
.v-tab {
  min-width: 95px;
  max-width: 95px;
}
.digify-wrap {
  padding: 0;
  width: 100%;
  height: 620px;
  background: #fff;
  background-position-x: right;
  background-position-y: center;
  border-bottom: dashed 1px #cccc;
}
.container {
  margin: 0 auto;
  max-width: 1280px;
}
.formSection {
  width: 870px;
  height: 630px;
  padding: 20px 50px 20px;
  .form-nav {
    width: 100%;
    margin: 25px 0 20px;
    height: 85px;
    border-bottom: solid 1px #ccc;
  }
}
.form {
  width: 590px;
  height: 340px;
  margin: 0 auto;
}
</style>
