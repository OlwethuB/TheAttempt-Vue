<template>
  <!-- On top is the "Hero" section -->
  <!-- fixed scroll header... -->
  <NavSec/>
  <!-- About me the picture and paragraphs... -->
  <AboutMe/>
    <!-- Education and Work  -->
    <!-- timeline... must work (slide/scroll) -->  
    <h2> Experience</h2>
    <ResuCard/>
<br>
  <Skills/>

  
  <!-- Projects -->
  <h2>Projects</h2>
  <div v-if="projects" class="container">
    <div class="row">
      <Projects v-for="project of projects" :key="project.id" :project="project"/>
    </div>
  </div>
  <div v-else> Loading</div>

  <!-- Testimonial carasoule -->
   <!-- Home page... Slide show of popular picks -->
 <section class="mt-5 mb-5">
<h2>Testimonials</h2>

    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item" v-for="test in tests" :key="test" :class="{active: test.id == 1}">
          <img :src="test.image" class="d-block w-50" :class="{'float-end': test.id != 1, 'm-auto': test.id == 1}" :alt="test.name"/>
          <br>
          <div class="CaraText" v-if="test.id != 1">
            <h3>{{ test.name }}</h3>
            <h4>{{ test.relation }}</h4>
            <p> {{ test.words }}</p>
          </div>
        </div>
      </div>
      <br> 
      <div class="carousel-indicators mt-5">
        <button type="button" v-for="test in tests" :key="test" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="test.id - 1" class="thumbnail" :class="{active: test.id == 1}"
          aria-current="true" :aria-label="'Slide ' + test.id">
        </button>
        
      </div>
    </div>
 </section>
  <!-- <Testimonials/> -->
  <Contact/>  

  <!--  -->
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/IntroC.vue';
import NavSec from '@/components/NavSec.vue';
import ResuCard from '@/components/ResumeCard.vue'
import Skills from '@/components/Skills.vue';
import AboutMe from '@/components/About.vue';
import Projects from '@/components/Projects.vue';
import Testimonials from '@/components/Testimonials.vue';
import Contact from '@/components/Contact.vue';



export default {
  components: {
    Intro,NavSec,Skills,AboutMe,Projects,Testimonials,Contact,ResuCard
  },

  computed: {
    projects(){
      return this.$store.state.projects
    }
  },
  mounted(){
    this.$store.dispatch("getProjects")
  },

  data(){
    return{
      tests: [
    {
      id: 1,
      name: " ",
      image: "https://i.postimg.cc/0NmVVJw1/Testimonial-Examples-Featured-Image.webp",
      relation: " ",
      words: " "
    },
    {
      id: 2,
      name: "Candice Amon",
      image: "https://i.postimg.cc/cL4rb9BZ/27-candice-2022-pp1mt7sr5e41e1x5tqe2xgjgigkvycj7hlkvyrx4au.jpg",
      relation: "Academy Facilitator at Life Choices",
      words: "Olwethu is very good in communication. When facing challenges she tends to problem solve to the best of her ability. She follows instructions well and is very attentive to details. When not understanding she is not afraid to ask questions for clarity. She can work well in a team and also has the ability to work by herself and has been able to advance in these skills. She managed to maintain attendance at all times and is a very hard worker."
    },
    {
      id: 3,
      name: "Oslin Johnson",
      image: "https://i.postimg.cc/Pqk7s4h5/Ossie.png",
      relation: "Lecturer at Life Choices",
      words: "'Olwethu is a diligent person with a great personality and character. She is a hard worker willing to go the extra mile to ensure that their goal is reached within expected time. She is a very fourth coming person when comes to their ability but does not let their lack of skill deter them overcoming the challenge.'"
    },
    {
      id: 4,
      name: "Jamie-Lee Kinnear",
      image: "https://i.postimg.cc/cLSFPFkD/self-portrait.jpg",
      relation: "Mentor at Life Choices",
      words: "'Olwethu is a remarkable programmer and has an analytical approach to problem solving. She is a hardworking individual and dedicated to her work. She is a great peer and a team player. She show's initiative and I believe she would be a valuable asset to any company that would be lucky to have her.'"
    },
    {
      id: 5,
      name: "Caryn-Jayn Lodewyk",
      image: "https://i.postimg.cc/4NDtB2bn/Caryn.jpg",
      relation: "Colleague at Life Choices",
      words: "'Olwethu is a very hardworking person, When it comes to facing issues or something that she's unsure of how to do she'll go the extra mile to figure out what to do or to find a solution'"
    },
    {
      id: 6,
      name: "Mufuniwa Mbedzi",
      image: "https://i.postimg.cc/rmHzzzfz/Mufu.jpg",
      relation: "Colleague at Life Choices",
      words: "'Olwethu is someone that does her work with passion and I respect her for that'"
    },
    {
      id: 7,
      name: "Rabia Haucha",
      image: "https://i.postimg.cc/DyPJPfZp/Rabia.png",
      relation: "Colleague at Life Choices",
      words: "'Olwethu means our love, which describes how loving she is .She is really considerate when it comes to helping people and being there for them so she would work well in a group .She is the most softest-confident person I know she is not shy to ask questions .She is one of my closest friends and her thought process and the way she carries herself is really matured.She is a strong individual and gives honest opinions all the time and that's what you need in a work environment so would be the perfect candidate when looking for someone unique as her !'"
    }
    // {
    //   id: 8,
    //   name: "https://i.postimg.cc/1zwZDXRf/Liya.jpg",
    //   image: "Liyabona Mxhalisa",
    //   relation: "Colleague at Life Choices",
    //   words: "'Olwethu is a rockstar! Her hard work, positive attitude, and attention to detail make her an invaluable team member. Working with her has been an absolute pleasure, and I highly recommend her to anyone looking for a talented and dedicated professional.'"
    // },
    // {
    //   id: 9,
    //   name: "https://i.postimg.cc/SQwRLFVY/5-E82-FDA9-9827-47-C9-BA3-B-B7-BAB7613-C6-F.jpg",
    //   image: "Khazimla Mahomana",
    //   relation: "Colleague at Life Choices",
    //   words: "'Olwethu is a kind and awesome person to work with. She is extremely hard-working and once she puts her mind into something she makes sure that it gets done'"
    // }
  ]
    }
  }
}
</script>

<style>
body{
  background-image: linear-gradient(#303544,#4e5a6c,#154271);
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
/* .CaraText::-webkit-scrollbar {
  width: 10px; 
} */

/* Track */
/* .CaraText::-webkit-scrollbar-track {
  background: transparent; 
  border-radius:4px;
} */
 
/* Handle */
/* .CaraText::-webkit-scrollbar-thumb {
  background: #4e5a6c; 
  border-radius:4px;

} */

/* Handle on hover */
/* .CaraText::-webkit-scrollbar-thumb:hover {
  background: #303544; 
} */


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
