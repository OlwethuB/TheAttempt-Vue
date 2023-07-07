<template>
  <!-- On top is the "Hero" section -->
  <Intro/>
  <!-- fixed scroll header... -->
  <NavSec/>
  <!-- About me the picture and paragraphs... -->
  <!-- <AboutMe/> -->


<br>
<!-- <h1 id="Skills">Skills</h1> -->
  <Skills/>




  <!-- <Contact/>   -->

  <!--  -->
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/IntroC.vue';
import NavSec from '@/components/NavSec.vue';
import Skills from '@/components/Skills.vue';
import AboutMe from '@/views/AboutView.vue';
import Testimonials from '@/views/TestimonialsView.vue';
import Contact from '@/views/ContactView.vue';



export default {
  components: {
    Intro,NavSec,Skills,AboutMe,Testimonials,Contact
  },
}
</script>

<style>
body{
  background-image: linear-gradient(#9DB2BF,#526D82,#526D82,#27374D);
  overflow-x: hidden;
  font-family: Rubik;
}

/* Carousel */
.carousel-item{
  justify-content: center !important;
}

.CaraText{
  margin-top: 5%;
  justify-content: center;
  height: 250px;
  overflow-y: scroll;
}

/* text scroll */
  /* width */
.CaraText::-webkit-scrollbar {
  width: 10px; 
}

/* Track */
.CaraText::-webkit-scrollbar-track {
  background: transparent; 
  border-radius:4px;
}
 
/* Handle */
.CaraText::-webkit-scrollbar-thumb {
  background: #4e5a6c; 
  border-radius:4px;

}

/* Handle on hover */
.CaraText::-webkit-scrollbar-thumb:hover {
  background: #303544; 
}


.carousel-item img {
  height: 500px !important;
  
}

.thumbnail{
  background-color: #000 !important;
}

/* projects */
h2{
  color: #fff !important;
  font-family: Rubik;
}
</style>
