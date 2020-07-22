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
                @change="setData()"
                v-model="list.checked"
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
          </div>
          <span class="hq-policy text-center">Score Details</span>
        </v-col>
        <v-col :md="3">
          <div class="pa-1">
            <v-btn color="primary" @click="toggleDialog" block x-large>
              Buy for
              Rs.{{list.price}}
            </v-btn>
            <span style="font-size:10px">only Rs.{{list.per_day_price}}/ day</span>
            <span class="hq-policy">Policy Boucher</span>
          </div>
        </v-col>
      </v-row>
    </v-card>

    <v-dialog v-model="dialogVisible" persistent>
      <v-card>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="2" style="border-right: 1px solid lightgrey;">
                <h3 class="text-center">{{list.plan_name}}</h3>
                <img width="150px" :src="list.plan_image" />
              </v-col>
              <v-col cols="10">
                <v-row>
                  <v-col cols="12">
                    <span>
                      <b>Your Quote Summary</b>
                    </span>
                  </v-col>
                  <v-col cols="4" sm="6" md="4">
                    <v-select v-model="adults" label="Number of Adults" :items="[1, 2]" required></v-select>
                  </v-col>
                  <v-col cols="4" sm="6" md="4">
                    <v-text-field
                      v-model="children"
                      label="Number of Children"
                      :items="[0, 1, 2, 3]"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4" sm="6" md="4">
                    <v-menu
                      ref="menu"
                      :close-on-content-click="false"
                      :return-value.sync="elderDOB"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="elderDOB"
                          label="Eldest Member DOB"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="elderDOB" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.menu.save(elderDOB)">OK</v-btn>
                      </v-date-picker>
                    </v-menu>

                    <!-- <v-text-field label="Eldest Member DOB" required></v-text-field> -->
                  </v-col>
                  <v-col cols="4" sm="6" md="4">
                    <v-select
                      v-model="sum"
                      label="Sum Insured"
                      :items="['1 Lacs', '2 Lacs', '3 Lacs', '4 Lacs', '5 Lacs', '6 Lacs', '7 Lacs', '8 Lacs', '9 Lacs', '10 Lacs']"
                      required
                    ></v-select>
                  </v-col>
                  <v-col cols="4" sm="6" md="4">
                    <v-select
                      v-model="tensure"
                      label="Tensure"
                      :items="['1 Year', '2 Year', '3 Year']"
                      required
                    ></v-select>
                  </v-col>
                  <v-col cols="6">
                    <v-btn
                      @click="makePayment"
                      :disabled="checkValue"
                    >Make Payment Rs.{{list.price}}</v-btn>
                  </v-col>

                  <v-spacer />
                  <v-col cols="6">
                    <v-btn type="primary" @click="dialogVisible = false">Cancel</v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <!-- <v-card-actions>
          <v-btn @click="dialogVisible = false">Make Payment Rs.{{list.price}}</v-btn>
          <v-btn type="primary" @click="dialog = false">Edit Quotes</v-btn>
        </v-card-actions>-->
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "Quote",
  props: ["list", "model"],
  computed: {
    checkValue() {
      console.log(
        this.elderDOB,
        this.tensure,
        this.sum,
        this.children,
        this.adults
      );
      return !(
        this.elderDOB &&
        this.tensure &&
        this.sum &&
        this.children &&
        this.adults
      );
    }
  },
  data() {
    return {
      dialogVisible: false,
      elderDOB: "",
      tensure: "",
      sum: "",
      children: "",
      adults: ""
    };
  },
  methods: {
    makePayment() {
      this.$toasted.show("Payment has been successfully processed", {
        theme: "bubble",
        type: "success",
        position: "top-right",
        className: "lineHeight3",
        duration: 3000
      });
      this.toggleDialog();
    },
    setData(val) {
      this.$emit("setCompare", val);
    },
    toggleDialog() {
      this.dialogVisible = !this.dialogVisible;
    }
  }
};
</script>

<style lang="scss" scoped>
.borderRight {
  border-right: 1px solid lightgrey;
}
.lineHeight3 {
  line-height: 3em !important;
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