<template>
  <v-container>
    <v-layout row wrap style="margin-top: 30px">
      <v-flex xs2>
        <h4>Your Profile</h4>
        <v-card style="margin-top:10px">
          <ui v-for="profile in my_profile" :key="profile">
            <div style="margin-left:10px">{{profile.name}} {{profile.value}}</div>
          </ui>
        </v-card>
        <!-- <v-card style="margin-top:10px">
          <v-list v-for="profile in my_profile" :key="profile">
            <v-list-item-content style="margin-left:10px">
              <v-list-item-title>{{profile.name}} {{profile.value}}
              </v-list-item-title>
            </v-list-item-content>
          </v-list>
        </v-card>-->
        <h4 style="margin-top:20px; margin-bottom:10px">Your Preferences</h4>
        <v-card>
          <h5 style="margin-left:10px">Plan Benefits</h5>
          <ui v-for="preference in preferences" :key="preference">
            <div style="margin-left:10px">{{preference.name}}</div>
          </ui>
        </v-card>
      </v-flex>
      <v-flex xs10>
        <div v-for="list in plan_list" :key="list">
          <v-card style="margin-left: 30px; height: 200px">
            <v-checkbox style="margin-left:10px" v-model="list.checkboxValue" :label="list.plan_name"></v-checkbox>
            <v-btn class="white--text" style="margin-left:750px; background-color:#fc5350; font-color:white">Buy for Rs.{{list.price}}
            </v-btn>
            <br/>
            <span style="margin-left:800px; font-size:10px">only Rs.{{list.per_day_price}}/ day </span>
            <span style="margin-left:360px;" class="hq-policy">Policy Boucher</span>
            <span style="margin-left: -430px;" class="hq-policy"> Plan Detail</span>
          </v-card>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Health",
  data() {
    return {
      my_profile: [
        {
          name: "Adults",
          value: 1
        },
        {
          name: "Children",
          value: 0
        },
        {
          name: "Age",
          value: "25 Years"
        },
        {
          name: "Sum Insured",
          value: "5 lacs"
        },
        {
          name: "Gender",
          value: "Male"
        },
        {
          name: "city",
          value: "New Delhi"
        }
      ],
      preferences: [
        {
          name: "Room Rent"
        },
        {
          name: "No Claim Bonus"
        },
        {
          name: "Co Payment"
        },
        {
          name: "S I Restoration"
        },
        {
          name: "PED Waiting Period"
        },
        {
          name: "Day Care Procedures"
        },
        {
          name: "Health Check Up"
        },
        {
          name: "Wellness"
        },
        {
          name: "AYUSH"
        }
      ],
      plan_list: [
        {
          plan_name: "Health Companion",
          checkboxValue: "false",
          plan_image: "1.png",
          score: 86.9,
          price: "7138",
          per_day_price: "19.56",
          benefits: [
            {
              name: "Room Rent"
            },
            {
              name: "No Claim Bonus"
            },
            {
              name: "Co Payment"
            },
            {
              name: "SI Restoration"
            }
          ],
          top_benfifts: {
            sum_assured: "5 Lacs",
            premium: "7138",
            room_rent: "No sub limits except for suite or above room category",
            pre_existing_disease:
              "Covered (after 3 years of continuous coverage for SI 5 lacs and above, after 4 years of continuous coverage for SI upto 4 lacs). For Family First Plan, 3 years waiting period is applicable",
            waiting_period:
              "Any diseases contracted during the first 30 days of commencement of the policy are not covered except for accidental cases",
            co_pay_required: "Not Applicable",
            ncb: "Available up to 100% of SI",
            day_care_procedure: "All day care treatments covered",
            pre_hosiptial_cover: "30 days",
            post_hosiptial_cover: "60 days",
            daily_cash_benfit: "Available as an add-on benefit",
            home_hosipital: "Covered upto 100% of SI"
          },
          other_benifts: {
            restore_benefit: true,
            pregancy_covered: false,
            health_checkup: true,
            critical_illness_benefit: false,
            regular_medical_expenses: false,
            ambulance_service_covered: true,
            lifelong_renewability: true,
            organ_donor_coverage: true,
            eye_cover: false,
            dental_cover: false,
            homeopathy: true,
            recovery_benefit: false
          }
        },
        {
          plan_name: "Complete Health Care Insurance",
          checkboxValue: "false",
          plan_image: "2.png",
          score: 86.6,
          price: "6393",
          per_day_price: "17.52",
          benefits: [
            {
              name: "Room Rent"
            },
            {
              name: "Co Payment"
            },
            {
              name: "PED Waiting Period"
            },
            {
              name: "SI Restoration"
            }
          ],
          top_benfifts: {
            sum_assured: "5 Lacs",
            premium: "6393",
            room_rent: "No sub limits on room rent",
            pre_existing_disease:
              "Covered (post 3 years of continued coverage)",
            waiting_period:
              "No medical treatments are covered within30 days from policy inception except for accidental emergencies",
            co_pay_required: "Not Applicable",
            ncb: "Available up to 50% of SI",
            day_care_procedure: "141 Day Care Procedures covered",
            pre_hosiptial_cover: "30 days",
            post_hosiptial_cover: "60 days",
            daily_cash_benfit: "Available as an add-on benefit",
            home_hosipital: "Covered upto 20% of SI"
          },
          other_benifts: {
            restore_benefit: true,
            pregancy_covered: true,
            health_checkup: true,
            critical_illness_benefit: true,
            regular_medical_expenses: true,
            ambulance_service_covered: true,
            lifelong_renewability: true,
            organ_donor_coverage: true,
            eye_cover: true,
            dental_cover: true,
            homeopathy: true,
            recovery_benefit: true
          }
        },
        {
          plan_name: "Care Plus No Claim Bonus Super",
          checkboxValue: "false",
          plan_image: "3.png",
          score: 82.5,
          price: "7283",
          per_day_price: "19.95",
          benefits: [
            {
              name: "Room Rent"
            },
            {
              name: "Co Payment"
            },
            {
              name: "PED Waiting Period"
            },
            {
              name: "No Claim Bonus"
            }
          ],
          top_benfifts: {
            sum_assured: "5 Lacs",
            premium: "7283",
            room_rent: "Single Private Room",
            pre_existing_disease:
              "Covered (post 4 years of continued coverage)",
            waiting_period:
              "Any diseases contracted during first 30 days of the policy start date except those arising out of accidents",
            co_pay_required:
              "20% of the Claim Amount (if insured is more than  61 years of age)",
            ncb: "Available up to 150% of SI",
            day_care_procedure: ">500 Day Care Procedures covered",
            pre_hosiptial_cover: "30 days",
            post_hosiptial_cover: "60 days",
            daily_cash_benfit: "Rs 500 per day upto 5 days for SI upto 4 L",
            home_hosipital: "Covered upto 10% of SI"
          },
          other_benifts: {
            restore_benefit: true,
            pregancy_covered: true,
            health_checkup: true,
            critical_illness_benefit: false,
            regular_medical_expenses: false,
            ambulance_service_covered: true,
            lifelong_renewability: true,
            organ_donor_coverage: true,
            eye_cover: false,
            dental_cover: false,
            homeopathy: true,
            recovery_benefit: false
          }
        }
      ]
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