<template>
  
  <NavSec/>
  
  <!-- Education and Work  -->
  <!-- timeline... must work (slide/scroll) -->  
  <br>
  <h2> Experience</h2>
  <div class="container-fluid p-5">
    <div class="row">
      
      <div class="col-lg-12">
        <div class="car">
          <div class="car-body mt-4">
            <div class="hori-timeline flex-row flex-nowrap" dir="ltr">
              <button class="btn btn-dark collapsed py-0" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2" fdprocessedid="usi3f6">
                See All
              </button>
              <ul class="list-inline events">
                <!-- <li class="list-inline-item event-list">
                </li> -->
                <ResuCard :experience="experiences"/>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Skills/>
</template>

<script>
import NavSec from '@/components/NavSec.vue';
import ResuCard from '@/components/ResumeCard.vue'
import Skills from '@/components/Skills.vue'

export default {
  components: {
    ResuCard,NavSec,Skills
  },
  computed: {
    experiences(){
      return this.$store.state.experience
    }
  },
  mounted(){
    this.$store.dispatch("getExperience")
  },

  data(){
    return{
      props: ["experience"]
    }
  }
}
</script>

<style>

</style>