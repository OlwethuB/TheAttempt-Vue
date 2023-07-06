<template>
 <header id="header" class="sticky-top">
    <nav class="navbar">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img src="https://i.postimg.cc/Z5JfwqLW/logo.jpg" alt="logo" class="logo"  loading="eager"/>
        </router-link>
        <!-- center stuff -->
        <ul class="nav m-auto justify-content-center">
          <li class="nav-item">
            <!-- <a id="links" class="nav-link active" aria-current="page" href="/">Home</a> -->
            <router-link to="/" id="links" class="nav-link active" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <!-- <a id="links" class="nav-link" href="/">Books</a> -->
            <router-link id="links" class="nav-link" to="/books">Books</router-link>
          </li>
          <li class="nav-item">
            <!-- <a id="links" class="nav-link" href="/">About</a> -->
            <router-link id="links" class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <!-- <a id="links" class="nav-link" href="/">Contact</a> -->
            <router-link id="links" class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400&family=Roboto&family=Rubik&display=swap');

/* Navigation */
header {
  width: 100%;
background-color: #27374D;
opacity: 0.8;
}

@media (max-width: 768px) {
header {
  height: auto;
  margin-bottom: 100px;
}}

.logo{
  border-radius: 50%;
  width: 55px;
  height:  50px;
  background-size: contain;

}

#links {
  color: #fff !important;
  font-size: 20px; 
  margin: 20px;
}

#links:hover{
  border-radius: 4px;
border: 4px solid #123f92;
margin: 15px;

}

@media (max-width: 862px) {
#links {
font-size: 20px;
margin: 5px;
}
#links:hover {
  border-radius: 2px;
  border: 2px solid #123f92;
margin: 5px;
}
}

@media (max-width: 662px) {
#links {
font-size: 12px;
margin: 5px;
}
#links:hover {
  border-radius: 2px;
  border: 2px solid #123f92;
margin: 2px ;
}
}

</style>