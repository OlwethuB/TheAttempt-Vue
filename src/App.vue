<template>
  <router-view/>
  <!-- <NavSec/> -->
  <Skills/>
  <AboutMe/>
  <Projects/>
  <Testimonials/>
  <Contact/>
  <Footer/>
</template>

<script>

// import component name from component place   
import Skills from './components/Skills.vue';
import AboutMe from './components/About.vue';
import Projects from './components/Projects.vue';
import Testimonials from './components/Testimonials.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';


export default {
    // state components 
    components: {Skills,AboutMe,Projects,Testimonials,Contact,Footer}    

}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400&family=Roboto&family=Rubik&display=swap');


</style>
