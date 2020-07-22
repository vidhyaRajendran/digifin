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
                @change="setData(model)"
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
  props: ["list", "model"],
  data() {
    return {
      dialogShow: false,
    }
  },
  methods: {
    setData(val) {
      this.$emit('list', val)
    }
  }
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