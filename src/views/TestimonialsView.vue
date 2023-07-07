<template>
<!-- <NavSec/> -->
  <!-- Testimonial carasoule -->
   <!-- Home page... Slide show of popular picks -->
   <section class="mt-5 mb-5">
<h2>Testimonials</h2>

    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item whole" v-for="testi in testis" :key="testi" :class="{active: testi.id == 1}">
          <img :src="testi.image" class="d-block w-50 img" :class="{'float-end': testi.id != 1, 'm-auto': testi.id == 1}" :alt="testi.name"/>
          <br>
          <div class="CaraText" v-if="testi.id != 1">
            <h3>{{ testi.name }}</h3>
            <h4>{{ testi.relation }}</h4>
            <p> {{ testi.words }}</p>
          </div>
        </div>
      </div>
      <br> 
      <div class="carousel-indicators mt-5">
        <button type="button" v-for="testi in testis" :key="testi" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="testi.id - 1" class="thumbnail" :class="{active: testi.id == 1}"
          aria-current="true" :aria-label="'Slide ' + testi.id">
        </button>
        
      </div>
    </div>
 </section>
  <!-- <Testimonials/> -->
</template>

<script>
import NavSec from '@/components/NavSec.vue';

export default{
  components:{NavSec},
  // props: ["testi"],
  computed: {
    testis(){
      return this.$store.state.testis;
    }
  },
  mounted(){
    this.$store.dispatch("getTestis");
  },
}

</script>

<style>
@media (max-width: 750px){
  .img{
    height: 300px;
    object-fit: contain;
  }
  .CaraText{
    height: 300px;
  }
  .whole{
    height: 300px;
  }
}
</style>
