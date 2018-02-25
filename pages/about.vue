<template>
    <div>
        <navbar class="navbar-white"></navbar>
        <section>
            <!-- <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-5" style="background-color: #52ACFF">
                        <div class="about-header__text-box">
                            <p class="about-header__text">  We help students from all over the world to become familiar with the Ukrainian culture, customs, history and political development.  </p>
                        </div>
                    </div>

                    <div class="col-lg-7">
                        <img src="~/assets/images/queen-mary.png" alt="#" class="about-header__img">
                    </div>
                </div>
            </div> -->

            <div class="about-header">
                <div class="about-header__text-box">
                    <p class="about-header__text">  We help students from all over the world to become familiar with the  <span style="color: #FFE32C;"> Ukrainian </span> culture, customs, history and political development.  </p>
                </div>

                <div class="about-header__img">
                    &nbsp;
                </div>
            </div>
        </section>
    </div>    
</template>

<script>
import Navbar from '../components/Navbar'

export default {
    components: {
        Navbar
    }
}
</script>

<style>



</style>
