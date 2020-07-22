<template>
  <div class="mb-4">
    <v-card>
      <v-row>
        <v-col :md="2" class="borderRight">
          <v-row>
            <v-col cols="12" style="padding: 0px 10px">
              <v-checkbox
                class="checkbox-lable"
                style="margin-left:10px;font-size: 12px;font-weight: bold;"
                v-model="list.checkboxValue"
                :label="list.plan_name"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" style="padding: 0px 10px;text-align: center;">
              <img width="100px" :src="list.plan_image" />
            </v-col>
            <v-col cols="12" style="padding: 0px 10px">
              <span class="hq-policy">Plan Detail</span>
            </v-col>
          </v-row>
          <!-- <v-card>
                      <v-card-title class="subheading font-weight-bold">Top 4 Benefits</v-card-title>

                      <v-divider></v-divider>

                      <v-list dense>
                        <v-list-item>
                          <v-list-item-content>1. Room Rent</v-list-item-content>
                          <v-list-item-content class="align-end">2. No Claim Bonus</v-list-item-content>
                        </v-list-item>

                        <v-list-item>
                          <v-list-item-content>3. Co payment</v-list-item-content>
                          <v-list-item-content class="align-end">4. PEO Waiting Period</v-list-item-content>
                        </v-list-item>
                      </v-list>
          </v-card>-->
        </v-col>
        <v-col :md="3" class="borderRight">
          <div class="d-flex justify-center align-center">
            <v-progress-circular
              :rotate="360"
              :size="100"
              :width="15"
              :value="list.score"
              color="teal"
            >{{ list.score }}</v-progress-circular>
          </div>
          <div class="score-policy mt-4">Score - {{list.score}}/100</div>
        </v-col>
        <v-col :md="4" class="borderRight">
          <div>
            <h5 class="h5 tableBenefits">Top 4 Benefits</h5>
            <ol class="benefitsList">
              <li v-for="benefit in list.benefits" :key="benefit.name">
                {{benefit.name}}
                <v-icon>mdi-info</v-icon>
              </li>
            </ol>

            <!-- <v-list dense>
              <v-list-item-group color="primary" class="d-flex flex-wrap w-100">
                <v-list-item >
                  <v-list-item-content>
                    <v-list-item-title v-text="benefit.name"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>-->
          </div>
          <!-- <v-card-title class="cardValues">
            1.Room Rent
            <v-spacer />2.No Claim Bonus
          </v-card-title>
          <v-card-title>
            3.Co Payment
            <v-spacer />4.S I Restoration
          </v-card-title>-->
          <span class="hq-policy text-center">Score Details</span>
        </v-col>
        <v-col :md="3">
          <div class="pa-1">
            <v-btn color="primary" block x-large>
              Buy for
              Rs.{{list.price}}
            </v-btn>
            <span style="font-size:10px">only Rs.{{list.per_day_price}}/ day</span>
            <span class="hq-policy">Policy Boucher</span>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "Quote",
  props: ["list"]
};
</script>

<style lang="scss" scoped>
.borderRight {
  border-right: 1px solid lightgrey;
}

.benefitsList {
  list-style: lower-roman;
  //   margin: 0;
  //   padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  li {
    min-width: 50%;
    padding-bottom: 5px;
  }
}
</style>