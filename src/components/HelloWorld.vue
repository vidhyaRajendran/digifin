<template>
  <div class="digify-wrap">
    <div class="container">
      <section class="formSection">
        <h2>Compare Best Insurance Policies & Save Money</h2>
        <div class="form">
          <div class="form-nav">
            <ui class="tabs" style="width:100%" v-for="tab in tabs" :key="tab">
              <li class="tab">
                <a class="tabSection">
                  <img :title="tab.name" :alt="tab.name" :src="tab.icon" width="28px" height="29px" />
                  {{tab.name}}
                  <span>{{tab.suffix}}</span>
                </a>
              </li>
            </ui>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      tabs: [
        {
          icon:
            "https://www.comparepolicy.com/cp/new-design/images/term-icon.jpg",
          name: "Term",
          suffix: "Insurance"
        },
        {
          icon:
            "https://www.comparepolicy.com/cp/new-design/images/health-icon.jpg",
          name: "Health",
          suffix: "Insurance"
        },
        {
          icon:
            "https://www.comparepolicy.com/cp/new-design/images/investment-icon.jpg",
          name: "Invesment",
          suffix: "Plan"
        },
        {
          icon:
            "https://www.comparepolicy.com/cp/new-design/images/cancer-icon.jpg",
          name: "Cancer",
          suffix: "Plan"
        },
        {
          icon:
            "https://www.comparepolicy.com/cp/new-design/images/child-icon.jpg",
          name: "Child",
          suffix: "Plan"
        },
        {
          icon:
            "https://www.comparepolicy.com/cp/new-design/images/retirement-icon.jpg",
          name: "Retirement",
          suffix: "Plan"
        },
        {
          icon:
            "https://www.comparepolicy.com/cp/new-design/images/car-icon.jpg",
          name: "Car",
          suffix: "Insurance"
        },
        {
          icon:
            "https://www.comparepolicy.com/cp/new-design/images/bike-icon.jpg",
          name: "Bike",
          suffix: "Insurance"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
  .form {
    width: 100%;
    height: 465px;
    box-shadow: 0px 0px 10px 0px rgba(0, 36, 105, 0.4);
    margin-top: 35px;
    border-radius: 5px;
    /* overflow: hidden; */
    padding-top: 1px;
    background: #fff;
  }
  .form-nav {
    width: 100%;
    margin: 25px 0 20px;
    height: 85px;
    border-bottom: solid 1px #ccc;
  }
  .tabs {
    .tab {
      height: 84px;
      letter-spacing: normal;
      overflow: visible;
      text-transform: none;
    }
    .tabSection {
      margin-left: auto;
      width: 90%;
      margin-right: auto;
    }
  }
}
</style>
