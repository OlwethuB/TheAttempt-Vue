<template>
  <!-- assign a reference to html element using ref attribute -->
  <header ref="headRef">
    <div class="bg-warning py-2">Some top header info</div>

    <nav id="navbar_top" class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" href="#">Brand</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="main_nav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#"> Menu item </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> Menu item </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> Menu item </a>
            </li>
          </ul>
        </div>
        <!-- navbar-collapse.// -->
      </div>
      <!-- container-fluid.// -->
    </nav>
  </header>
</template>

<script>
  export default {
    methods: {
      vueOnScroll() {
        var prev = window.pageYOffset;
        const refs = this.$refs.headRef; // assign the reference in variable
        window.addEventListener("scroll", () => {
          var curr = window.pageYOffset;
          if (prev > curr) {
            refs.classList.add("scrolled");
            refs.classList.remove("scrollDown");
          } else {
            refs.classList.add("scrollDown");
            refs.classList.remove("scrolled");
          }
          if (curr === 0) {
            refs.classList.remove("scrollDown");
            refs.classList.remove("scrolled");
          }
            prev = curr;
        });
      },
    },
    mounted() {
      // run the function when the component's mount
      this.vueOnScroll();
    }
  }
</script>

<style>

</style>