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
                </v-list-item-content>
                <v-list-item-icon class="text-right">{{profile.value}}</v-list-item-icon>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>

        <h4 class="my-3">Your Preferences</h4>
        <v-card>
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
        <div v-for="(list, index) in plan_list" :key="index">
          <Quote :list="list" @setCompare="setCompare(index)" />
        </div>
      </v-col>
    </v-row>
    <v-bottom-sheet hide-overlay v-if="selected.length > 1" v-model="sheet" persistent>
      <v-sheet class="text-center" height="200px">
        <v-row>
          <v-col v-for="(item,index) in selected" :key="index">
            <v-card class="pa-5">
              <div>
                <img height="100px" :src="plan_list[item].plan_image" alt="plan_image" />
              </div>
              {{plan_list[item].plan_name}}
            </v-card>
          </v-col>
          <v-col :md="3">
            <div>
              <v-btn class="mt-6" text color="red" @click="dialogShow = true">Compare</v-btn>
              <v-btn class="mt-6" text color="error" @click="closeCompare">close</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-sheet>
    </v-bottom-sheet>

    <v-dialog v-model="dialogShow">
      <v-card>
        <v-container>
          <v-row>
            <v-col :md="selected.length > 2 ? 1 : 2">
              <v-btn @click="dialogShow = false;closeCompare()">Go Back</v-btn>
            </v-col>
            <v-col :md="selected.length > 2 ? 3 : 4" v-for="(item, index) in selected" :key="index">
              <div class="d-flex justify-center align-center flex-column">
                <div>
                  <img height="100px" :src="plan_list[item].plan_image" alt="plan_image" />
                </div>
                {{plan_list[item].plan_name}}
                <v-btn color="primary" class="mt-2" x-large>₹ {{plan_list[item].price}}</v-btn>
              </div>
            </v-col>
          </v-row>

          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr>
                  <th
                    class="text-center"
                    style="background : lightgrey"
                    :colspan="selected.length + 1"
                  >
                    <h2 class="ma-0">Top Features</h2>
                  </th>
                </tr>
                <tr>
                  <td>Sum Assured</td>
                  <td
                    v-for="(item, index) in selected"
                    :key="index"
                  >{{plan_list[item].top_benifits.sum_assured}}</td>
                </tr>
                <tr>
                  <td>Premium</td>
                  <td
                    v-for="(item, index) in selected"
                    :key="index"
                  >{{plan_list[item].top_benifits.premium}}</td>
                </tr>
                <tr>
                  <td>Room Rent</td>
                  <td
                    v-for="(item, index) in selected"
                    :key="index"
                  >{{plan_list[item].top_benifits.room_rent}}</td>
                </tr>
                <tr>
                  <td>Pre-existing diseases</td>
                  <td
                    v-for="(item, index) in selected"
                    :key="index"
                  >{{plan_list[item].top_benifits.pre_existing_disease}}</td>
                </tr>
                <tr>
                  <td>Waiting Period</td>
                  <td
                    v-for="(item, index) in selected"
                    :key="index"
                  >{{plan_list[item].top_benifits.waiting_period}}</td>
                </tr>
                <tr>
                  <td>Co-pay required</td>
                  <td
                    v-for="(item, index) in selected"
                    :key="index"
                  >{{plan_list[item].top_benifits.co_pay_required}}</td>
                </tr>
                <tr>
                  <td>NCB (additional cover in case of no claim)</td>
                  <td
                    v-for="(item, index) in selected"
                    :key="index"
                  >{{plan_list[item].top_benifits.ncb}}</td>
                </tr>

                <tr>
                  <td>Day care procedures covered</td>
                  <td
                    v-for="(item, index) in selected"
                    :key="index"
                  >{{plan_list[item].top_benifits.day_care_procedure}}</td>
                </tr>
                <tr>
                  <td>Pre-hospitalization coverage</td>
                  <td
                    v-for="(item, index) in selected"
                    :key="index"
                  >{{plan_list[item].top_benifits.pre_hosiptial_cover}}</td>
                </tr>
                <tr>
                  <td>Post-hospitalization coverage</td>
                  <td
                    v-for="(item, index) in selected"
                    :key="index"
                  >{{plan_list[item].top_benifits.post_hosiptial_cover}}</td>
                </tr>
                <tr>
                  <td>Daily cash benefit covered upto</td>
                  <td
                    v-for="(item, index) in selected"
                    :key="index"
                  >{{plan_list[item].top_benifits.daily_cash_benfit}}</td>
                </tr>
                <tr>
                  <td>Home/Domicilary hospitalization</td>
                  <td
                    v-for="(item, index) in selected"
                    :key="index"
                  >{{plan_list[item].top_benifits.home_hosipital}}</td>
                </tr>
                <tr>
                  <th
                    class="text-center"
                    style="background : lightgrey"
                    :colspan="selected.length + 1"
                  >
                    <h2 class="ma-0 text">Other Benefits</h2>
                  </th>
                </tr>

                <tr>
                  <td>Restore benefit</td>
                  <td
                    v-for="(item, index) in selected"
                    :key="index"
                  >{{plan_list[item].other_benifts.restore_benefit}}</td>
                </tr>
                <tr>
                  <td>Maternity/Pregnancy covered</td>
                  <td
                    v-for="(item, index) in selected"
                    :key="index"
                  >{{plan_list[item].other_benifts.pregancy_covered}}</td>
                </tr>
                <tr>
                  <td>Health Checkup</td>
                  <td
                    v-for="(item, index) in selected"
                    :key="index"
                  >{{plan_list[item].other_benifts.health_checkup}}</td>
                </tr>
                <tr>
                  <td>Critical Illness Benefit</td>
                  <td
                    v-for="(item, index) in selected"
                    :key="index"
                  >{{plan_list[item].other_benifts.critical_illness_benefit}}</td>
                </tr>
                <tr>
                  <td>Regular medical expenses (OPD) coverage</td>
                  <td
                    v-for="(item, index) in selected"
                    :key="index"
                  >{{plan_list[item].other_benifts.regular_medical_expenses}}</td>
                </tr>
                <tr>
                  <td>Ambulance services covered</td>
                  <td
                    v-for="(item, index) in selected"
                    :key="index"
                  >{{plan_list[item].other_benifts.ambulance_service_covered}}</td>
                </tr>
                <tr>
                  <td>Lifelong renewability</td>
                  <td
                    v-for="(item, index) in selected"
                    :key="index"
                  >{{plan_list[item].other_benifts.lifelong_renewability}}</td>
                </tr>

                <tr>
                  <td>Organ donor coverage</td>
                  <td
                    v-for="(item, index) in selected"
                    :key="index"
                  >{{plan_list[item].other_benifts.organ_donor_coverage}}</td>
                </tr>
                <tr>
                  <td>Eye cover</td>
                  <td
                    v-for="(item, index) in selected"
                    :key="index"
                  >{{plan_list[item].other_benifts.eye_cover}}</td>
                </tr>
                <tr>
                  <td>Dental cover</td>
                  <td
                    v-for="(item, index) in selected"
                    :key="index"
                  >{{plan_list[item].other_benifts.dental_cover}}</td>
                </tr>
                <tr>
                  <td>Ayurveda / Homeopathy</td>
                  <td
                    v-for="(item, index) in selected"
                    :key="index"
                  >{{plan_list[item].other_benifts.homeopathy}}</td>
                </tr>
                <tr>
                  <td>Recovery (Convalescence) benefit</td>
                  <td
                    v-for="(item, index) in selected"
                    :key="index"
                  >{{plan_list[item].other_benifts.recovery_benefit}}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-container>
      </v-card>
    </v-dialog>
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
      sheet: true,
      listData: [],
      dialogShow: false,
      dialogVisible: "false",
      my_profile: profile.data,
      preferences: preferences.data,
      plan_list: plan_list.data.map(d => ({ ...d, checked: false })),
      selected: []
    };
  },
  methods: {
    setCompare(i) {
      if (this.selected.indexOf(i) > -1) {
        this.selected = this.selected.filter(v => v !== i);
      } else {
        this.selected.push(i);
        if (this.selected.length > 1) {
          this.sheet = true;
        }
      }
    },
    closeCompare() {
      this.sheet = !this.sheet;
      this.selected = [];
      this.plan_list = this.plan_list.map(d => ({ ...d, checked: false }));
    }
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