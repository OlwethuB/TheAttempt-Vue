<template>
  <router-view/>
  <Footer/>
</template>

<script>

// import component name from component place   
import Intro from './components/IntroC.vue';
import Footer from './components/Footer.vue';


export default {
    // state components 
    components: {Intro,Footer}    

}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400&family=Roboto&family=Rubik&display=swap');


</style>
