<template>
  <router-link :to="{ name: 'test', params: { id: test.id } }" class="carousel-item">
    <img :src="test.image_url" class="float-end d-block w-50" alt="test.name"/>
    <h3>{{ test.name }}</h3>
    <h4>{{ test.relation }}</h4>
    <p> {{ test.words }}</p>
  </router-link>
</template>

<script>
export default{
    props: ["test"]
}
</script>

<style></style>
