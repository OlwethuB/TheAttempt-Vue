<template>
    <NavSec/>
  <!-- Projects -->
  <h2>Projects</h2>
  <div v-if="projects" class="container" id="po">
    <div class="row">
      <Projects v-for="project of projects" :key="project.id" :project="project"/>
    </div>
  </div>
  <div v-else> Loading</div>
  <br>
</template>

<script>
import NavSec from '@/components/NavSec.vue';
import Projects from '@/components/Project.vue';

export default {
  components: {Projects,NavSec},
  computed: {
    projects(){
      return this.$store.state.projects
    }
  },
  mounted(){
    this.$store.dispatch("getProjects");
  },
}
</script>

<style>
.po{
  min-height: 100vh;
}
</style>