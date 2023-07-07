<template>
    <!-- Footer -->
    <br>
    <footer class="bg-dark text-center text-white mt-3">
        <!-- Grid container -->
        <div class="container p-4 pb-0">
            <!-- Section: Social media -->
            <div class="">
                <!-- Call -->
                <a class="btn btn-floating m-1" target="_blank" href="https://i.kym-cdn.com/entries/icons/original/000/017/981/The_Real_Story_Behind_Black_Guy_On_The_Phone_Meme-500x500.jpg" role="button">
                    <lord-icon src="https://cdn.lordicon.com/ssvybplt.json" trigger="hover" colors="primary:#fff" style="width:25px;height:25px">
                    </lord-icon>
                </a>
                
                <!-- Google -->
                <a class="btn btn-floating m-1" target="_blank" href="/Index.html" role="button">
                    <lord-icon src="https://cdn.lordicon.com/osuxyevn.json" trigger="hover" colors="primary:#fff" style="width:25px;height:25px"></lord-icon>
                </a>
                
                <!-- Email -->
                <a class="btn btn-floating m-1" target="_blank" href="/Index.html" role="button">
                    <lord-icon src="https://cdn.lordicon.com/ifqmqwui.json" trigger="hover" colors="primary:#fff" style="width:25px;height:25px">
                    </lord-icon>
                </a>
                
                <!-- Youtube -->
                <!-- Button trigger modal -->
                <a type="button" href="https://www.youtube.com/watch?v=BBJa32lCaaY" class="btn btn-floating m-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop" role="button">
                    <lord-icon src="https://cdn.lordicon.com/ensnyqet.json" trigger="click" colors="primary:#fff" style="width:25px;height:25px">
                    </lord-icon>
                </a>
                <!-- Modal -->
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 text-black" id="staticBackdropLabel">Meme of the day!</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <iframe width="470" height="315" src="https://www.youtube.com/embed/9sPthPleEKo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Github -->
            <a class="btn btn-floating m-1" target="_blank" href="https://github.com/OlwethuB" role="button">
                <lord-icon src="https://cdn.lordicon.com/wluyqhxh.json" trigger="hover" colors="primary:#fff" style="width:25px;height:25px">
                </lord-icon>
            </a>

            <!-- CV download -->
            <a class="btn btn-floating m-1" target="_blank" href="https://github.com/OlwethuB" role="button">
                <lord-icon src="https://cdn.lordicon.com/fpmskzsv.json" trigger="hover" colors="primary:#fff" style="width:25px;height:25px">
                </lord-icon>
            </a>
        </div>
        <!-- Section: Social media -->
    </div>
    <!-- Grid container -->
    <div>
        <div class="text text-center">
            <!-- <img src="https://i.postimg.cc/Z5JfwqLW/logo.jpg" alt=""> -->
            <h2 class="footer-heading"><a href="#" class="logo"> Olwethu </a></h2>
            <p class="menu">
                <a href="/" class="p-0 p-lg-3 p-sm-1 text-wrap text-break">Intro</a>
                <a href="/about" class="p-0 p-lg-3 p-sm-1 text-wrap text-break">About Me</a>
                <a href="/" class="p-0 p-lg-3 p-sm-1 text-wrap text-break">Skills</a>
                <a href="/resume" class="p-0 p-lg-3 p-sm-1 text-wrap text-break">Experience</a>
                <a href="/project" class="p-0 p-lg-3 p-sm-1 text-wrap text-break">Projects</a>
                <a href="/testi" class="p-0 p-lg-3 p-sm-1 text-wrap text-break">Testimonials</a>
                <a href="/contact" class="p-0 p-lg-3 p-sm-1 text-wrap text-break">Contact</a>
            </p>
        </div>
    </div>
    
    <!-- Copyright -->
    <div class="text-center p-2" style="background-color: rgba(0, 0, 0, 0.2);">
        © 2023 Copyright: All rights reserved | Made with ❤️ 
        <a class=" p-0 text-decoration-none " href="/" target="_top"> Olwethu Bhiya </a>
        </div>
    </footer>

</template>

<style>
/* logo */
.logo{
    text-decoration: none;
}

/* the text links */
.menu a{
    text-decoration: none;
}

.menu a:hover{
    color: #fff;
}

</style>