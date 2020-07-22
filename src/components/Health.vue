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
        <v-row>
          <v-col v-for="list in plan_list" :key="list" cols="12">
            <v-card style="margin-left: 30px; height: 150px">
              <v-row>
                <v-col cols="2" style="border-right: 1px solid lightgrey;margin-bottom: -100px;">
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
                <v-col cols="2" class="score-policy">Score - {{list.score}}/100</v-col>
                <v-col cols="6">
                  <v-card-title class="tableBenefits" style="font-size:15px">Top 4 Benefits</v-card-title>
                  <v-card-title class="cardValues">
                    1.Room Rent
                    <v-spacer />2.No Claim Bonus
                  </v-card-title>
                  <v-card-title>
                    3.Co Payment
                    <v-spacer />4.S I Restoration
                  </v-card-title>
                  <v-card-title class="hq-policy">Score Details</v-card-title>
                </v-col>
                <v-col cols="2">
                  <div class="white--text" style=" background-color:#fc5350; font-color:white">
                    <a>
                      Buy for
                      <br />
                      Rs.{{list.price}}
                    </a>
                  </div>
                  <br />
                  <span style="font-size:10px">only Rs.{{list.per_day_price}}/ day</span>
                  <span class="hq-policy">Policy Boucher</span>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
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
.score-policy{
  font-size: 12px;
  color: #f98027;
  text-decoration: underline;
  width: 100%;
  float: left;
  text-align: center;
  font-style: normal;
  font-weight: 600;
}

.hide-show-wrap {
  width: 115px;
  height: 40px;
  background: #232121;
  position: absolute;
  top: -40px;
  right: 10px;
  color: #fff;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
}
.v-input--selection-controls .v-input__slot > .v-label,
.v-input--selection-controls .v-radio > .v-label {
  font-size: 12px !important;
  font-weight: bold !important;
}
.v-card__title {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  letter-spacing: 0.0125em;
  line-height: 2rem;
  word-break: break-all;
  border: 1px solid lightgray;
  text-align: center;
  padding: 2px 3px;
}

.tableBenefits {
  text-align: center;
  justify-content: center;
  color: green;
  position: relative;
  top: -12px;
  border-top: none;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  letter-spacing: 0.0125em;
  line-height: 2rem;
  word-break: break-all;
  padding: 0;
}

.cardValues{
  position: relative;
  top: -12px;
  border-top: none;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  letter-spacing: 0.0125em;
  line-height: 2rem;
  word-break: break-all;
  padding: 0;
}
</style>