<template>
  <router-link :to="{ name: 'testi', params: { id: testi.id } }" class="carousel-item">
    <img :src="testi.image_url" class="float-end d-block w-50" alt="test.name"/>
    <h3>{{ testi.name }}</h3>
    <h4>{{ testi.relation }}</h4>
    <p> {{ testi.words }}</p>
  </router-link>
</template>

<script>
export default{
    props: ["testi"]
}
</script>

<style></style>
