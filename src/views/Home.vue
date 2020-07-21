<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <Health/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Health from '@/components/Health.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Health
  }
}
</script>
