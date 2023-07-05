<template>

<header id="header">
    <nav>
      <div class="navbar">
        <router-link class="navbar-brand" to="/">
          <img src="" alt="logo" class="logo" width="65" height="50" loading="eager"/>
        </router-link>
        <!-- center stuff -->
        <ul class="nav m-auto justify-content-center">
          <li class="nav-item">
            <router-link to="/" id="links" class="nav-link active" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link id="links" class="nav-link" to="/books">Books</router-link>
          </li>
          <li class="nav-item">
            <router-link id="links" class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link id="links" class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
/* ========================================== 
scrollTop() >= 300
Should be equal the the height of the header
// ========================================== */

(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('nav').addClass('fixed-header');
        $('nav div').addClass('visible-title');
    }
    else {
        $('nav').removeClass('fixed-header');
        $('nav div').removeClass('visible-title');
    }
});

</script>

<style>
/* main */
header {
    height: 360px;
    z-index: 10;
}

header h1  {
    background-color: rgba(18,72,120, 0.8);
    color: #fff;
    padding: 0 1rem;
    position: absolute;
    top: 2rem; 
    left: 2rem;
}

.fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%; 
}

nav {
    width: 100%;
    height: 60px;
    background: #292f36;
    position: fixed;
    z-index: 5;
}

nav div {
    color: white;
    font-size: 2rem;
    line-height: 60px;
    position: absolute;
    top: 0;
    left: 2%;
    visibility: hidden;
}
.visible-title {
    visibility: visible;
}

nav ul { 
    list-style-type: none;
    margin: 0 2% auto 0;
    padding-left: 0;
    text-align: right;
    max-width: 100%;
}
nav ul li { 
    display: inline-block; 
    line-height: 60px;
    margin-left: 10px;
}
nav ul li a {
    text-decoration: none; 
    color: #a9abae;
}
</style>