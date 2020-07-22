<template>
  <v-container>
    <v-layout row wrap class="mt-5">
      <v-flex xs2>
        <h4>Your Profile</h4>
        <v-card style="margin-top:10px">
          <v-list dense>
            <v-list-item-group color="primary">
              <v-list-item v-for="profile in my_profile" :key="profile.value">
                <v-list-item-content>
                  <v-list-item-title v-text="profile.name"></v-list-item-title>

                  <!-- <v-list-item-avatar>{{profile.value}}</v-list-item-avatar> -->
                </v-list-item-content>

                <v-list-item-icon class="text-right">{{profile.value}}</v-list-item-icon>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>

        <h4 class="my-3">Your Preferences</h4>
        <v-card>
          <!-- <h5 style="margin-left:10px">Plan Benefits</h5> -->
          <v-subheader>Plan Benefits</v-subheader>
          <!-- <ui v-for="preference in preferences" :key="preference">
            <div style="margin-left:10px">{{preference.name}}</div>
          </ui>-->

          <v-list dense>
            <v-list-item-group color="primary">
              <v-list-item v-for="preference in preferences" :key="preference.name">
                <v-list-item-content>
                  <v-list-item-title v-text="preference.name"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-flex>
      <v-flex xs10>
        <div v-for="list in plan_list" :key="list">
          <v-card style="margin-left: 30px; height: 200px">
            <v-checkbox
              style="margin-left:10px"
              v-model="list.checkboxValue"
              :label="list.plan_name"
            ></v-checkbox>
            <v-container fluid>
              <v-data-iterator :items="list" hide-default-footer>
                <template v-slot:default="props">
                  <v-row>
                    <v-col v-for="item in props" :key="item" cols="12" sm="6" md="4" lg="3">
                      <v-card>
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
                      </v-card>
                    </v-col>
                  </v-row>
                </template>
              </v-data-iterator>
            </v-container>
            <v-btn
              class="white--text"
              style="margin-left:750px; background-color:#fc5350; font-color:white"
            >Buy for Rs.{{list.price}}</v-btn>
            <br />
            <span style="margin-left:800px; font-size:10px">only Rs.{{list.per_day_price}}/ day</span>
            <span style="margin-left:360px;" class="hq-policy">Policy Boucher</span>
            <span style="margin-left: -430px;" class="hq-policy">Plan Detail</span>
          </v-card>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import profile from "../data/profile";
import preferences from "../data/preferences";
import plan_list from "../data/plan_list";
export default {
  name: "Health",
  data() {
    return {
      my_profile: profile.data,
      preferences: preferences.data,
      plan_list: plan_list.data
    };
  }
};
</script>

<style lang="scss">
.hq-policy {
  font-size: 12px;
  color: #59ccc2;
  text-decoration: underline;
  width: 100%;
  float: left;
  text-align: center;
  font-style: normal;
  font-weight: 600;
}
</style>