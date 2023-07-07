<template>
        <router-link to="#intro" class="hidden" />
      <router-link to="#about" class="hidden" />
      <router-link to="#resume" class="hidden" />
      <router-link to="#skills" class="hidden" />
      <router-link to="#projects" class="hidden" />
      <router-link to="#testimonials" class="hidden" />
      <router-link to="#contact" class="hidden" />

  <!-- On top is the "Hero" section -->
  <section id="#intro">
    <Intro/>
  </section>
  <!-- fixed scroll header... -->
  <NavSec/>
  <!-- About me the picture and paragraphs... -->
  <section id="skills">
    <Skills/>
  </section>

  <section id="about">
    <AboutMe/>
  </section>

  <section id="resume">
    <Resume/>
  </section>
<br>
<!-- <h1 id="Skills">Skills</h1> -->
<section id="projects">
  <Projects/>
</section>
  <br>
  <section id="testimonials">
<Testimonials/>
  </section>

<section id="contact">
  <Contact/>  
</section>

  <!--  -->
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/IntroC.vue';
import NavSec from '@/components/NavSec.vue';
import Skills from '@/components/Skills.vue';
import AboutMe from '@/views/AboutView.vue';
import Testimonials from '@/views/TestimonialsView.vue';
import Projects from '@/views/ProjectsView.vue';
import Contact from '@/views/ContactView.vue';
import Resume from '@/views/ResumeView.vue'



export default {
  components: {
    Intro,NavSec,Skills,AboutMe,Testimonials,Contact,Projects,Resume
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
