<template>
      <!-- <NavSec/> -->
   <!-- the actual body body -->
   <main class="min-vh-80 m-5" style="text-align: center;">
        <!-- Dark version -->
        <div class="container bd-black" id="darkver">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="wrapper">
                        <div class="row no-gutters">
                            <div class="col-md-6 d-flex align-items-stretch">
                                <div class="contact-wrap w-100 p-md-5 p-4 py-5">
                                    <h3 class="mb-4 fo">Message me...</h3>
                                    <form action="https://formspree.io/f/moqzbaow" method="POST" id="contactForm"
                                        name="contactForm" class="contactForm">
                                        <div class="row">
                                            <div class="col-md-12 pb-2">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" name="name" id="name" placeholder="Name" required>
                                                </div>
                                            </div>
                                            <div class="col-md-12 pb-2">
                                                <div class="form-group">
                                                    <input type="email" class="form-control" name="email" id="email" placeholder="Email" required>
                                                </div>
                                            </div>
                                            <div class="col-md-12 pb-2">
                                                <div class="form-group"><input type="telephone" class="form-control" name="telephone" id="telephone" placeholder="Phone Number (Optional)"></div>
                                            </div>
                                            <div class="col-md-12 pb-2">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
                                                </div>
                                            </div>
                                            <div class="col-md-12 pb-2">
                                                <div class="form-group">
                                                    <textarea name="message" class="form-control" id="message" cols="30" rows="6" placeholder="Message" required></textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12 pb-2">
                                                <div class="form-group">
                                                    <input type="submit" value="Send Message">
                                                    <input type="reset" value="Clear Form">
                                                </div>
                                                <div class="form-group">
                                                    <div class="submitting"></div>
                                                    <div class="Clearing"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-md-6 d-flex align-items-stretch">
                                <div class="info-wrap w-100 p-md-5 p-4 py-5 img">
                                    <h3 class="fo">Contact information</h3>
                                    <p class="mb-4 fo">If at all you would like to work with me, Here is my contact info
                                    </p>
                                    <div class="dbox w-100 d-flex align-items-start">
                                        <div class="text pl-3">
                                            <p><span class="fo">Address:</span> <a href="https://goo.gl/maps/qnR6RGGvVR6MZyDb6?coh=178573&entry=tt" target="_blank" style="text-decoration: none; color: #00ceb6"><em>See map link</em></a></p>
                                        </div>
                                    </div>
                                    <div class="dbox w-100 d-flex align-items-center">
                                        <div class="text pl-3">
                                            <p><span class="fo">Phone:</span> <a href="http://spittoon.co.uk/wp-content/uploads/2019/01/error-meme.jpg" target="_blank" style="text-decoration: none; color: #00ceb6">+ 1235 2355 98</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="dbox w-100 d-flex">
                                        <!-- < class="text pl-3"> -->
                                            <p class="text-wrap"><span class="fo">Email:</span><a href="https://media.makeameme.org/created/hello-rtr56j.jpg" target="_blank" style="text-decoration: none; color: #00ceb6;">
                                                    Future_corpse@gmail.com</a>
                                            </p>
                                    </div>
                                    <div class="dbox w-100 d-flex align-items-center">
                                        <div class="text pl-3">
                                            <p><span class="fo">Website</span> <a href="/Index.html" style="text-decoration: none; color: #00ceb6">Olwethu Bhiya.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import NavSec from '@/components/NavSec.vue';

export default{
    components:{NavSec}
}

</script>

<style>
    /* Dark ver */
#darkver {
  background-image: url(https://i.postimg.cc/CLmdXPgw/Bkg-lndscp-1.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
/* form button */
input {
  white-space: normal;
  padding: 15px 25px;
  border: solid;
  border-radius: 15px;
  color: black;
  z-index: 1;
  background: #00ceb6;
  position: relative;
  font-weight: 1000;
  font-size: 17px;
  transition: all 250ms;
  overflow: hidden;
}

input::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  border-radius: 15px;
  background-color: #212121;
  z-index: -1;
  transition: all 250ms;
}

input:hover {
  color: #00ceb6;
  background-color: #212121;
}

input:hover::before {
  width: 100%;
}
/* Form */
/* #sec{
    background-color: #eb886f;
    border:10px solid #ef9d88;
    min-height: 50vh;
    width: 70vh;
    margin: auto;
    display: block;
    align-items: center;
    font-size: 30px;
   } */
/* end of form */

/* email text */
.text-wrap a {
  overflow-wrap: anywhere;
}

.fo{
    color: #fff;
}

</style>
