<template>
  <!-- On top is the "Hero" section -->
  <!-- fixed scroll header... -->
  <NavSec/>
  <!-- About me the picture and paragraphs... -->
  <AboutMe/>
    <!-- Education and Work  -->
    <!-- timeline... must work (slide/scroll) -->  

  <Skills/>
  <Projects/>
  <Testimonials/>
  <Contact/>

  <!--  -->
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/IntroC.vue';
import NavSec from '@/components/NavSec.vue';
import Skills from '@/components/Skills.vue';
import AboutMe from '@/components/About.vue';
import Projects from '@/components/Projects.vue';
import Testimonials from '@/components/Testimonials.vue';
import Contact from '@/components/Contact.vue';



export default {
  components: {
    Intro,NavSec,Skills,AboutMe,Projects,Testimonials,Contact
  }
}
</script>

<style>
body{
  background-image: linear-gradient(#303544,#4e5a6c,#154271);
  overflow-x: hidden;
  font-family: Rubik;
}
</style>
