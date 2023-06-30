<template>
    <Intro/>

  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  <NavSec/>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Intro from '@/components/IntroC.vue';
import NavSec from './components/NavSec.vue';



export default {
  name: 'HomeView',
  components: {
    HelloWorld,Intro,NavSec
  }
}
</script>
