<template>
  <v-container>
    <v-row class="mt-5">
      <v-col :md="2">
        <h4>Your Profile</h4>
        <v-card style="margin-top:10px">
          <v-list dense color="primary" dark>
            <v-list-item-group>
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
          <!-- <v-subheader>Plan Benefits</v-subheader> -->
          <!-- <ui v-for="preference in preferences" :key="preference">
            <div style="margin-left:10px">{{preference.name}}</div>
          </ui>-->

          <v-list dense color="secondary" dark>
            <v-list-item-group>
              <v-list-item v-for="preference in preferences" :key="preference.name">
                <v-list-item-content>
                  <v-list-item-title v-text="preference.name"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>

      <v-col>
        <div v-for="list in plan_list" :key="list.plan_name">
          <Quote :list="list" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import profile from "../data/profile";
import preferences from "../data/preferences";
import plan_list from "../data/plan_list";
import Quote from "./Quote";
export default {
  name: "Health",
  components: {
    Quote
  },
  data() {
    return {
      dialogVisible: "false",
      my_profile: profile.data,
      preferences: preferences.data,
      plan_list: plan_list.data
    };
  },
  methods: {
    buyQuote() {}
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
.score-policy {
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

.cardValues {
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

.hq-button {
  width: 80%;
  float: left;
  padding: 1% 5%;
  background-color: #fc5350;
  margin: 0 10%;
  color: #fff;
  font-size: 14px;
}

.primary {
  color: #fc5350;
}
</style>